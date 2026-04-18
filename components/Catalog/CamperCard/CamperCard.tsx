import { CamperListItem } from "@/types";
import styles from "./CamperCard.module.css";

type CamperCardProps = {
  camper: CamperListItem;
};

export function CamperCard({ camper }: CamperCardProps) {
  return (
    <div className={styles.camperCardWrapper}>
      <h2>{camper.name}</h2>
      <p>{camper.price}</p>
      <p>{camper.location}</p>
    </div>
  );
}

export default CamperCard;
