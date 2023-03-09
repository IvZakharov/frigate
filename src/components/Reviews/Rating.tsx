import styles from "./Reviews.module.scss";
import React from "react";
import Image from "next/image";
import Title from "@/components/Shared/Title/Title";
import { reviews } from "@/data/reviews";

type StarRatingProps = {
  rating: number;
};

const ReviewRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className={"flex items-center gap-1"}>
      {[...Array(5)].map((star, index) => {
        index++;
        return (
          <button type="button" key={index} className={styles.button}>
            {index <= rating ? (
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
  );
};

export default ReviewRating;
