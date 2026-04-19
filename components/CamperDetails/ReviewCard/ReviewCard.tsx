import styles from "./ReviewCard.module.css";
import Icon from "@/components/UI/Icon/Icon";

type Review = {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
};

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const firstLetter = review.reviewer_name.charAt(0).toUpperCase();

  return (
    <article className={styles.card}>
      <div className={styles.topRow}>
        <div className={styles.avatar}>{firstLetter}</div>

        <div className={styles.info}>
          <p className={styles.name}>{review.reviewer_name}</p>

          <div className={styles.stars}>
            {Array.from({ length: 5 }, (_, index) => (
              <Icon
                key={index}
                name="star"
                className={
                  index < review.reviewer_rating
                    ? styles.starFilled
                    : styles.starEmpty
                }
              />
            ))}
          </div>
        </div>
      </div>

      <p className={styles.comment}>{review.comment}</p>
    </article>
  );
}
