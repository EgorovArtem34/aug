"use client";
import React from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./orderBasket.module.scss";
import { Button } from "@/app/ui/Button/Button";
import { useApp } from "@/app/utils/hooks/useApp";
import { pluralizeValue } from "@/app/utils/defineDistance";
import { textsForValues } from "@/app/utils/constants";

export const OrderBasket = () => {
  // const router = useRouter();
  const { orderedAsteroidIds } = useApp();
  const basketSize = orderedAsteroidIds.length;
  // const handleSubmit = () => {
  // словил ошибку при деплое
  //   router.push(`/order`);
  // };

  return (
    <div className={styles.orderBasket}>
      <div>
        <h3 className={styles.title}>Корзина</h3>
        <p>
          {basketSize} {pluralizeValue(basketSize, textsForValues["asteroids"])}
        </p>
      </div>
      <Link href={"/order"}>
        <Button
          size={"big"}
          bg={"orange"}
          // onClick={handleSubmit}
          aria-label="Отправить"
          disabled={basketSize === 0}
        >
          Отправить
        </Button>
      </Link>
    </div>
  );
};
