"use client";
import { useCallback } from "react";
import { getAsteroids } from "@/app/api/getAsteroids";
import { matchDate } from "@/app/utils/formatDate";
import { useApp } from "@/app/utils/hooks/useApp";
import { sortAsteroidsByDate } from "@/app/utils/sortAsteroids";
import { useState, useEffect } from "react";
import { Loader } from "../Loader/Loader";

export const InfiniteScroll = () => {
  const [fetching, setFetching] = useState(false);
  const { sortedAsteroids, setSortedAsteroids, nextFetchUrl, setNextFetchUrl } =
    useApp();

  useEffect(() => {
    const fetchAsteroid = async () => {
      if (fetching) {
        const nexDate = matchDate(nextFetchUrl);
        const { nextFetchUrl: currentNextFetchUrl, asteroids } =
          await getAsteroids(nextFetchUrl, nexDate);

        setSortedAsteroids([
          ...sortedAsteroids,
          ...sortAsteroidsByDate(asteroids),
        ]);
        setFetching(false);
        setNextFetchUrl(currentNextFetchUrl);
      }
    };

    fetchAsteroid();
  }, [
    fetching,
    nextFetchUrl,
    setNextFetchUrl,
    setSortedAsteroids,
    sortedAsteroids,
  ]);

  const scrollHandler = useCallback(
    (e: Event) => {
      const target = e.target as Document;
      if (
        nextFetchUrl &&
        target.documentElement.scrollHeight -
        (target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setFetching(true);
      }
    },
    [nextFetchUrl]
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  if (fetching) {
    return <Loader />
  }
  return null;
};
