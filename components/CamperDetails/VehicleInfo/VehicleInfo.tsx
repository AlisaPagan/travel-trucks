import styles from "./VehicleInfo.module.css";
import { CamperDetails } from "@/types";

type VehicleDetailsProps = {
  camper: CamperDetails;
};

function VehicleInfo({ camper }: VehicleDetailsProps) {
  const features = [camper.transmission, ...camper.amenities, camper.form];

  const specs = [
    { label: "Form", value: camper.form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Vehicle details</h2>

      <ul className={styles.featuresList}>
        {features.map((feature) => (
          <li key={feature} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>

      <ul className={styles.specsList}>
        {specs.map((spec) => (
          <li key={spec.label} className={styles.specRow}>
            <span>{spec.label}</span>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default VehicleInfo;
