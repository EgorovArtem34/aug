import { getAsteroids } from "@/app/api/getAsteroids";
import { ClientAsteroidList } from "./ClientAsteroidList/ClientAsteroidList";
import { InfiniteScroll } from "../InfiniteScroll/InfiniteScroll";

export const AsteroidsList = async () => {
  const { nextFetchUrl, countAsteroids, asteroids } = await getAsteroids();

  return (
    <>
      <ClientAsteroidList asteroids={asteroids} nextFetchUrl={nextFetchUrl} />
      <InfiniteScroll />
    </>
  );
};
