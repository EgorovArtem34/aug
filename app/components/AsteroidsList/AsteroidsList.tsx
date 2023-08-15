import { getAsteroids } from "@/app/api/getAsteroids";
import { sortAsteroidsByDate } from "@/app/utils/sortAsteroids";
import { AsteroidItem } from "../AsteroidItem/AsteroidItem";

export const AsteroidsList = async () => {
  const { nextFetchUrl, countAsteroids, asteroids } = await getAsteroids();
  const sortedAsteroids = sortAsteroidsByDate(asteroids);
  // console.log(countAsteroids, asteroids);
  return (
    <div className="">
      {sortedAsteroids.map((asteroid) => (
        <AsteroidItem asteroid={asteroid} key={asteroid.id} />
      ))}
    </div>
  );
};
