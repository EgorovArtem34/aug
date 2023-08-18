"use client";
import { useCallback } from "react";
import { getAsteroids } from "@/app/api/getAsteroids";
import { matchDate } from "@/app/utils/formatDate";
import { useApp } from "@/app/utils/hooks/useApp";
import { sortAsteroidsByDate } from "@/app/utils/sortAsteroids";
import { useState, useEffect } from "react";
import { Loader } from "../Loader/Loader";

export const InfiniteScroll = () => {
  const [isFetching, setIsFetching] = useState(false);
  const { sortedAsteroids, setSortedAsteroids, nextFetchUrl, setNextFetchUrl } =
    useApp();

  useEffect(() => {
    const fetchAsteroid = async () => {
      if (isFetching) {
        const nexDate = matchDate(nextFetchUrl);
        const { nextFetchUrl: currentNextFetchUrl, asteroids } =
          await getAsteroids(nextFetchUrl, nexDate);

        setSortedAsteroids([
          ...sortedAsteroids,
          ...sortAsteroidsByDate(asteroids),
        ]);
        setIsFetching(false);
        setNextFetchUrl(currentNextFetchUrl);
      }
    };

    fetchAsteroid();
  }, [
    isFetching,
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
        setIsFetching(true);
      }
    },
    [nextFetchUrl]
  );

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => document.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  if (isFetching) {
    return <Loader />
  }
  return null;
};
