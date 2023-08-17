"use client";
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { DistanceUnit } from "@/app/types";
import { defineDistance, defineSizeByDiameters } from "@/app/utils";
import { regexToRemoveParentheses } from "@/app/utils/constants";
import { formatDate } from "@/app/utils/formatDate";
import { useApp } from "@/app/utils/hooks/useApp";
import DangerIcon from '../../assets/danger.svg';
import styles from "./asteroidItem.module.scss";
import { Button } from '@/app/ui/Button/Button';

export const AsteroidItem = ({ asteroid }: any) => {
  const {
    close_approach_data: [{ close_approach_date: approachDate, miss_distance }],
    name,
    estimated_diameter: {
      meters: { estimated_diameter_max: diametersMax },
    },
    is_potentially_hazardous_asteroid: isDanger,
  } = asteroid;
  const { distanceType } = useApp();

  const formattedDate = formatDate(approachDate);
  const currentDiameters = Math.round(diametersMax);
  const currentSizeByDiameters = defineSizeByDiameters(currentDiameters);
  const currentName = name.replace(regexToRemoveParentheses, "");
  const activeDistance = Math.round(miss_distance[distanceType]);
  const distanceUnitText =
    distanceType === DistanceUnit.kilometers
      ? "км"
      : defineDistance(activeDistance, distanceType);
  const definedDistance = `${activeDistance.toLocaleString(
    "ru-RU"
  )} ${distanceUnitText}`;

  const pRef = useRef<HTMLParagraphElement>(null);
  const [svgWidth, setSvgWidth] = useState(0);
  const svgLength1 = svgWidth - 5;
  const svgLength2 = svgWidth - 4.5;

  useEffect(() => {
    if (pRef.current && distanceType) {
      const width = pRef.current.offsetWidth;
      setSvgWidth(width);
    }
  }, [definedDistance, distanceType])

  return (
    <li className={styles.asteroidItem}>
      <h3 className={styles.date}>{formattedDate}</h3>

      <div className={styles.container}>

        <div className={styles.distanceContainer}>
          <p ref={pRef} className={styles.distance}>{definedDistance}</p>
          <svg width={svgWidth} height="6" viewBox={`0 0 ${svgWidth} 6`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{ width: "100%" }}
              d={`M0 3L5 5.88675L5 0.113249L0 3ZM${svgWidth} 3.00001L${svgLength1} 0.113257L${svgLength1} 5.88676L${svgWidth} 3.00001ZM4.5 3.5L${svgLength2} 3.50001${svgLength2} 2.50001L4.5 2.5L4.5 3.5Z`}
              fill="white" fillOpacity="0.5" />
          </svg>
        </div>

        <div className={`${styles.asteroid} ${styles[currentSizeByDiameters]}`} />

        <div className={styles.data}>
          <span className={styles.name}>{currentName}</span>
          <span className={styles.diameter}>Ø {currentDiameters} м</span>
        </div>
      </div>

      <div className={styles.orderInterface}>
        <Button size='small' bg='orangeSmooth' color='orange'>
          ЗАКАЗАТЬ
        </Button>
        {isDanger && (
          <div className={styles.danger}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill=' #fc3' className={styles.dangerIcon}>
              <path d="M19.64 16.36L11.53 2.3A1.85 1.85 0 0 0 10 1.21 1.85 1.85 0 0 0 8.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z" />
            </svg>
            <span>Опасен</span>
          </div>
        )}
      </div>
    </li >
  );
};
