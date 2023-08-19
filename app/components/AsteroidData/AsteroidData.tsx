import { IAsteroid } from "@/app/types";
import { Danger } from "../Danger/Danger";
import { ApproachCard } from "./ApproachCard/ApproachCard";
import styles from "./asteroidData.module.scss";

export const AsteroidData = ({ asteroidData }: { asteroidData: IAsteroid }) => {
  const {
    designation,
    is_potentially_hazardous_asteroid: isDanger,
    estimated_diameter: {
      meters: { estimated_diameter_max: diametersMax },
    },
    close_approach_data: approaches,
  } = asteroidData;
  const currentDiameters = Math.round(diametersMax);

  return (
    <div className={styles.container}>
      <div className={styles.data}>
        <h2 className={styles.name}>{designation}</h2>
        {isDanger && <Danger />}
        <span className={styles.diameter}>Ø {currentDiameters} м</span>
      </div>
      <div className={styles.cards}>
        {approaches.map((approach) => (
          <ApproachCard
            approach={approach}
            key={approach.epoch_date_close_approach}
          />
        ))}
      </div>
    </div>
  );
};
