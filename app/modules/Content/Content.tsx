import React from "react";
import { AsteroidsList } from "../../components/AsteroidsList/AsteroidsList";
import styles from "./content.module.scss";
import { OrderBasket } from "@/app/components/OrderBasket/OrderBasket";
import { Main } from "@/app/components/Main/Main";
import { Container } from "@/app/ui/Container/Container";

export const Content = () => {
  return (
    <Main>
      <Container>
        <div>
          <AsteroidsList />
        </div>
        <OrderBasket />
      </Container>
    </Main>
  );
};
