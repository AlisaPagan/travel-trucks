import Gallery from "@/components/CamperDetails/Gallery/Gallery";
import styles from "./CamperPage.module.css";
import { fetchCamperById, fetchReviews } from "@/lib/campersApi";
import CamperDetailsCard from "@/components/CamperDetails/CamperDetailsCard/CamperDetailsCard";
import VehicleInfo from "@/components/CamperDetails/VehicleInfo/VehicleInfo";
import Reviews from "@/components/CamperDetails/Reviews/Reviews";
import BookingForm from "@/components/CamperDetails/BookingForm/BookingForm";

type CamperDetailsPageProps = {
  params: Promise<{
    camperId: string;
  }>;
};

export default async function CamperDetails({
  params,
}: CamperDetailsPageProps) {
  const { camperId } = await params;
  const [camper, reviews] = await Promise.all([
    fetchCamperById(camperId),
    fetchReviews(camperId),
  ]);

  return (
    <main>
      <div className={`container ${styles.pageWrapper}`}>
        <div className={styles.topBlock}>
          <Gallery images={camper.gallery} name={camper.name} />
          <div className={styles.infoWrapper}>
            <CamperDetailsCard camper={camper} />
            <VehicleInfo camper={camper} />
          </div>
        </div>
        <h2 className={styles.title}>Reviews</h2>
        <div className={styles.bottomBlock}>
          <Reviews reviews={reviews.length > 0 ? reviews : camper.reviews} />
          <BookingForm camperId={camperId} />
        </div>
      </div>
    </main>
  );
}
