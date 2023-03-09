import styles from "./Reviews.module.scss";
import React from "react";
import Image from "next/image";
import { reviews } from "@/data/reviews";
import Title from "@/components/Shared/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Video from "@/components/Shared/Video/Video";
import ReviewContent from "@/components/Reviews/Content";

const Reviews: React.FC = () => {
  const [swiper, setSwiper] = React.useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore>();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleChangeSlide = () => {
    if (swiper) {
      setActiveIndex(swiper.activeIndex);
    }
  };

  return (
    <section className={styles.reviews}>
      <div className={"container"}>
        <div className={"mb-8"}>
          <Title variant={"h2"}>video Reviews</Title>
        </div>

        <div className={"grid gap-4 grid-cols-1 lg:grid-cols-2"}>
          <div className={"mb-4"}>
            <div className={"mb-4"}>
              <Swiper
                onSwiper={setSwiper}
                spaceBetween={16}
                onSlideChange={handleChangeSlide}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[Thumbs]}
                slideActiveClass={styles.activeSlide}
                className={styles.swiper}
              >
                {reviews.map((obj, idx) => (
                  <SwiperSlide key={"placeholder" + idx}>
                    <div className={styles.video}>
                      <Video placeholder={obj.placeholder} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div>
              <Swiper
                onSwiper={setThumbsSwiper}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className={`${styles.swiperThumbs} swiperReviewsThumbs`}
                spaceBetween={16}
                slidesPerView={"auto"}
                wrapperClass={styles.wrapper}
              >
                {reviews.map((obj, idx) => (
                  <SwiperSlide key={"thumb" + idx} className={styles.slide}>
                    <div className={styles.thumb}>
                      <Image
                        alt={"board"}
                        src={obj.placeholder}
                        quality={80}
                        fill
                        sizes="(max-width: 768px) 25vw,
                            (max-width: 1200px) 25vw,
                            25vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {reviews.map(
            (obj, idx) =>
              activeIndex === idx && (
                <ReviewContent
                  rating={obj.authorRating}
                  authorName={obj.authorName}
                  authorQuote={obj.authorQuote}
                  socials={obj.socials}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
