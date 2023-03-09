import styles from "./ProductCard.module.scss";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type CardSwiperProps = {
  images: string[];
};

const CardSwiper: React.FC<CardSwiperProps> = ({ images }) => {
  const arrowPrev = React.useRef<HTMLButtonElement>(null);
  const arrowNext = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        className={"cardSwiper relative"}
        navigation={{
          prevEl: arrowPrev.current,
          nextEl: arrowNext.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = arrowPrev.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = arrowNext.current;
        }}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.image}>
              <Image
                alt="Board"
                src={image}
                width={700}
                height={475}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </SwiperSlide>
        ))}

        <button ref={arrowPrev} className={`${styles.arrowPrev} iconButton`}>
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.34087 1.099L9.54984 8.3008C9.6354 8.38654 9.69615 8.47942 9.73209 8.57944C9.76803 8.67947 9.78571 8.78664 9.78514 8.90095C9.78514 9.01527 9.76746 9.12244 9.73209 9.22246C9.69672 9.32249 9.63597 9.41537 9.54984 9.5011L2.34087 16.7243C2.14122 16.9244 1.89165 17.0244 1.59217 17.0244C1.29269 17.0244 1.03599 16.9172 0.822072 16.7029C0.608157 16.4886 0.501199 16.2385 0.501199 15.9527C0.501199 15.6669 0.608157 15.4169 0.822072 15.2025L7.1112 8.90095L0.822072 2.59937C0.622418 2.39932 0.52259 2.15269 0.52259 1.85947C0.52259 1.56626 0.629548 1.31277 0.843464 1.099C1.05738 0.884658 1.30695 0.777489 1.59217 0.777489C1.87739 0.777489 2.12696 0.884658 2.34087 1.099Z"
              fill="#333333"
            />
          </svg>
        </button>
        <button ref={arrowNext} className={`${styles.arrowNext} iconButton`}>
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.34087 1.099L9.54984 8.3008C9.6354 8.38654 9.69615 8.47942 9.73209 8.57944C9.76803 8.67947 9.78571 8.78664 9.78514 8.90095C9.78514 9.01527 9.76746 9.12244 9.73209 9.22246C9.69672 9.32249 9.63597 9.41537 9.54984 9.5011L2.34087 16.7243C2.14122 16.9244 1.89165 17.0244 1.59217 17.0244C1.29269 17.0244 1.03599 16.9172 0.822072 16.7029C0.608157 16.4886 0.501199 16.2385 0.501199 15.9527C0.501199 15.6669 0.608157 15.4169 0.822072 15.2025L7.1112 8.90095L0.822072 2.59937C0.622418 2.39932 0.52259 2.15269 0.52259 1.85947C0.52259 1.56626 0.629548 1.31277 0.843464 1.099C1.05738 0.884658 1.30695 0.777489 1.59217 0.777489C1.87739 0.777489 2.12696 0.884658 2.34087 1.099Z"
              fill="#333333"
            />
          </svg>
        </button>
      </Swiper>
    </>
  );
};

export default CardSwiper;
