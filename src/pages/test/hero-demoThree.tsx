import React from "react";

import Hero from "@/components/Hero/Hero";
import CtaMain from "@/components/Cta/CtaMain";
import Advantages from "@/components/Advantages/Advantages";
import ProductionProcess from "@/components/ProductionProcess/ProductionProcess";
import Reviews from "@/components/Reviews/Reviews";
import { photoGallery } from "@/data/gallery";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import VideoGallery from "@/components/VideoGallery/VideoGallery";
import Technologies from "@/components/Technologies/Technologies";

import Cta from "@/components/Cta/Cta";
import HeroDemo3 from "@/components/HeroDemo/Third/Hero/Hero";

export default function HomeDemo() {
  return (
    <>
      <div className={"mt-10 mb-8 md:mb-16 md:mt-0"}>
        <HeroDemo3 />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-40"}>
        <CtaMain />
      </div>

      <div className={"mb-24 md:mb-32 xl:mb-52"}>
        <Technologies />
      </div>

      <div className={"mb-24 md:mb-32 xl:mb-56"}>
        <Advantages />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-40"}>
        <Cta />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-40"}>
        <ProductionProcess />
      </div>

      <div className={"mb-24 md:mb-32 xl:mb-40"}>
        <Reviews />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-40"}>
        <PhotoGallery images={photoGallery} />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-40"}>
        <VideoGallery images={photoGallery} />
      </div>

      <div className={"mb-16 md:mb-24 xl:mb-40"}>
        <Cta />
      </div>

      <div className={""}></div>
    </>
  );
}
