import styles from "./ProductVolume.module.scss";
import React from "react";

type ProductVolumeProps = {
  volume: string[];
};

const ProductVolume: React.FC<ProductVolumeProps> = ({ volume }) => {
  return (
    <ul className={styles.volume}>
      {volume.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default ProductVolume;
