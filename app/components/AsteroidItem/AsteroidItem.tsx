"use client";
import { DistanceUnit } from "@/app/types";
import { defineDistance, defineSizeByDiameters } from "@/app/utils";
import { regexToRemoveParentheses } from "@/app/utils/constants";
import { formatDate } from "@/app/utils/formatDate";
import { useApp } from "@/app/utils/hooks/useApp";

export const AsteroidItem = ({ asteroid }: any) => {
  const {
    close_approach_data: [{ close_approach_date: approachDate, miss_distance }],
    name,
    estimated_diameter: {
      meters: { estimated_diameter_max: diametersMax },
    },
  } = asteroid;
  const { distanceType } = useApp();

  const formattedDate = formatDate(approachDate);
  const currentDiameters = Math.round(diametersMax);
  const currentSizeByDiameters = defineSizeByDiameters(currentDiameters);
  const currentName = name.replace(regexToRemoveParentheses, "");
  const activeDistance = Math.round(miss_distance[distanceType]);
  const distanceUnitText = distanceType === DistanceUnit.kilometers ? 'км' : defineDistance(activeDistance, distanceType)
  const definedDistance = `${activeDistance.toLocaleString('ru-RU')
    } ${distanceUnitText}`;

  return (
    <li>
      <span>ВРЕМЯ: {formattedDate}</span>
      <span>размер {currentDiameters} м</span>
      <span>name {currentName}</span>
      <span>расстояние {definedDistance}</span>
    </li>
  );
};
