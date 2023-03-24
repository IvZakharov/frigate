import styles from "./Reviews.module.scss";
import React from "react";
import ReviewRating from "@/components/Reviews/Rating";
import SocialButton from "@/ui/SocialButton/SocialButton";

import { Patua_One } from "@next/font/google";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

type Social = {
  name: string;
  url: string;
};

type ReviewContentProps = {
  rating: number;
  authorName: string;
  authorQuote: string;
  socials: Social[];
};

const ReviewContent: React.FC<ReviewContentProps> = ({
  rating,
  authorName,
  authorQuote,
  socials,
}) => {
  const [quoteIsOpen, setQuoteIsOpen] = React.useState(false);
  const [bodyHeight, setBodyHeight] = React.useState<number>();
  const quoteRef = React.useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    if (quoteRef.current) {
      setBodyHeight(quoteRef.current.scrollHeight);
    }
  }, [bodyHeight]);

  return (
    <div className={styles.content}>
      <div className={"flex items-center mb-4 "}>
        <p className={"text mr-4"}>Author&apos;s rating</p>
        <ReviewRating rating={rating} />
      </div>
      <h4 className={`${styles.authorName} ${patuaOne.className}`}>
        {authorName}
      </h4>

      <p
        className={styles.authorQuote}
        style={{ maxHeight: quoteIsOpen ? bodyHeight : 45 }}
        ref={quoteRef}
      >
        {authorQuote}
      </p>
      <button
        className={styles.seeMore}
        onClick={() => setQuoteIsOpen(!quoteIsOpen)}
      >
        <span>See more</span>

        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ rotate: quoteIsOpen ? "180deg" : "0deg" }}
        >
          <path
            d="M10.2922 1.31105L5.63786 6.32842C5.58245 6.38797 5.52243 6.43005 5.45778 6.45467C5.39314 6.47968 5.32388 6.49219 5.25 6.49219C5.17612 6.49219 5.10686 6.47968 5.04222 6.45467C4.97757 6.43005 4.91755 6.38797 4.86214 6.32842L0.193931 1.31105C0.0646435 1.17209 -2.40141e-07 0.998391 -2.49253e-07 0.789955C-2.58364e-07 0.581518 0.0692609 0.402858 0.207783 0.253974C0.346306 0.105091 0.507915 0.0306496 0.692612 0.0306496C0.877308 0.0306496 1.03892 0.105091 1.17744 0.253974L5.25 4.63115L9.32256 0.253974C9.45185 0.115017 9.61105 0.0455371 9.80018 0.045537C9.98968 0.045537 10.1537 0.119979 10.2922 0.268862C10.4307 0.417746 10.5 0.591443 10.5 0.789954C10.5 0.988465 10.4307 1.16216 10.2922 1.31105Z"
            fill="#333333"
          />
        </svg>
      </button>
      <div className={"flex gap-3"}>
        {socials &&
          socials.map((item, idx) => (
            <>
              {item.name === "facebook" && (
                <SocialButton
                  link={item.url}
                  theme={"light"}
                  social={item.name}
                />
              )}
              {item.name === "instagram" && (
                <SocialButton
                  link={item.url}
                  theme={"light"}
                  social={item.name}
                />
              )}
              {item.name === "twitter" && (
                <SocialButton
                  link={item.url}
                  theme={"light"}
                  social={item.name}
                />
              )}
              {item.name === "youtube" && (
                <SocialButton
                  link={item.url}
                  theme={"light"}
                  social={item.name}
                />
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default ReviewContent;
