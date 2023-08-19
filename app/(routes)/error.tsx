'use client'
import React from 'react';

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div className="errorContainer">
      <h2>Произошла ошибка при запросе данных: {error?.message}</h2>
    </div>
  )
};
