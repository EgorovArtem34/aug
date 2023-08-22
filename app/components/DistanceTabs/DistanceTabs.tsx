"use client";
import React from "react";
import styles from "./distanceTabs.module.scss";
import { DistanceUnit } from "@/app/types";
import { useApp } from "@/app/utils/hooks/useApp";

export const DistanceTabs = () => {
  const { distanceType, setDistanceType } = useApp();

  const changeActiveInput = (id: DistanceUnit) => {
    if (distanceType === id) {
      return null;
    }
    setDistanceType(id);
  };

  return (
    <div className={styles.tabs}>
      <label
        className={`${styles.label} ${distanceType === DistanceUnit.kilometers ? styles.active : ""
          }`}
      >
        в километрах
        <input
          type="radio"
          id={DistanceUnit.kilometers}
          name="tabs"
          aria-label={DistanceUnit.kilometers}
          className={styles.input}
          checked={distanceType === DistanceUnit.kilometers}
          onChange={() => changeActiveInput(DistanceUnit.kilometers)}
        />
      </label>
      <div className={styles.divider}></div>
      <label
        className={`${styles.label} ${distanceType === DistanceUnit.lunar ? styles.active : ""
          }`}
      >
        в лунных орбитах
        <input
          type="radio"
          id={DistanceUnit.lunar}
          name="tabs"
          aria-label={DistanceUnit.lunar}
          className={styles.input}
          checked={distanceType === DistanceUnit.lunar}
          onChange={() => changeActiveInput(DistanceUnit.lunar)}
        />
      </label>
    </div>
  );
};
