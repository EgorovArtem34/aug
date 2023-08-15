import Image from "next/image";
import styles from "./page.module.css";
import { AsteroidsList } from "./components/AsteroidsList/AsteroidsList";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by e!!!!!;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <AsteroidsList />
      </div>
    </main>
  );
}
