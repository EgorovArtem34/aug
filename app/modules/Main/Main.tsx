import React from "react";
import { AsteroidsList } from "../../components/AsteroidsList/AsteroidsList";
import styles from './main.module.scss';

export const Main = () => {
  return (
    <main className={styles.main}>
      <AsteroidsList />
    </main>
  );
};
