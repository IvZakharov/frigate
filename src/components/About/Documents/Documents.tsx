import styles from "./Documents.module.scss";
import React from "react";
import { documentsFirst } from "@/data/documents";
import { documentsSecond } from "@/data/documentsSecond";
import { Patua_One } from "@next/font/google";
import DocumentsSwiper from "@/components/About/Swiper/DocumentsSwiper";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const AboutDocuments: React.FC = () => {
  return (
    <section className={styles.documents}>
      <div className={"container"}>
        <h2 className={`${styles.title} ${patuaOne.className} mb-14`}>
          Authentic documents of HMS “Dolphin”
        </h2>

        <div className={"xl:flex xl:gap-14"}>
          <div className={"w-1/2 mb-9 xl:w-1/4"}>
            <p className={styles.text}>
              We associate our surfboards with the “Dolphin-like” frigates -
              fast, lightweight and maneuverable. Just like the HMS “Dolphin”
              served its purpose truthfully, our surfboards will serve you in
              your voyages.
            </p>
          </div>

          <div className={"xl:w-3/4"}>
            <div className={"mb-14"}>
              <DocumentsSwiper images={documentsFirst} />
            </div>

            <div className={""}>
              <DocumentsSwiper images={documentsSecond} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDocuments;
