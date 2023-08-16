import Image from "next/image";
import styles from "./page.module.css";
import { AppProvider } from "./utils/providers/AppProvider";
import { Footer, Header, Main } from "./modules";

export default function Home() {
  return (
    <AppProvider>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppProvider>
  );
}
