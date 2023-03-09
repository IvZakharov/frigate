import styles from "./ProductionProcess.module.scss";
import React from "react";
import Image from "next/image";
import Title from "@/components/Shared/Title/Title";
import Video from "@/components/Shared/Video/Video";
import MyFancybox from "@/components/Shared/Fancybox/Fancybox";

const ProductionProcess: React.FC = () => {
  return (
    <section className={styles.production}>
      <div className={"container"}>
        <div className={"mb-10"}>
          <Title variant={"h2"}>boards production process using cnc</Title>
        </div>

        <MyFancybox>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-14"}>
            <div className={styles.video}>
              <Video placeholder={"/images/hero/desk.jpg"} />
            </div>

            <div className={""}>
              <div className={"flex items-center mb-2 md:hidden"}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={"mr-2.5"}
                >
                  <path
                    d="M16.5 2.31738V16.3174H2.5V2.31738H16.5ZM16.5 0.317383H2.5C1.4 0.317383 0.5 1.21738 0.5 2.31738V16.3174C0.5 17.4174 1.4 18.3174 2.5 18.3174H16.5C17.6 18.3174 18.5 17.4174 18.5 16.3174V2.31738C18.5 1.21738 17.6 0.317383 16.5 0.317383ZM11.64 9.17738L8.64 13.0474L6.5 10.4574L3.5 14.3174H15.5L11.64 9.17738Z"
                    fill="#BFBFBF"
                  />
                </svg>
                <p className={styles.galleryTitle}>Image</p>
              </div>

              <div className={"grid grid-cols-4 grid-rows-3 h-full gap-2.5"}>
                <div className={"col-span-1 row-span-1"}>
                  <div className={styles.image}>
                    <Image
                      alt={"video placeholder"}
                      data-fancybox="gallery"
                      data-src={"/images/production/2.jpg"}
                      src={"/images/production/2.jpg"}
                      quality={80}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className={"col-span-2 row-span-1"}>
                  <div className={styles.image}>
                    <Image
                      alt={"video placeholder"}
                      data-fancybox="gallery"
                      data-src={"/images/production/2.jpg"}
                      src={"/images/production/2.jpg"}
                      quality={80}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className={"col-span-1 row-span-1"}>
                  <div className={styles.image}>
                    <Image
                      alt={"video placeholder"}
                      data-fancybox="gallery"
                      data-src={"/images/production/1.jpg"}
                      src={"/images/production/1.jpg"}
                      quality={80}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className={"col-span-2 row-span-2"}>
                  <div className={styles.image}>
                    <Image
                      alt={"video placeholder"}
                      data-fancybox="gallery"
                      data-src={"/images/production/2.jpg"}
                      src={"/images/production/2.jpg"}
                      quality={80}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className={"col-span-1 row-span-1"}>
                  <div className={styles.image}>
                    <Image
                      alt={"video placeholder"}
                      data-fancybox="gallery"
                      data-src={"/images/production/1.jpg"}
                      src={"/images/production/1.jpg"}
                      quality={80}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className={"col-span-1 row-span-2"}>
                  <div className={styles.image}>
                    <Image
                      alt={"video placeholder"}
                      data-fancybox="gallery"
                      data-src={"/images/production/2.jpg"}
                      src={"/images/production/2.jpg"}
                      quality={80}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>

                <div className={"col-span-1 row-span-1"}>
                  <div className={styles.image}>
                    <Image
                      alt={"video placeholder"}
                      data-fancybox="gallery"
                      data-src={"/images/production/3.jpg"}
                      src={"/images/production/3.jpg"}
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
            </div>
          </div>
        </MyFancybox>

        <div className={"px-5 grid grid-cols-1 gap-8 md:grid-cols-2 md:px-0"}>
          <div className={"md:pr-10"}>
            <h3 className={styles.title}>CNC visual board in section</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat
            </p>
          </div>
          <div className={"md:pr-10"}>
            <h3 className={styles.title}>CNC visual board in section</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;
