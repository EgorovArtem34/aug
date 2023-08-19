"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { DistanceUnit } from "@/app/types";
import { defineDistance, defineSizeByDiameters } from "@/app/utils";
import { regexToRemoveParentheses } from "@/app/utils/constants";
import { formatDate } from "@/app/utils/formatDate";
import { useApp } from "@/app/utils/hooks/useApp";
import styles from "./asteroidItem.module.scss";
import { Button } from "@/app/ui/Button/Button";
import { Danger } from "../Danger/Danger";

export const AsteroidItem = ({ asteroid }: any) => {
  const {
    id,
    close_approach_data: [{ close_approach_date: approachDate, miss_distance }],
    name,
    estimated_diameter: {
      meters: { estimated_diameter_max: diametersMax },
    },
    is_potentially_hazardous_asteroid: isDanger,
  } = asteroid;
  const { distanceType, setOrderedAsteroidIds, orderedAsteroidIds } = useApp();
  const isOrdered = orderedAsteroidIds.includes(id);
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
  }, [definedDistance, distanceType]);

  const handleAddBasket = () => {
    setOrderedAsteroidIds((prev) => [...prev, id]);
  };
  const handleRemoveBasket = () => {
    setOrderedAsteroidIds((prev) => prev.filter((prevId) => prevId !== id));
  };
  return (
    <li className={styles.asteroidItem}>
      <h3 className={styles.date}>{formattedDate}</h3>

      <div className={styles.container}>
        <div className={styles.distanceContainer}>
          <p ref={pRef} className={styles.distance}>
            {definedDistance}
          </p>
          <svg
            width={svgWidth}
            height="6"
            viewBox={`0 0 ${svgWidth} 6`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{ width: "100%" }}
              d={`M0 3L5 5.88675L5 0.113249L0 3ZM${svgWidth} 3.00001L${svgLength1} 0.113257L${svgLength1} 5.88676L${svgWidth} 3.00001ZM4.5 3.5L${svgLength2} 3.50001${svgLength2} 2.50001L4.5 2.5L4.5 3.5Z`}
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </div>

        <div
          className={`${styles.asteroid} ${styles[currentSizeByDiameters]}`}
        />

        <div className={styles.data}>
          <Link href={`/asteroids/${id}`}>
            <span className={styles.name}>{currentName}</span>
          </Link>
          <span className={styles.diameter}>Ø {currentDiameters} м</span>
        </div>
      </div>

      <div className={styles.orderInterface}>
        {isOrdered ? (
          <Button
            size="small"
            bg="orangeSmooth"
            color="red-smooth"
            onClick={handleRemoveBasket}
          >
            В КОРЗИНЕ
          </Button>
        ) : (
          <Button
            size="small"
            bg="orangeSmooth"
            color="orange"
            onClick={handleAddBasket}
          >
            ЗАКАЗАТЬ
          </Button>
        )}
        {isDanger && <Danger />}
      </div>
    </li>
  );
};
