'use client'
import React from 'react';
import styles from './orderBasket.module.scss';
import { Button } from '@/app/ui/Button/Button';

export const OrderBasket = () => {

  const handleSubmit = () => {
    console.log('eee');
  }

  return (
    <div className={styles.orderBasket}>
      <h3 className={styles.title}>Корзина</h3>
      <p>121 астероид</p>

      <Button size={'big'} bg={'orange'} onClick={handleSubmit} disabled={false}>
        Отправить
      </Button>
    </div >
  )
}
