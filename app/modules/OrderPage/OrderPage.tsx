"use client";
import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
import { Main } from "@/app/components/Main/Main";
import { useApp } from "@/app/utils/hooks/useApp";
import { AsteroidItem } from "@/app/components/AsteroidItem/AsteroidItem";
import styles from "./orderPage.module.scss";
import { Container } from "@/app/ui/Container/Container";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export const OrderPage = () => {
  // const router = useRouter();
  const { sortedAsteroids, orderedAsteroidIds, setOrderedAsteroidIds } =
    useApp();

  useEffect(() => {
    return () => {
      setOrderedAsteroidIds([]);
    };
  }, [setOrderedAsteroidIds]);

  // if (orderedAsteroidIds.length === 0) {
  //   router.push(`/`);
  //   return null;
  // }

  const orderedAsteroids = sortedAsteroids?.filter((asteroid) =>
    orderedAsteroidIds.includes(asteroid.id)
  );

  return (
    <>
      <Header />
      <Main>
        <Container>
          <ul>
            <h2 className={styles.title}>Заказ отправлен!</h2>
            {orderedAsteroids?.map((asteroid) => (
              <AsteroidItem
                asteroid={asteroid}
                isOrderPage={true}
                key={asteroid.id}
              />
            ))}
          </ul>
        </Container>
      </Main>
      <Footer />
    </>
  );
};
