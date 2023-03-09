import styles from "./PhotoGallery.module.scss";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Grid, Pagination } from "swiper";
import MyFancybox from "@/components/Shared/Fancybox/Fancybox";

type Image = {
  width: number;
  height: number;
  src: string;
};

type PhotoGalleryProps = {
  images: Image[];
};

import "swiper/css";
// import "swiper/css/lazy";
import "swiper/css/grid";
import "swiper/css/pagination";
import Title from "@/components/Shared/Title/Title";

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const paginationRef = React.useRef<HTMLDivElement>(null);

  return (
    <section className={styles.photoGallery}>
      <div className={"container px-0 relative"}>
        <div className={"mb-8 xl:mb-14"}>
          <Title variant={"h2"}>Photo gallery</Title>
        </div>
        <MyFancybox>
          <Swiper
            slidesPerView={"auto"}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.pagination.el = paginationRef.current;
            }}
            grid={{ rows: 2, fill: "row" }}
            modules={[Grid, Pagination]}
            className={`${styles.swiper} gallerySwiper`}
          >
            <div className={styles.wrap}>
              {images.map((image, idx) => (
                <SwiperSlide key={idx} className={styles.slide}>
                  <div className={`${styles.image}`}>
                    <Image
                      alt={"board"}
                      src={image.src}
                      data-fancybox="imageGallery"
                      data-src={image.src}
                      quality={80}
                      width={image.width}
                      height={image.height}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className={"px-8 md:px-0"}>
            <div className={`swiper-pagination`} ref={paginationRef}></div>
          </div>
        </MyFancybox>
      </div>
    </section>
  );
};

export default PhotoGallery;
