import React from "react";
import styles from "./SwiperArticle.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { journals } from "@/data/journals";
import SwiperCard from "@/components/Journal/SwiperCard/SwiperCard";
import Title from "@/components/Shared/Title/Title";

const SwiperArticle: React.FC = () => {
  const arrowPrev = React.useRef<HTMLButtonElement>(null);
  const arrowNext = React.useRef<HTMLButtonElement>(null);

  return (
    <section>
      <div className={"container"}>
        <div className={"relative lg:grid lg:grid-cols-4"}>
          <div className={"lg:col-span-3"}>
            <Title variant={"h2"}>Other article</Title>
          </div>

          <div className={styles.arrows}>
            <button ref={arrowPrev} className={`${styles.arrowPrev} button`}>
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.18894 0.32803L5.84792 5.20402C5.90322 5.26207 5.94248 5.32495 5.96571 5.39267C5.98893 5.4604 6.00036 5.53295 5.99999 5.61035C5.99999 5.68775 5.98856 5.76031 5.96571 5.82803C5.94285 5.89575 5.90359 5.95864 5.84792 6.01668L1.18894 10.9072C1.05991 11.0426 0.898616 11.1104 0.705068 11.1104C0.51152 11.1104 0.345621 11.0378 0.207373 10.8927C0.0691241 10.7476 -2.74651e-07 10.5782 -2.74651e-07 10.3848C-2.74651e-07 10.1913 0.0691241 10.022 0.207373 9.87684L4.27188 5.61035L0.207373 1.34386C0.0783406 1.20842 0.0138244 1.04143 0.0138244 0.842911C0.0138244 0.644389 0.0829487 0.472761 0.221197 0.32803C0.359446 0.182911 0.520736 0.110352 0.705068 0.110352C0.889399 0.110352 1.05069 0.182911 1.18894 0.32803Z"
                  fill="#333333"
                />
              </svg>
            </button>
            <button ref={arrowNext} className={`${styles.arrowNext} button`}>
              <svg
                width="6"
                height="12"
                viewBox="0 0 6 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.18894 0.32803L5.84792 5.20402C5.90322 5.26207 5.94248 5.32495 5.96571 5.39267C5.98893 5.4604 6.00036 5.53295 5.99999 5.61035C5.99999 5.68775 5.98856 5.76031 5.96571 5.82803C5.94285 5.89575 5.90359 5.95864 5.84792 6.01668L1.18894 10.9072C1.05991 11.0426 0.898616 11.1104 0.705068 11.1104C0.51152 11.1104 0.345621 11.0378 0.207373 10.8927C0.0691241 10.7476 -2.74651e-07 10.5782 -2.74651e-07 10.3848C-2.74651e-07 10.1913 0.0691241 10.022 0.207373 9.87684L4.27188 5.61035L0.207373 1.34386C0.0783406 1.20842 0.0138244 1.04143 0.0138244 0.842911C0.0138244 0.644389 0.0829487 0.472761 0.221197 0.32803C0.359446 0.182911 0.520736 0.110352 0.705068 0.110352C0.889399 0.110352 1.05069 0.182911 1.18894 0.32803Z"
                  fill="#333333"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          className={`${styles.swiper} articleSwiper`}
          spaceBetween={20}
          slidesPerView={"auto"}
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
          {journals.map((journal, idx) => (
            <SwiperSlide key={idx + journal.title} className={styles.slide}>
              <SwiperCard
                title={journal.title}
                thumbnail={journal.thumbnail}
                date={journal.date}
                description={journal.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperArticle;
