import { OrderPage } from "@/app/modules/OrderPage/OrderPage";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Asteroid data",
  description: "more information about asteroid",
};

export default function AsteroidPage() {
  return <OrderPage />;
}
