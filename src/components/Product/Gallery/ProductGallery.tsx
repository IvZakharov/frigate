import styles from "./ProductGallery.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { Thumbs } from "swiper";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore>();

  return (
    <div className={styles.gallery}>
      <div className={"flex md:gap-10 xl:gap-20"}>
        <div className={"w-1/2 md:order-1"}>
          <Swiper
            spaceBetween={20}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Thumbs]}
            slideActiveClass={styles.activeSlide}
            className={styles.swiper}
          >
            {images.map((image, idx) => (
              <SwiperSlide key={"image" + idx}>
                <div className={styles.image}>
                  <Image
                    alt="Board"
                    src={image}
                    width={400}
                    height={700}
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
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={"auto"}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className={`${styles.swiperThumbs} swiperThumbs`}
            direction={"vertical"}
            wrapperClass={styles.wrapper}
            loop
          >
            {images.map((image, idx) => (
              <SwiperSlide key={"thumb" + idx} className={styles.slide}>
                <div className={styles.thumb}>
                  <Image
                    alt={"board"}
                    src={image}
                    quality={80}
                    fill
                    sizes="(max-width: 768px) 75vw,
                            (max-width: 1200px) 40vw,
                            33vw"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
