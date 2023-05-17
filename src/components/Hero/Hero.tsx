import styles from "./Hero.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Patua_One } from "@next/font/google";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={"container h-full relative z-10"}>
        <div className={"h-full md:grid md:grid-cols-3"}>
          <div
            className={
              "flex flex-col justify-between h-full md:col-span-2 xl:col-span-1"
            }
          >
            <div className={"mb-80 md:mb-20"}>
              <ul className={styles.subtitleList}>
                <li>DARE</li>
                <li>WE</li>
                <li>SAY</li>
                <li>THE</li>
                <li>PERFECT?</li>
              </ul>
              <h1 className={`${styles.title} ${patuaOne.className}`}>
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
                "md:flex items-center md:rounded-3xl md:bg-white md:w-fit pl-8"
              }
            >
              <p
                className={
                  "text-sm hidden md:block font-semibold leading-4 mb-2.5 md:mb-0 mr-8 md:bg-white whitespace-nowrap"
                }
              >
                Your board is <br className={"md:hidden"} /> already waiting
              </p>
              <Link
                href={"/catalog"}
                className={`${styles.button} whitespace-nowrap button mb-10 md:mb-0`}
              >
                LOOK catalog
              </Link>
            </div>
          </div>

          <div
            className={
              "md:relative xl:col-span-2 xl:flex items-center justify-center"
            }
          >
            <button className={styles.playButton}>
              <svg
                width="33"
                height="43"
                viewBox="0 0 33 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.445319 4.02599V39.3284C0.445319 42.0204 3.19372 43.656 5.3103 42.1907L31.0252 24.5395C31.4754 24.2322 31.8462 23.8071 32.1032 23.3036C32.3602 22.8002 32.4949 22.2348 32.4949 21.6601C32.4949 21.0855 32.3602 20.5201 32.1032 20.0167C31.8462 19.5132 31.4754 19.0881 31.0252 18.7808L5.3103 1.16363C4.83381 0.831205 4.28298 0.643661 3.7159 0.620785C3.14883 0.597908 2.58655 0.740547 2.08837 1.03366C1.59019 1.32676 1.17459 1.75947 0.885404 2.28613C0.596221 2.8128 0.44418 3.41389 0.445319 4.02599Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.bgImage} lg:hidden`}>
        <Image
          alt="wave"
          src={"/images/hero/mobile.jpg"}
          quality={80}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className={`${styles.bgImage} hidden lg:inline-flex`}>
        <Image
          alt="wave"
          src={"/images/hero/desk.jpg"}
          quality={80}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className={`${styles.waveTopImage} md:hidden`}>
        <Image
          alt="Mountains"
          src={"/images/hero/waveTopMobile.png"}
          quality={80}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className={`${styles.waveBottomImage} md:hidden`}>
        <Image
          alt="wave"
          src={"/images/hero/waveMobile.png"}
          quality={80}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className={`${styles.waveBottomImage} hidden md:block`}>
        <Image
          alt="wave"
          src={"/images/hero/waveBottomDesk.png"}
          quality={90}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
