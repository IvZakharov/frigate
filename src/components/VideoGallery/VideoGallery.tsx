import styles from "./VideoGallery.module.scss";
import React from "react";
import Image from "next/image";
import { sliceIntoChunks } from "@/Utils/sliceIntoChunks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";

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

import "swiper/css/grid";
import "swiper/css/pagination";
import Title from "@/components/Shared/Title/Title";
import Video from "@/components/Shared/Video/Video";

const VideoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const desktopPaginationRef = React.useRef<HTMLDivElement>(null);
  const mobilePaginationRef = React.useRef<HTMLDivElement>(null);
  const imagesForMobile = sliceIntoChunks(images, 3);
  const imagesForDesktop = sliceIntoChunks(images, 6);

  return (
    <section className={styles.videoGallery}>
      <div className={"container px-0 relative"}>
        <div className={"mb-8 xl:mb-14"}>
          <Title variant={"h2"}>Video gallery</Title>
        </div>
        <MyFancybox>
          <div className={"md:hidden"}>
            <Swiper
              slidesPerView={1}
              pagination={{
                el: mobilePaginationRef.current,
                clickable: true,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.pagination.el = mobilePaginationRef.current;
              }}
              modules={[Grid, Pagination]}
              className={`${styles.swiper} gallerySwiper`}
            >
              {imagesForMobile.map((chunk: any, idx: number) => (
                <SwiperSlide key={idx} className={styles.slide}>
                  <div className={`grid grid-row-3 grid-cols-2 h-full`}>
                    {chunk.map((obj: any, idx: number) => (
                      <div
                        className={`${
                          idx === 0 ? "col-span-2 row-span-2" : ""
                        }`}
                        key={idx}
                      >
                        <Video placeholder={obj.src} />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={"hidden md:block"}>
            <Swiper
              slidesPerView={1}
              pagination={{
                el: desktopPaginationRef.current,
                clickable: true,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.pagination.el = desktopPaginationRef.current;
              }}
              modules={[Grid, Pagination]}
              className={`${styles.swiper} gallerySwiper`}
            >
              {imagesForDesktop.map((chunk: any, idx: number) => (
                <SwiperSlide key={idx} className={styles.slide}>
                  <div className={`grid grid-row-3 grid-cols-3 h-full`}>
                    {chunk.map((obj: any, idx: number) => (
                      <div
                        className={`${
                          idx === 0 ? "col-span-2 row-span-2" : ""
                        }`}
                        key={idx}
                      >
                        <Video placeholder={obj.src} />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={"px-8 md:px-0"}>
            <div
              className={`swiper-pagination md:hidden`}
              ref={mobilePaginationRef}
            ></div>
            <div
              className={`swiper-pagination hidden md:block`}
              ref={desktopPaginationRef}
            ></div>
          </div>
        </MyFancybox>
      </div>
    </section>
  );
};

export default VideoGallery;
