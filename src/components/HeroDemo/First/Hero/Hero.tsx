import styles from "./Hero.module.scss";
import React from "react";
import Image from "next/image";

import HeroProduct from "@/components/HeroDemo/First/HeroProdect/HeroProdect";
import ProductCategories from "@/components/Product/Categories/ProductCategories";
import ProductInfo from "@/components/Product/Info/ProductInfo";
import ProductColors from "@/components/Product/Colors/ProductColors";
import ProductPhins from "@/components/Product/Phins/ProductPhins";
import DemoProductPrice from "@/components/HeroDemo/First/Price/DemoProductPrice";

import { Patua_One } from "@next/font/google";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const product = {
  id: 0,
  title: "Chilli Rare Board",
  status: "sale",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
  imagesArr: [
    "/images/products/board.png",
    "/images/products/board.png",
    "/images/products/board.png",
    "/images/products/board.png",
  ],
  rating: 4,
  categories: ["Softboard", "board", "Soft"],
  colors: ["blue", "red", "yellow"],
  phins: [
    "/images/icons/phins/1.svg",
    "/images/icons/phins/2.svg",
    "/images/icons/phins/3.svg",
  ],
  volume: ["33"],
  attributes: [
    { name: "Length", variants: ["7’11”", "7’11”", "7’11”"] },
    { name: "Width", variants: ["22  1/8”", "22  1/8”", "22  1/8”"] },
    {
      name: "Thickness",
      variants: ["2  11 / 16”", "2  11 / 16”", "2  11 / 16”"],
    },
  ],
  price: { actual: "900", old: "1160" },
  details: [
    { title: "8’ x 22 1/2” x 2 3/4”", image: "/images/icons/details/1.svg" },
    {
      title:
        "Epoxy construction- Lighter, stronger and more bouyant than traditional fiberglass",
      image: "/images/icons/details/2.svg",
    },
    {
      title: "CNC Machine Shaped EPS Foam (hand finished)",
      image: "/images/icons/details/3.svg",
    },
    {
      title: "Flat through the middle, double concave at the tail",
      image: "/images/icons/details/4.svg",
    },
    { title: "Beveled Rail", image: "/images/icons/details/5.svg" },
    {
      title:
        '2+1 FCS compatible fins included (8" center fin and 2 side bite fins)',
      image: "/images/icons/details/6.svg",
    },
  ],
};

const HeroDemo1: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={"container h-full relative z-10"}>
        <div
          className={
            "md:flex md:flex-wrap xl:flex-nowrap md:justify-between md:gap-6 lg:gap-12 xl:gap-16"
          }
        >
          <div className={" md:pt-10 md:w-full xl:flex-1 xl:w-64"}>
            <h1 className={`${patuaOne.className} ${styles.title}`}>Frigate</h1>
            <p className={"text mb-4 xl:mb-20 md:max-w-sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan
            </p>

            <div className={"hidden xl:block"}>
              <div className={styles.image}>
                <Image
                  src={"/images/demoHero/1.svg"}
                  alt={""}
                  priority
                  width={753}
                  height={461}
                />
              </div>

              <p className={"text"}>
                Hey there, have you ever wondered how surfboards are made? Well,
                let me tell you, it's quite the process! First, you've got to
                choose the right material. Most surfboards nowadays are made out
                of foam and then coated with fiberglass. Once you've got your
                material, the first step is to shape the blank - this is the
                rough outline of the board.{" "}
              </p>
            </div>
          </div>

          <div className={"md:w-1/2 flex-1"}>
            <HeroProduct />
          </div>

          <div className={"pt-6 md:w-1/2 md:pt-0 xl:pt-12 flex-1 xl:w-64"}>
            <div className={"mb-3 xl:mb-4"}>
              <ProductCategories categories={product.categories} />
            </div>
            <div className={"mb-10 xl:mb-16"}>
              <ProductInfo
                title={product.title}
                description={product.description}
              />
            </div>
            <div className={"mb-10 xl:mb-16"}>
              <h4 className={"productCatTitle mb-1"}>Colors</h4>
              <p className={"text-sm mb-4"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <ProductColors colors={product.colors} />
            </div>
            <div className={"mb-10 xl:mb-16"}>
              <h4 className={"productCatTitle mb-4"}>Type of phins</h4>
              <ProductPhins phins={product.phins} />
            </div>

            <div className={""}>
              <DemoProductPrice price={product.price} status={product.status} />
            </div>
          </div>

          <div className={"md:hidden"}>
            <div className={styles.image}>
              <Image
                src={"/images/demoHero/1.svg"}
                alt={""}
                priority
                width={700}
                height={475}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>

            <p className={"text"}>
              Hey there, have you ever wondered how surfboards are made? Well,
              let me tell you, it's quite the process! First, you've got to
              choose the right material. Most surfboards nowadays are made out
              of foam and then coated with fiberglass. Once you've got your
              material, the first step is to shape the blank - this is the rough
              outline of the board.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDemo1;
