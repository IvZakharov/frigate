import styles from "./ProductCard.module.scss";
import React from "react";
import Image from "next/image";

const FavoriteButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <button
      className={styles.favoriteButton}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <Image
        src={
          isFavorite ? "/images/icons/starFill.svg" : "/images/icons/star.svg"
        }
        alt={"star icon"}
        width={16}
        height={16}
      />
    </button>
  );
};

export default FavoriteButton;
