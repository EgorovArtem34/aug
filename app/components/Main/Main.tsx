import React from "react";
import styles from "./main.module.scss";

export const Main = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className={`${styles.main} ${className ? styles[className] : ""}`}>
      {children}
    </main>
  );
};
