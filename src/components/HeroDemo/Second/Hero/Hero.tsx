import styles from "./Hero.module.scss";
import React from "react";
import Link from "next/link";
import { Niconne } from "@next/font/google";
import HeroSlider from "@/components/HeroDemo/Second/HeroSlider/HeroSlider";

const niconne = Niconne({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const HeroDemo2: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={"container h-full relative z-10"}>
        <div className={"md:flex h-full"}>
          <div
            className={`${styles.content} md:flex md:flex-col md:justify-center md:pr-10 h-auto `}
          >
            <div className={"mb-8 md:mb-20"}>
              <ul className={styles.subtitleList}>
                <li>DARE</li>
                <li>WE</li>
                <li>SAY</li>
                <li>THE</li>
                <li>PERFECT?</li>
              </ul>
              <h1 className={`${styles.title} ${niconne.className}`}>
                Frigate
              </h1>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan
              </p>
            </div>

            <div
              className={
                "fixed md:relative z-50 w-full px-2.5 bottom-4 left-0 md:px-0"
              }
            >
              <div
                className={
                  "w-full flex items-center justify-between bg-white rounded-3xl pl-8"
                }
              >
                <p className={"text-sm font-medium leading-4 mr-8"}>
                  Your board is <br className={"xl:hidden"} /> already waiting
                </p>
                <Link
                  href={"/catalog"}
                  className={`${styles.button} button md:mb-0 whitespace-nowrap`}
                >
                  LOOK catalog
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.sliderWrap}>
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDemo2;
