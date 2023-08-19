import { dateRegex } from "../utils/constants";

const todayDate = new Date().toLocaleDateString("en-ca");
const NASAKey = process.env.NASA__API__KEY;

export const getAsteroids = async (fetchUrl: string | null = null, day?: string): Promise<any> => {
  const currentFetchUrl = fetchUrl ? fetchUrl : `https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayDate}&end_date=${todayDate}&api_key=${NASAKey}`;
  const currentDate = day ? day : todayDate;
  try {
    const data = await fetch(
      currentFetchUrl,
      // {
      //   cache: "no-store",
      // }
    ).then((response) => response.json());
    const {
      links: { next: nextFetchUrl },
      element_count: countAsteroids,
      near_earth_objects: { [currentDate]: asteroids },
    } = data;
  
    return {
      nextFetchUrl,
      countAsteroids,
      asteroids,
    };
  } catch(err: any) {
    throw new Error(err?.message);
  }
};

export const getAsteroidById = async (id: string) => {
  try {
    const data = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${NASAKey}`,
      // {
      //   cache: "no-store",
      // }
    ).then((response) => response.json());
    return data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
}
