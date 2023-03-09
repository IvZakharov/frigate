import { MainLayout } from "@/layouts/MainLayout";
import Hero from "@/components/Hero/Hero";
import CtaMain from "@/components/Cta/CtaMain";
import Advantages from "@/components/Advantages/Advantages";
import ProductionProcess from "@/components/ProductionProcess/ProductionProcess";
import Reviews from "@/components/Reviews/Reviews";
import { photoGallery } from "@/data/gallery";
import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import ThankYou from "@/components/ThankYou/ThankYou";

export default function Home() {
  return (
    <MainLayout>
      <ThankYou />
    </MainLayout>
  );
}
