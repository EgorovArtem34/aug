'use client'
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Footer, Header } from "@/app/modules";
import { Main } from "@/app/components/Main/Main";
import { useApp } from "@/app/utils/hooks/useApp";
import { AsteroidItem } from "@/app/components/AsteroidItem/AsteroidItem";
import styles from './orderPage.module.scss';

export const OrderPage = () => {
  const router = useRouter();
  const { sortedAsteroids, orderedAsteroidIds, setOrderedAsteroidIds } =
    useApp();

  useEffect(() => {
    return () => {
      setOrderedAsteroidIds([]);
    };
  }, [setOrderedAsteroidIds]);
  console.log(orderedAsteroidIds);
  if (orderedAsteroidIds.length === 0) {
    router.push(`/`);
    return null;
  }

  const orderedAsteroids = sortedAsteroids?.filter((asteroid) =>
    orderedAsteroidIds.includes(asteroid.id)
  );

  return (
    <>
      <Header />
      <Main>
        <div className={styles.container}>
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
        </div>
      </Main>
      <Footer />
    </>
  )
}
