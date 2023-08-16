import { getAsteroids } from "@/app/api/getAsteroids";
import { sortAsteroidsByDate } from "@/app/utils/sortAsteroids";
import { AsteroidItem } from "../AsteroidItem/AsteroidItem";

export const AsteroidsList = async () => {
  const { nextFetchUrl, countAsteroids, asteroids } = await getAsteroids();
  const sortedAsteroids = sortAsteroidsByDate(asteroids);

  return (
    <div className="">
      <ul>
        {sortedAsteroids.map((asteroid) => (
          <AsteroidItem asteroid={asteroid} key={asteroid.id} />
        ))}
      </ul>
    </div>
  );
};
