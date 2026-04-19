import { CamperListItem } from "@/types";
import styles from "./CamperCard.module.css";
import Image from "next/image";
import Icon from "@/components/UI/Icon/Icon";
import Button from "@/components/UI/Button/Button";
import Link from "next/link";

type CamperCardProps = {
  camper: CamperListItem;
  eagerImage?: boolean;
};

function CamperCard({ camper, eagerImage = false }: CamperCardProps) {
  const starClassName =
    camper.rating > 0 ? styles.starFilled : styles.starEmpty;
  return (
    <div className={styles.camperCardWrapper}>
      <div className={styles.imageBlock}>
        <Image
          className={styles.camperImage}
          src={camper.coverImage}
          alt={camper.name}
          width={219}
          height={240}
          priority={eagerImage}
          loading={eagerImage ? "eager" : "lazy"}
        />
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.topRow}>
          <h2 className={styles.cardHeading}>{camper.name}</h2>
          <p className={styles.price}>
            €{camper.price.toLocaleString("en-US")}
          </p>
        </div>

        <div className={styles.metaRow}>
          <div className={styles.ratingBlock}>
            <Icon name="star" className={starClassName} />
            <p className={styles.details}>
              {camper.rating}({camper.totalReviews} Reviews)
            </p>
          </div>

          <div className={styles.locationBlock}>
            <Icon className={styles.iconLoc} name="location" />
            <p className={styles.details}>{camper.location}</p>
          </div>
        </div>

        <p className={styles.camperDescription}>{camper.description}</p>

        <div className={styles.featuresRow}>
          <ul className={styles.featuresList}>
            <li className={styles.featureItem}>
              <Icon className={styles.iconFeat} name="engine" />
              <span className={styles.featureText}>{camper.engine}</span>
            </li>
            <li className={styles.featureItem}>
              <Icon className={styles.iconFeat} name="transmission" />
              <span className={styles.featureText}>{camper.transmission}</span>
            </li>
            <li className={styles.featureItem}>
              <Icon className={styles.iconFeat} name="form" />
              <span className={styles.featureText}>{camper.form}</span>
            </li>
          </ul>
        </div>
        <Link href={`/catalog/${camper.id}`} target="_blank" rel="noreferrer">
          <Button className={styles.cardBtn} variant="primary">
            Show more
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CamperCard;
