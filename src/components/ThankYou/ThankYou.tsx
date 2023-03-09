import styles from "./ThankYou.module.scss";
import React from "react";

import { Patua_One } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const ThankYou: React.FC = () => {
  return (
    <div className={styles.thankYou}>
      <div className={"container"}>
        <div className={"grid gap-6 grid-cols-1 md:grid-cols-2 "}>
          <div>
            <h1 className={`${styles.title} ${patuaOne.className}`}>
              Thank you
            </h1>
            <p className={styles.text}>
              The crew has taken a new course to create <br /> a surfboard of
              your dreams.
            </p>
            <div className={"flex gap-6"}>
              <Link className={`button button--primary`} href={"/"}>
                Back to homepage
              </Link>
              <Link className={`button button--secondary`} href={"/catalog"}>
                Catalog
              </Link>
            </div>
          </div>

          <div className={"md:hidden"}>
            <Image
              alt="serf boards"
              src={"/images/thankYou/mobile.png"}
              width={500}
              height={475}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>

          <div className={"hidden md:inline-flex xl:pr-32"}>
            <Image
              alt="serf boards"
              src={"/images/thankYou/desk.png"}
              width={500}
              height={475}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
