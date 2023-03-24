import styles from "./Technologies.module.scss";
import React from "react";
import Image from "next/image";
import { technologies } from "@/data/technologies";
import Title from "@/components/Shared/Title/Title";

const Technologies: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const elem = event.currentTarget.dataset.index;

    if (elem) {
      setActiveTab(Number(elem));
    }
  };

  return (
    <section className={styles.technologies}>
      <div className={"container"}>
        <div className={"mb-8"}>
          <Title variant={"h2"}>Our boards technologies</Title>
        </div>

        <div className={"grid grid-cols-2 ga-8 md:gap-20 xl:px-20"}>
          <div>
            {technologies.map(
              (obj, idx) =>
                activeTab === idx && (
                  <div className={styles.image} key={"image" + idx}>
                    <Image
                      alt={obj.title}
                      src={obj.image}
                      width={400}
                      height={600}
                      sizes="(max-width: 768px) 50vw,
                            (max-width: 1200px) 40vw,
                            33vw"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                )
            )}
          </div>

          <div className={"flex flex-col justify-center xl:pl-20"}>
            <div className={styles.tabs}>
              {technologies.map((obj, idx) => (
                <button
                  key={obj.id}
                  className={`${styles.tab} ${
                    idx === activeTab && styles.active
                  }`}
                  data-index={idx}
                  onClick={handleTabClick}
                >
                  <span className={styles.line}></span>
                  <p className={styles.text}>{obj.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
