"use client";
import React, { useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { DistanceUnit, IAsteroid } from "../../types";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortedAsteroids, setSortedAsteroids] = useState([]);
  const [distanceType, setDistanceType] = useState<DistanceUnit>(
    DistanceUnit.lunar
  );
  const [nextFetchUrl, setNextFetchUrl] = useState<string>("");
  // не сделал через localStorage, подумал, что тогда могут храниться уже неактуальные астериоды
  const [orderedAsteroidIds, setOrderedAsteroidIds] = useState<IAsteroid[]>([]);

  return (
    <AppContext.Provider
      value={{
        distanceType,
        setDistanceType,
        sortedAsteroids,
        setSortedAsteroids,
        nextFetchUrl,
        setNextFetchUrl,
        orderedAsteroidIds,
        setOrderedAsteroidIds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
