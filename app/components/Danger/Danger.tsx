import React from "react";
import styles from "./danger.module.scss";

export const Danger = () => (
  <div className={styles.danger}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill=" #fc3"
      className={styles.dangerIcon}
    >
      <path d="M19.64 16.36L11.53 2.3A1.85 1.85 0 0 0 10 1.21 1.85 1.85 0 0 0 8.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z" />
    </svg>
    <span className={styles.text}>Опасен</span>
  </div>
);
