import React from "react";
import { AsteroidsList } from "../../components/AsteroidsList/AsteroidsList";
import styles from './main.module.scss';
import { OrderBasket } from "@/app/components/OrderBasket/OrderBasket";

export const Main = () => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <AsteroidsList />
      </div>
      <OrderBasket />
    </main>
  );
};
