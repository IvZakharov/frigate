import styles from "./ProductCard.module.scss";
import React from "react";
import type { ProductCardProps } from "@/@types/productCardProps";
import FavoriteButton from "@/components/Product/Card/FavoriteButton";
import CardSwiper from "@/components/Product/Card/CardSwiper";
import Link from "next/link";

const ProductCardDemo: React.FC<ProductCardProps> = ({
  title,
  status,
  images,
  price,
  length,
  thickness,
  slug,
}) => {
  return (
    <Link
      href={slug}
      className={`${styles.card} ${status === "new" && styles.new} ${
        status === "sale" && styles.sale
      }`}
    >
      <div className={styles.borderWrap}>
        <div className={styles.content}>
          {status === "new" && <span className={styles.newLabel}>new</span>}
          <FavoriteButton />
          <div className={"mb-3"}>
            <CardSwiper images={images} />
          </div>

          <h3 className={styles.title}>{title}</h3>
          <ul className={styles.attributes}>
            <li>
              <h4>long:</h4>
              <span>from 5.7 to 8</span>
            </li>
            <li>
              <h4>Thickness:</h4>
              <span>from 5.7 to 8</span>
            </li>
          </ul>
          <div className={"mt-auto"}>
            {status === "sale" ? (
              <div className={styles.priceBlock}>
                <p className={styles.discount}>
                  20% <span>off</span>
                </p>
                <span className={styles.line}></span>
                <p className={styles.price}>
                  <span className={styles.from}>from </span>
                  <span className={styles.count}>
                    <sup>$</sup>
                    {price.actual}
                  </span>
                </p>
                <span className={styles.line}></span>
                <p className={styles.oldPrice}>${price.old}</p>
              </div>
            ) : (
              <div className={styles.priceBlock}>
                <p className={styles.price}>
                  <span className={styles.from}>from </span>
                  <span className={styles.count}>
                    <sup>$</sup>
                    {price.actual}
                  </span>
                </p>
              </div>
            )}

            <button className={styles.button}>Order now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardDemo;
