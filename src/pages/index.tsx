import Hero from "@/components/Hero/Hero";
import CtaMain from "@/components/Cta/CtaMain";
import Advantages from "@/components/Advantages/Advantages";
import ProductionProcess from "@/components/ProductionProcess/ProductionProcess";
import Reviews from "@/components/Reviews/Reviews";
import { photoGallery } from "@/data/gallery";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import VideoGallery from "@/components/VideoGallery/VideoGallery";
import Technologies from "@/components/Technologies/Technologies";
import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/Product/Card/ProductCard";
import CtaCard from "@/components/Cta/CtaCard";
import Title from "@/components/Shared/Title/Title";
import Cta from "@/components/Cta/Cta";

export default function Home() {
  return (
    <>
      <div className={"mt-24 mb-8 md:mb-16 md:mt-0"}>
        <Hero />
      </div>

      <div className={"container"}>
        <Title variant={"h2"}>Popular boards</Title>

        <div
          className={
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-3 pt-10 pb-10 xl:pt-16 pb-20"
          }
        >
          {products.slice(0, 3).map((product, idx) => (
            <ProductCard
              title={product.title}
              status={product.status}
              images={product.images}
              price={product.price}
              length={product.length}
              thickness={product.thickness}
              key={idx}
              slug={"/catalog/slug"}
            />
          ))}
          <CtaCard />
        </div>
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
    </>
  );
}
