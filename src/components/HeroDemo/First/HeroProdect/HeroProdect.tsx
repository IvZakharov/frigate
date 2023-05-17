import styles from "./HeroProdect.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Patua_One } from "@next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { products } from "@/data/products";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const HeroProduct: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.bgImage}>
        <Image
          alt="Mountains"
          src={"/images/demoHero/2.jpg"}
          quality={100}
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className={"heroDemoSwiper relative"}
        >
          {products[0].images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.image}>
                <Image
                  alt="Board"
                  src={image}
                  width={300}
                  height={600}
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroProduct;
