import { MainLayout } from "@/layouts/MainLayout";
import Hero from "@/components/Hero/Hero";
import CtaMain from "@/components/Cta/CtaMain";
import Advantages from "@/components/Advantages/Advantages";
import ProductionProcess from "@/components/ProductionProcess/ProductionProcess";
import Reviews from "@/components/Reviews/Reviews";
import { photoGallery } from "@/data/gallery";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import VideoGallery from "@/components/VideoGallery/VideoGallery";
import Technologies from "@/components/Technologies/Technologies";

export default function Home() {
  return (
    <MainLayout>
      <>
        <div className={"mt-24 mb-16 md:mt-0"}>
          <Hero />
        </div>

        <div className={"mb-10"}>
          <CtaMain />
        </div>

        <div className={"mb-10"}>
          <Technologies />
        </div>

        <div className={"mb-10"}>
          <Advantages />
        </div>

        <div className={"mb-10"}>
          <ProductionProcess />
        </div>

        <div className={"mb-20"}>
          <Reviews />
        </div>

        <div className={"mb-10"}>
          <PhotoGallery images={photoGallery} />
        </div>

        <div className={"mb-10"}>
          <VideoGallery images={photoGallery} />
        </div>
      </>
    </MainLayout>
  );
}
