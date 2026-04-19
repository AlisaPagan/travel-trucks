import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <div className={`container ${styles.content}`}>
          <div className={styles.copyBlock}>
            <h1 className={styles.title}>Campers of your dreams</h1>
            <p className={styles.subtitle}>
              You can find everything you want in our catalog
            </p>

            <Link href="/catalog" className={styles.cta}>
              View Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
