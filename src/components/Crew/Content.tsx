import styles from "./Crew.module.scss";
import React from "react";
import SocialButton from "@/ui/SocialButton/SocialButton";

type Social = {
  name: string;
  url: string;
};

type feature = {
  title: string;
  value: string;
};

type CrewContentProps = {
  title: string;
  age: string;
  quote: string;
  socials: Social[];
  features: feature[];
};

const CrewContent: React.FC<CrewContentProps> = ({
  title,
  age,
  quote,
  socials,
  features,
}) => {
  return (
    <div className={styles.content}>
      <h3 className={`${styles.title}`}>{title}</h3>
      <p className={styles.age}>{age}</p>
      <p className={styles.quote}>{quote}</p>

      <div className={"xl:flex items-center xl:mb-10"}>
        <div className={styles.watchReviews}>
          <button className={styles.button}>
            <svg
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.890629 2.69219V25.7472C0.890629 27.5053 2.68553 28.5735 4.06782 27.6165L20.8615 16.089C21.1555 15.8883 21.3977 15.6107 21.5655 15.2819C21.7333 14.9531 21.8213 14.5839 21.8213 14.2086C21.8213 13.8333 21.7333 13.464 21.5655 13.1353C21.3977 12.8065 21.1555 12.5288 20.8615 12.3281L4.06782 0.822868C3.75663 0.605769 3.3969 0.483289 3.02656 0.468349C2.65622 0.453409 2.28901 0.546563 1.96366 0.737983C1.63831 0.929404 1.36689 1.21199 1.17804 1.55594C0.989179 1.89989 0.889885 2.29245 0.890629 2.69219Z"
                fill="white"
              />
            </svg>
          </button>
          <p>
            Watch <br /> reviews
          </p>
        </div>

        <div className={"flex gap-7 xl:gap-14"}>
          {features.map((obj, idx) => (
            <div key={idx} className={styles.feature}>
              <h4>{obj.title}</h4>
              <p>{obj.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={"flex gap-3"}>
        {socials &&
          socials.map((item, idx) => (
            <>
              {item.name === "facebook" && (
                <SocialButton
                  link={item.url}
                  theme={"light"}
                  social={item.name}
                />
              )}
              {item.name === "instagram" && (
                <SocialButton
                  link={item.url}
                  theme={"light"}
                  social={item.name}
                />
              )}
              {item.name === "twitter" && (
                <SocialButton
                  link={item.url}
                  theme={"light"}
                  social={item.name}
                />
              )}
              {item.name === "youtube" && (
                <SocialButton
                  link={item.url}
                  theme={"light"}
                  social={item.name}
                />
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default CrewContent;
