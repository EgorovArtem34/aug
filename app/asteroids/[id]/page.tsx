import React from "react";
import styles from "./page.module.scss";
// import '@/app/globals.scss';
import { getAsteroidById } from "@/app/api/getAsteroids";
import { Footer, Header } from "@/app/modules";
import { AppProvider } from "@/app/utils/providers/AppProvider";
import { AsteroidData } from "@/app/components/AsteroidData/AsteroidData";

export default async function AsteroidPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await getAsteroidById(id);

  return (
    <AppProvider>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <AsteroidData asteroidData={data} />
        </div>
      </main>
      <Footer />
    </AppProvider>
  );
}
