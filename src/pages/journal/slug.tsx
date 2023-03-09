import { MainLayout } from "@/layouts/MainLayout";
import BackLink from "@/components/Shared/BackLink/BackLink";
import Article from "@/components/Journal/Article/Article";
import Cta from "@/components/Cta/Cta";
import Title from "@/components/Shared/Title/Title";
import SwiperArticle from "@/components/Journal/SwiperArticle/SwiperArticle";

export default function Journal() {
  return (
    <MainLayout>
      <>
        <div className={"container pt-24 pb-10 xl:pb-24"}>
          <BackLink slug={"/journal"} />
        </div>

        <div className={"container"}>
          <Article
            title={"How to choose a board?"}
            thumbnail={"/images/journal/1.jpg"}
            date={"February 04.02.2023, 11:56"}
            content={
              "Nowadays search engines have become much more sophisticated. These intelligent algorithms no longer take into account artificial quantitative indicators like link mass or high keyword frequency."
            }
          />
        </div>

        <div className={"py-8"}>
          <Cta />
        </div>

        <SwiperArticle />
      </>
    </MainLayout>
  );
}
