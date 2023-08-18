import React from "react";
import styles from "./approachCard.module.scss";

export const ApproachCard = ({ approach }) => {
  const {
    close_approach_date,
    relative_velocity: { kilometers_per_second },
    orbiting_body,
  } = approach;

  return (
    <div className={styles.approachCard}>
      <h3 className={styles.date}>{close_approach_date}</h3>
      <p>
        <b>Скорость</b>: {Math.round(kilometers_per_second)} км/c
      </p>
      <p>
        <b>Орбита</b>: {orbiting_body}
      </p>
    </div>
  );
};
