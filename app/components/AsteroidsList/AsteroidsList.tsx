import { getAsteroids } from "@/app/api/getAsteroids";
import { sortAsteroidsByDate } from "@/app/utils/sortAsteroids";
import { AsteroidItem } from "../AsteroidItem/AsteroidItem";
import styles from "./asteroidsList.module.scss";
import { DistanceTabs } from "../DistanceTabs/DistanceTabs";

export const AsteroidsList = async () => {
  const { nextFetchUrl, countAsteroids, asteroids } = await getAsteroids();
  const sortedAsteroids = sortAsteroidsByDate(asteroids);

  return (
    <ul className={styles.asteroids}>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <DistanceTabs />
      {sortedAsteroids.map((asteroid) => (
        <AsteroidItem asteroid={asteroid} key={asteroid.id} />
      ))}
    </ul>
  );
};
