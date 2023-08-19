'use client'
import React from 'react';
import styles from './orderBasket.module.scss';
import { Button } from '@/app/ui/Button/Button';
import { useApp } from '@/app/utils/hooks/useApp';
import { pluralizeValue } from '@/app/utils/defineDistance';
import { textsForValues } from '@/app/utils/constants';

export const OrderBasket = () => {
  const { setOrderedAsteroidIds, orderedAsteroidIds } = useApp();
  const basketSize = orderedAsteroidIds.length;
  const handleSubmit = () => {
    console.log('eee');
  }

  return (
    <div className={styles.orderBasket}>
      <h3 className={styles.title}>Корзина</h3>
      <p>{basketSize} {pluralizeValue(basketSize, textsForValues['asteroids'])}</p>

      <Button size={'big'} bg={'orange'} onClick={handleSubmit} disabled={basketSize === 0}>
        Отправить
      </Button>
    </div >
  )
}
