import React from "react";
import styles from "./approachCard.module.scss";
import { ICloseApproachData } from "@/app/types";

export const ApproachCard = ({
  approach,
}: {
  approach: ICloseApproachData;
}) => {
  const {
    close_approach_date,
    relative_velocity: { kilometers_per_second, kilometers_per_hour },
    orbiting_body,
    miss_distance: { kilometers },
  } = approach;
  const definedDistance = `${Math.round(+kilometers).toLocaleString(
    "ru-RU"
  )} км`;

  const timeOfApproach = Math.round(+kilometers / +kilometers_per_hour);

  return (
    <div className={styles.approachCard}>
      <h3 className={styles.date}>{close_approach_date}</h3>
      <p>
        <b>Время сближения</b>: {timeOfApproach} ч
      </p>
      <p>
        <b>Скорость</b>: {Math.round(+kilometers_per_second)} км/c
      </p>
      <p>
        <b>Орбита</b>: {orbiting_body}
      </p>
      <p>
        <b>Расстояние до Земли</b>: {definedDistance}
      </p>
    </div>
  );
};
