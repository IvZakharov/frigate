import styles from "./ProductColors.module.scss";
import React from "react";
import Image from "next/image";

type ProductColorsProps = {
  colors: string[];
};

const ProductColors: React.FC<ProductColorsProps> = ({ colors }) => {
  return (
    <ul className={styles.colors}>
      {colors.map((color, idx) => (
        <li key={idx}>
          <Image
            src={"/images/products/colors.png"}
            alt={color}
            width={50}
            height={50}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductColors;
