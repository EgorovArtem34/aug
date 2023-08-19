import React from "react";
import { AsteroidsList } from "../../components/AsteroidsList/AsteroidsList";
import styles from './content.module.scss';
import { OrderBasket } from "@/app/components/OrderBasket/OrderBasket";
import { Main } from "@/app/components/Main/Main";

export const Content = () => {

  return (
    <Main className={'mr30'}>
      <div className={styles.container}>
        <AsteroidsList />
      </div>
      <OrderBasket />
    </Main>
  );
};
