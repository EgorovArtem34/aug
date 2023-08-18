
'use client'
import React, { useState } from 'react';
import { AppContext } from "../contexts/AppContext";
import { DistanceUnit } from '../../types';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortedAsteroids, setSortedAsteroids] = useState([]);
  const [distanceType, setDistanceType] = useState<DistanceUnit>(DistanceUnit.lunar);
  const [nextFetchUrl, setNextFetchUrl] = useState<string>('');

  return (
    <AppContext.Provider
      value={{
        distanceType,
        setDistanceType,
        sortedAsteroids,
        setSortedAsteroids,
        nextFetchUrl,
        setNextFetchUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
