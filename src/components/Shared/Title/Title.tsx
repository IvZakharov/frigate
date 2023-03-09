import styles from "./Title.module.scss";
import React, { ReactElement } from "react";
import { Patua_One } from "@next/font/google";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

type TitleProps = {
  variant: "h1" | "h2" | "h3";
  children: string;
};

const Title: React.FC<TitleProps> = ({ variant, children }) => {
  return (
    <>
      {variant === "h1" && (
        <div className={"flex items-center"}>
          <div className={styles.line}></div>
          <h1 className={`${styles.h1} ${patuaOne.className}`}>{children}</h1>
        </div>
      )}

      {variant === "h2" && (
        <div className={"flex items-center"}>
          <div className={styles.line}></div>
          <h2 className={`${styles.h2} ${patuaOne.className}`}>{children}</h2>
        </div>
      )}

      {variant === "h3" && (
        <div className={"flex items-center"}>
          <div className={styles.line}></div>
          <h2 className={`${styles.h2} ${patuaOne.className}`}>{children}</h2>
        </div>
      )}
    </>
  );
};

export default Title;
