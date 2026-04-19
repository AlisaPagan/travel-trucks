"use client";

import { Oval } from "react-loader-spinner";
import styles from "./Loader.module.css";

type LoaderProps = {
  fullPage?: boolean;
};

export default function Loader({ fullPage = false }: LoaderProps) {
  return (
    <div className={fullPage ? styles.fullPageWrapper : styles.wrapper}>
      <Oval
        visible
        height={56}
        width={56}
        color="var(--olive-green)"
        secondaryColor="var(--olive-green)"
        strokeWidth={5}
        strokeWidthSecondary={5}
        ariaLabel="loading"
      />
    </div>
  );
}
