import styles from "./Cta.module.scss";
import React from "react";
import Image from "next/image";

const CtaMain: React.FC = () => {
  return (
    <section className={`${styles.main}`}>
      <div className={styles.wrap}>
        <div className={"container px-0"}>
          <div className={styles.content}>
            <h3 className={styles.title}>
              WANT a CUSTOM <br /> Surfboard FOR <br /> YOUrself?
            </h3>

            <div className={"flex justify-end"}>
              <p className={styles.description}>
                Price start from 750$ <br />
                ...and 7 days making only!
              </p>
            </div>

            <div className={"flex justify-end"}>
              <button className={styles.button}>
                <i>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.42578 5.97266H20.4258L19.3702 20.2227H2.48134L1.42578 5.97266Z"
                      stroke="white"
                      strokeWidth="2.11111"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.70312 8.08377V1.22266H15.1476V8.08377"
                      stroke="white"
                      strokeWidth="2.11111"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.70312 16.0005H15.1476"
                      stroke="white"
                      strokeWidth="2.11111"
                      strokeLinecap="round"
                    />
                  </svg>
                </i>
                <span>custom board</span>
              </button>
            </div>
          </div>
          <div className={`${styles.bgImage} md:hidden`}>
            <Image
              alt="Mountains"
              src={"/images/cta/mobile.jpg"}
              quality={80}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <div className={`${styles.bgImage} hidden md:inline-flex`}>
            <Image
              alt="Mountains"
              src={"/images/cta/desk.jpg"}
              quality={80}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaMain;
