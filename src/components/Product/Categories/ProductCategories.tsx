import styles from "./ProductCategories.module.scss";
import React from "react";

type ProductCategoriesProps = {
  categories: string[];
};

const ProductCategories: React.FC<ProductCategoriesProps> = ({
  categories,
}) => {
  return (
    <ul className={styles.categories}>
      {categories.map((item, idx) => (
        <li key={idx}>
          <span>{item}</span>
          <span> {idx === categories.length - 1 ? "" : "-"}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductCategories;
