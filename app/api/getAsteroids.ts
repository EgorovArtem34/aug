const todayDate = new Date().toLocaleDateString("en-ca");
const NASAKey = process.env.NASA__API__KEY;

export const getAsteroids = async (): Promise<any> => {
  const data = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayDate}&end_date=${todayDate}&api_key=${NASAKey}`,
    {
      cache: "no-store",
    }
  ).then((response) => response.json());
  const {
    links: { next: nextFetchUrl },
    element_count: countAsteroids,
    near_earth_objects: { [todayDate]: asteroids },
  } = data;

  return {
    nextFetchUrl,
    countAsteroids,
    asteroids,
  };
};
