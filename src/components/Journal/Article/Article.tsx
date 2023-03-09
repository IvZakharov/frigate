import styles from "./Article.module.scss";
import React from "react";
import Image from "next/image";
import type { ArticleProps } from "@/@types/articleProps";
import Link from "next/link";

const Article: React.FC<ArticleProps> = ({
  title,
  thumbnail,
  content,
  date,
}) => {
  return (
    <article className={styles.article}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.date}>{date}</p>
      <div className={styles.image}>
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
      <p className={styles.content}>{content}</p>
    </article>
  );
};

export default Article;
