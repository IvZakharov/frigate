import styles from "./HeroSlider.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Patua_One } from "@next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { products } from "@/data/products";

import ProductCardDemo from "@/components/HeroDemo/Second/Card/ProductCardDemo";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const HeroSlider: React.FC = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      className={`${styles.swiper} heroDemoSwiper2 relative`}
    >
      {products.map((product, idx) => (
        <SwiperSlide key={idx} className={styles.slide}>
          <ProductCardDemo
            title={product.title}
            status={product.status}
            images={product.images}
            price={product.price}
            length={product.length}
            thickness={product.thickness}
            key={idx}
            slug={"/catalog/slug"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
