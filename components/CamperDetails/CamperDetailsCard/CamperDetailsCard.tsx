import { CamperDetails } from "@/types";
import styles from "./CamperDetailsCard.module.css";
import Icon from "@/components/UI/Icon/Icon";

type CamperDetailsCardProps = {
  camper: CamperDetails;
};

function CamperDetailsCard({ camper }: CamperDetailsCardProps) {
  const starClassName =
    camper.rating > 0 ? styles.starFilled : styles.starEmpty;

  return (
    <div className={styles.infoCard}>
      <h1 className={styles.title}>{camper.name}</h1>

      <div className={styles.metaRow}>
        <div className={styles.ratingBlock}>
          <Icon name="star" className={starClassName} />
          <p className={styles.details}>
            {camper.rating}({camper.totalReviews} Reviews)
          </p>
        </div>

        <div className={styles.locationBlock}>
          <Icon name="location" className={styles.iconLoc} />
          <p className={styles.details}>{camper.location}</p>
        </div>
      </div>

      <p className={styles.price}>€{camper.price.toLocaleString("en-US")}</p>

      <p className={styles.description}>{camper.description}</p>
    </div>
  );
}

export default CamperDetailsCard;
