
'use client'
import React, { useState } from 'react';
import { AppContext } from "../contexts/AppContext";
import { DistanceUnit } from '../../types';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [asteroids, setAsteroids] = useState([]);
  const [distanceType, setDistanceType] = useState<DistanceUnit>(DistanceUnit.lunar);

  return (
    <AppContext.Provider
      value={{
        distanceType,
        setDistanceType
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
