import styles from "./StarRating.module.scss";
import React from "react";
import Image from "next/image";

type StarRatingProps = {
  defaultRating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ defaultRating }) => {
  const [rating, setRating] = React.useState<number>(defaultRating);
  const [hover, setHover] = React.useState(0);

  return (
    <div className={styles.starRating}>
      <p className={styles.title}>Rating</p>
      <div className={styles.stars}>
        {[...Array(5)].map((star, index) => {
          index++;
          return (
            <button
              type="button"
              key={index}
              className={styles.button}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              {index <= rating || index <= hover ? (
                <Image
                  src={"/images/icons/starFill.svg"}
                  alt={"star"}
                  width={16}
                  height={16}
                />
              ) : (
                <Image
                  src={"/images/icons/star.svg"}
                  alt={"star"}
                  width={16}
                  height={16}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
