import styles from "./ProductPhins.module.scss";
import React from "react";
import Image from "next/image";

type ProductPhinsProps = {
  phins: string[];
};

const ProductPhins: React.FC<ProductPhinsProps> = ({ phins }) => {
  return (
    <ul className={styles.phins}>
      {phins.map((phin, idx) => (
        <li key={idx}>
          <Image src={phin} alt={"phins"} width={50} height={50} />
        </li>
      ))}
    </ul>
  );
};

export default ProductPhins;
