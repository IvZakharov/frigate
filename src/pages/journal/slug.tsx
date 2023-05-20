import BackLink from "@/components/Shared/BackLink/BackLink";
import Article from "@/components/Journal/Article/Article";
import Cta from "@/components/Cta/Cta";

import SwiperArticle from "@/components/Journal/SwiperArticle/SwiperArticle";

export default function Journal() {
  return (
    <>
      <div className={"container mt-16 mb-10 md:mt-8 xl:mt-16 xl:mb-16"}>
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
  );
}
