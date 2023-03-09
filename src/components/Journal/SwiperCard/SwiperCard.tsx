import styles from "./SwiperCard.module.scss";
import React from "react";
import Image from "next/image";
import { JournalCardProps } from "@/@types/journalCardProps";
import Link from "next/link";

const SwiperCard: React.FC<JournalCardProps> = ({
  title,
  thumbnail,
  description,
  date,
}) => {
  const [imageIsVisible, setImageIsVisible] = React.useState(false);

  return (
    <article className={styles.card}>
      {thumbnail && (
        <div
          className={`${styles.image} ${imageIsVisible && styles.imageOpen}`}
        >
          <Image
            alt={title}
            src={thumbnail}
            quality={80}
            fill
            sizes="(max-width: 768px) 75vw,
              (max-width: 1200px) 40vw,
              33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}

      <p className={styles.date}>{date}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={"flex items-center justify-between"}>
        <Link href={"#"} className={styles.button}>
          <span>Read</span>
          <i>
            <svg
              width="17"
              height="7"
              viewBox="0 0 17 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9165 3.66996L12.6983 5.88746L13.1973 6.3858L16.2656 3.31752L13.1973 0.248535L12.6983 0.74758L14.9165 2.96509H0.0541706V3.66996H14.9165Z"
                fill="#333333"
              />
            </svg>
          </i>
        </Link>

        {thumbnail && (
          <button
            className={`${styles.imageIcon} ${
              imageIsVisible && styles.imageIconActive
            } iconButton`}
            onClick={() => setImageIsVisible(!imageIsVisible)}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 2.31738V16.3174H2.5V2.31738H16.5ZM16.5 0.317383H2.5C1.4 0.317383 0.5 1.21738 0.5 2.31738V16.3174C0.5 17.4174 1.4 18.3174 2.5 18.3174H16.5C17.6 18.3174 18.5 17.4174 18.5 16.3174V2.31738C18.5 1.21738 17.6 0.317383 16.5 0.317383ZM11.64 9.17738L8.64 13.0474L6.5 10.4574L3.5 14.3174H15.5L11.64 9.17738Z"
                fill="#BFBFBF"
              />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
};

export default SwiperCard;
