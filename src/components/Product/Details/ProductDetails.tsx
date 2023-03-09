import styles from "./ProductDetails.module.scss";
import React from "react";
import Image from "next/image";

type ProductDetail = {
  title: string;
  image: string;
};

type ProductDetailsProps = {
  details: ProductDetail[];
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ details }) => {
  return (
    <ul className={styles.details}>
      {details.map((obj, idx) => (
        <li key={idx}>
          <Image src={obj.image} alt={obj.title} width={20} height={20} />
          <p>{obj.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductDetails;
