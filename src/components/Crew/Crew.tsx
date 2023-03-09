import styles from "./Crew.module.scss";
import React from "react";
import Image from "next/image";

import Title from "@/components/Shared/Title/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { crew } from "@/data/crew";
import CrewContent from "@/components/Crew/Content";

const Crew: React.FC = () => {
  const [swiper, setSwiper] = React.useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore>();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleChangeSlide = () => {
    if (swiper) {
      setActiveIndex(swiper.activeIndex);
    }
  };

  return (
    <section className={styles.crew}>
      <div className={"container"}>
        <div className={"mb-8"}>
          <Title variant={"h2"}>frigate’s onboard crew</Title>
        </div>

        <div className={"md:flex flex-col relative"}>
          {/*thumbs*/}
          <div className={"mb-2.5 md:mb-0"}>
            <Swiper
              onSwiper={setThumbsSwiper}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              className={`${styles.swiperThumbs} swiperCrewThumbs`}
              spaceBetween={4}
              slidesPerView={4}
              wrapperClass={styles.wrapper}
              breakpoints={{
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
            >
              {crew.map((obj, idx) => (
                <SwiperSlide key={"thumb" + idx} className={styles.slide}>
                  <h4 className={styles.name}>{obj.name}</h4>
                  <div className={styles.thumb}>
                    <Image
                      alt={"board"}
                      src={obj.image}
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

          <div className={"md:flex md:order-first"}>
            <Swiper
              onSwiper={setSwiper}
              spaceBetween={16}
              onSlideChange={handleChangeSlide}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Thumbs]}
              slideActiveClass={styles.activeSlide}
              className={`${styles.swiper}`}
            >
              {crew.map((obj, idx) => (
                <SwiperSlide key={"image" + idx} className={styles.slide}>
                  <div className={styles.image}>
                    <Image
                      alt={obj.name}
                      src={obj.image}
                      quality={80}
                      fill
                      sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 60vw,
                    50vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={"md:flex-1"}>
              {crew.map(
                (obj, idx) =>
                  activeIndex === idx && (
                    <CrewContent
                      title={obj.title}
                      age={obj.age}
                      quote={obj.quote}
                      socials={obj.socials}
                      features={obj.features}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
