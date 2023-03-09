import styles from "./ProductInfo.module.scss";
import React from "react";

type ProductInfoProps = {
  title: string;
  description: string;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ title, description }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </>
  );
};

export default ProductInfo;
