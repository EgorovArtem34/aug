"use client";
import { useEffect } from "react";
import { sortAsteroidsByDate } from "@/app/utils/sortAsteroids";
import styles from "./clientAsteroidList.module.scss";
import { IAsteroid } from "@/app/types";
import { useApp } from "@/app/utils/hooks/useApp";
import { DistanceTabs } from "../../DistanceTabs/DistanceTabs";
import { AsteroidItem } from "../../AsteroidItem/AsteroidItem";
import { Loader } from "../../Loader/Loader";

export const ClientAsteroidList = ({
  asteroids,
  nextFetchUrl,
}: {
  asteroids: IAsteroid[];
  nextFetchUrl: string;
}) => {
  const { sortedAsteroids, setSortedAsteroids, setNextFetchUrl } = useApp();

  useEffect(() => {
    if (sortedAsteroids.length === 0 && asteroids?.length > 0) {
      setSortedAsteroids([...sortAsteroidsByDate(asteroids)]);
      setNextFetchUrl(nextFetchUrl);
    }
  }, [
    asteroids,
    nextFetchUrl,
    setNextFetchUrl,
    setSortedAsteroids,
    sortedAsteroids.length,
  ]);

  return (
    <ul className={styles.asteroids}>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <DistanceTabs />
      {sortedAsteroids.length === 0 && <Loader />}
      {sortedAsteroids.map((asteroid) => (
        <AsteroidItem asteroid={asteroid} key={asteroid.id} />
      ))}
    </ul>
  );
};
