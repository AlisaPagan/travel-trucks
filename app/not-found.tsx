import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <div className={`container ${styles.content}`}>
          <div className={styles.card}>
            <p className={styles.code}>404</p>
            <h1 className={styles.title}>Page not found</h1>
            <p className={styles.text}>
              Looks like this route took a wrong turn. Let&apos;s get you back to
              TravelTrucks.
            </p>

            <div className={styles.actions}>
              <Link href="/" className={styles.primaryAction}>
                Home
              </Link>
              <Link href="/catalog" className={styles.secondaryAction}>
                Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
