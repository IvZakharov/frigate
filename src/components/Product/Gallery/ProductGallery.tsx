import styles from "./ProductGallery.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import SwiperCore from "swiper";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [swiper, setSwiper] = React.useState<SwiperCore>();
  const [activeSlideIndex, setActiveSlideIndex] = React.useState<number>(0);

  const handleChangeSlide = () => {
    if (swiper) {
      setActiveSlideIndex(swiper?.realIndex);
    }
  };

  const handleClickThumb = (event: React.MouseEvent<HTMLDivElement>) => {
    const item = event.currentTarget.tabIndex;

    if (swiper) {
      setActiveSlideIndex(item);
      swiper.slideTo(item);
    }
  };

  React.useEffect(() => {}, [swiper?.realIndex]);

  return (
    <div className={styles.gallery}>
      <div className={"flex md:gap-10 xl:gap-20"}>
        <div className={"w-1/2 md:order-1"}>
          <Swiper
            spaceBetween={20}
            initialSlide={activeSlideIndex}
            slideActiveClass={styles.activeSlide}
            className={styles.swiper}
            onSwiper={setSwiper}
            onSlideChange={handleChangeSlide}
          >
            {images.map((image, idx) => (
              <SwiperSlide key={"image" + idx}>
                <div className={styles.image}>
                  <Image
                    alt="Board"
                    src={image}
                    width={400}
                    height={700}
                    priority={idx === 0}
                    sizes="50vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={"w-1/2 md:w-auto"}>
          <div className={styles.thumbs}>
            {images.map((image, idx) => (
              <div
                className={`${styles.thumb} ${
                  idx === activeSlideIndex ? styles.active : ""
                }`}
                tabIndex={idx}
                key={idx + "thumb"}
                onClick={handleClickThumb}
              >
                <Image
                  alt={"board"}
                  src={image}
                  quality={80}
                  fill
                  priority
                  sizes="(max-width: 768px) 75vw,
                              (max-width: 1200px) 40vw,
                              33vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
