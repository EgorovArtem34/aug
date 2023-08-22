import type { Metadata } from "next";
import React from "react";
import styles from "./page.module.scss";
import { getAsteroidById } from "@/app/api/getAsteroids";
import { AsteroidData } from "@/app/components/AsteroidData/AsteroidData";
import { Main } from "@/app/components/Main/Main";
import { Container } from "@/app/ui/Container/Container";
import { Header } from "@/app/components/Header/Header";

export const metadata: Metadata = {
  title: "Asteroid data",
  description: "more information about asteroid",
};

export default async function AsteroidPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await getAsteroidById(id);

  return (
    <>
      <Header />
      <Main>
        <Container type="asteroidData">
          <AsteroidData asteroidData={data} />
        </Container>
      </Main>
    </>
  );
}
