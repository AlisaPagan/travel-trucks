import { Review } from "@/types";
import ReviewCard from "@/components/CamperDetails/ReviewCard/ReviewCard";
import styles from "./Reviews.module.css";

type ReviewsProps = {
  reviews: Review[];
};

export default function Reviews({ reviews }: ReviewsProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {reviews.map((review, index) => (
          <li key={index}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}
