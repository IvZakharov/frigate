import styles from "./Advantages.module.scss";
import React from "react";
import Image from "next/image";

import { Patua_One } from "@next/font/google";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Advantages: React.FC = () => {
  return (
    <section className={styles.advantages}>
      <div className={"container"}>
        <div className={`${styles.video} mb-8`}>
          <div className={styles.placeholder}>
            <Image
              alt="hero"
              src={"/images/advantages/placeholder.jpg"}
              quality={80}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className={styles.playButton}>
            <svg
              width="47"
              height="61"
              viewBox="0 0 47 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.339853 5.32393V55.76C0.339853 59.606 4.30096 61.9428 7.35146 59.8494L44.4128 34.6314C45.0617 34.1923 45.5961 33.5849 45.9665 32.8656C46.3368 32.1464 46.531 31.3387 46.531 30.5176C46.531 29.6966 46.3368 28.8888 45.9665 28.1696C45.5961 27.4503 45.0617 26.8429 44.4128 26.4039L7.35146 1.23452C6.66473 0.759587 5.87084 0.491645 5.05355 0.458961C4.23626 0.426278 3.42588 0.630065 2.70788 1.04882C1.98989 1.46758 1.3909 2.08579 0.974121 2.83822C0.557339 3.59066 0.338211 4.44943 0.339853 5.32393Z"
                fill="white"
              />
            </svg>
          </div>

          <p className={styles.description}>
            What are the advantages of a frigate
          </p>
        </div>

        <div
          className={"px-5 flex flex-col gap-6 md:flex-row xl:gap-20 xl:px-44"}
        >
          <div className={"mb-7"}>
            <p className={styles.quote}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim,
              metus"
            </p>
            <h4 className={`${styles.name} ${patuaOne.className}`}>
              Darlene Robertson
            </h4>
            <p className={styles.position}>Product Manager at Jomanar</p>
          </div>

          <span className={styles.line}></span>

          <div className={"mb-7"}>
            <p className={styles.quote}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              "
            </p>
            <h4 className={`${styles.name} ${patuaOne.className}`}>
              Bessie Cooper
            </h4>
            <p className={styles.position}>Freelance UX Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
