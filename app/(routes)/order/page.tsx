import type { Metadata } from "next";
import React from "react";
import { OrderPage } from "@/app/components/OrderPage/OrderPage";

export const metadata: Metadata = {
  title: "Asteroid data",
  description: "more information about asteroid",
};

export default function AsteroidPage() {
  return <OrderPage />;
}
