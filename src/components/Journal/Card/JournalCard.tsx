import styles from "./JournalCard.module.scss";
import React from "react";
import Image from "next/image";
import { JournalCardProps } from "@/@types/journalCardProps";
import Link from "next/link";

const JournalCard: React.FC<JournalCardProps> = ({
  title,
  thumbnail,
  description,
  date,
}) => {
  return (
    <Link href={"/journal/slug"}>
      <article className={styles.card}>
        <div className={styles.image}>
          {thumbnail && (
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
          )}
        </div>

        <p className={styles.date}>{date}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>
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
        </button>
      </article>
    </Link>
  );
};

export default JournalCard;
