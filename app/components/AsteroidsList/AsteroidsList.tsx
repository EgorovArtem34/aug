import { getAsteroids } from "@/app/api/getAsteroids";
import { ClientAsteroidList } from "./ClientAsteroidList/ClientAsteroidList";
import { InfiniteScroll } from "../InfiniteScroll/InfiniteScroll";

export const AsteroidsList = async () => {
  const { nextFetchUrl, asteroids } = await getAsteroids();
  console.log(asteroids);
  return (
    <>
      <ClientAsteroidList asteroids={asteroids} nextFetchUrl={nextFetchUrl} />
      <InfiniteScroll />
    </>
  );
};
