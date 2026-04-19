"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";

import styles from "./Gallery.module.css";

type GalleryImage = {
  thumb: string;
  original: string;
};

type GalleryProps = {
  images: GalleryImage[];
  name: string;
};

export default function Gallery({ images, name }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={styles.galleryWrapper}>
      <Swiper
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        spaceBetween={0}
        className={styles.mainSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.original}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={image.original}
                alt={`${name} image ${index + 1}`}
                fill
                className={styles.mainImage}
                sizes="(max-width: 768px) 100vw, 640px"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        watchSlidesProgress
        className={styles.thumbsSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className={`thumb-slide ${styles.thumbSlide}`}
          >
            <Image
              src={image.thumb || image.original}
              alt={`${name} ${index + 1}`}
              width={135}
              height={144}
              className={styles.thumbImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
