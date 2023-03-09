import styles from "./DocumentsSwiper.module.scss";
import React from "react";
import Image from "next/image";
import MyFancybox from "@/components/Shared/Fancybox/Fancybox";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";

type Image = {
  width: number;
  height: number;
  src: string;
  caption: string;
};

type DocumentsSwiperProps = {
  images: Image[];
};

const DocumentsSwiper: React.FC<DocumentsSwiperProps> = ({ images }) => {
  return (
    <section className={styles.documentsSwiper}>
      <MyFancybox>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          modules={[]}
          className={`${styles.swiper} gallerySwiper`}
        >
          <div className={styles.wrap}>
            {images.map((image, idx) => (
              <SwiperSlide key={idx} className={styles.slide}>
                <figure className={`${styles.image}`}>
                  <Image
                    alt={"board"}
                    src={image.src}
                    data-fancybox="imageGallery"
                    data-src={image.src}
                    quality={80}
                    width={image.width}
                    height={image.height}
                  />
                  <figcaption style={{ width: image.width / 2 }}>
                    {image.caption}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </MyFancybox>
    </section>
  );
};

export default DocumentsSwiper;
