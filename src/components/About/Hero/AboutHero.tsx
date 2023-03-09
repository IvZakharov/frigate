import styles from "./AboutHero.module.scss";
import React from "react";

import { Patua_One } from "@next/font/google";
import Image from "next/image";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const AboutHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={"container"}>
        <div className={"grid md:grid-cols-3 lg:grid-cols-4"}>
          <div className={"px-10 md:flex items-center xl:px-0"}>
            <h1 className={`${styles.title} ${patuaOne.className}`}>
              About <br /> <b>US</b>
            </h1>
          </div>
          <div className={`${styles.image} md:col-span-2 lg:col-span-3`}>
            <Image
              alt="serf boards"
              src={"/images/about/mobile.png"}
              width={500}
              height={475}
              sizes="80vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className={"md:hidden"}
            />

            <Image
              alt="serf boards"
              src={"/images/about/desk.png"}
              width={1000}
              height={600}
              sizes="80vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              className={"hidden md:block"}
            />

            <p className={styles.notice}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
              Etiam eu turpis molestie, dictum est a, mattis tellus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
