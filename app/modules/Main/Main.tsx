import React from "react";
import { DistanceTabs } from "../../components/DistanceTabs/DistanceTabs";
import { AsteroidsList } from "../../components/AsteroidsList/AsteroidsList";
import styles from './main.module.scss';

export const Main = () => {
  return (
    <main>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <DistanceTabs />
      <AsteroidsList />
    </main>
  );
};
