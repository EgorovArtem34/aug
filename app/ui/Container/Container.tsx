import React, { ReactNode } from "react";
import styles from "./container.module.scss";

export const Container = ({
  children,
  type,
}: {
  children: ReactNode;
  type?: string;
}) => {
  return (
    <div className={`${styles.container} ${type ? styles[type] : ""}`}>
      {children}
    </div>
  );
};
