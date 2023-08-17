import React, { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size: string;
  color?: string;
  bg?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  color = 'white',
  bg = 'orange',
  type = "button",
  ...rest
}) => {
  // ${styles.color} ${styles.bg
  return (
    <button
      className={`${styles.btn} ${styles[size]} ${styles[color]} ${styles[`bg_${bg}`]}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
