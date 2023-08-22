const currentToday = new Date().toLocaleDateString("en-ca");
const currentToday2 = new Date().toISOString().slice(0, 10);
const NASAKey = process.env.NASA__API__KEY;

export const getAsteroids = async (
  fetchUrl: string | null = null,
  day?: string
): Promise<any> => {
  const currentFetchUrl = fetchUrl
    ? fetchUrl
    : `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentToday}&end_date=${currentToday}&api_key=${NASAKey}`;
  const currentDate = day ? day : currentToday;
  try {
    const data: any = await fetch(
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY",
      {
        // cache: "no-store",
      }
    ).then((response) => response.json());
    console.log("data!!!!!!!", data);
    const { links, element_count: countAsteroids, near_earth_objects } = data;
    const asteroids =
      near_earth_objects &&
      near_earth_objects[currentDate as typeof near_earth_objects]
        ? near_earth_objects[currentDate as typeof near_earth_objects]
        : [];

    const nextFetchUrl = links?.next || "";
    console.log(
      data,
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
      currentToday,
      currentFetchUrl
    );
    return {
      nextFetchUrl,
      countAsteroids,
      asteroids,
    };
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const getAsteroidById = async (id: string) => {
  try {
    const data = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${NASAKey}`
      // {
      //   cache: "no-store",
      // }
    ).then((response) => response.json());
    return data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
