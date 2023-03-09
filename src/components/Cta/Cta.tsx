import styles from "./Cta.module.scss";
import React from "react";
import Image from "next/image";

const Cta: React.FC = () => {
  return (
    <div className={`${styles.cta}`}>
      <div className={styles.container}>
        <div className={styles.bgImage}>
          <Image
            alt="Mountains"
            src={"/images/cta/mobileMenu.png"}
            quality={100}
            fill
            sizes="25vw"
            style={{
              objectFit: "contain",
              objectPosition: "left",
            }}
          />
        </div>

        <p className={styles.text}>Contact us if you want a custom board</p>
        <button className={"buttonGradient buttonGradient--mobileMenu"}>
          <i>
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5424 2.92004C11.873 2.24213 11.0756 1.70463 10.1967 1.3389C9.31789 0.973164 8.37521 0.786515 7.42367 0.789839C3.43674 0.789839 0.187323 4.04737 0.187323 8.04425C0.187323 9.3253 0.523218 10.5698 1.1512 11.6678L0.128906 15.4304L3.96249 14.4202C5.02129 14.9985 6.21152 15.306 7.42367 15.306C11.4106 15.306 14.66 12.0485 14.66 8.05157C14.66 6.11169 13.9079 4.28894 12.5424 2.92004ZM7.42367 14.0762C6.34296 14.0762 5.28416 13.7834 4.3568 13.2343L4.13774 13.1026L1.8595 13.7028L2.46557 11.4775L2.31953 11.2505C1.71911 10.2894 1.4003 9.17834 1.39947 8.04425C1.39947 4.72084 4.10123 2.01233 7.41636 2.01233C9.02282 2.01233 10.5343 2.64187 11.6662 3.78384C12.2266 4.34308 12.6707 5.00828 12.9728 5.74087C13.2749 6.47345 13.4289 7.25886 13.426 8.05157C13.4406 11.375 10.7388 14.0762 7.42367 14.0762ZM10.7242 9.56687C10.5416 9.47903 9.6508 9.03981 9.49015 8.97393C9.3222 8.91537 9.20537 8.88609 9.08123 9.06177C8.9571 9.24478 8.6139 9.65472 8.51167 9.77184C8.40944 9.89629 8.29991 9.91093 8.11736 9.81576C7.93481 9.72792 7.35065 9.53027 6.66425 8.91537C6.1239 8.43223 5.7661 7.83928 5.65657 7.65628C5.55434 7.47327 5.64196 7.3781 5.73689 7.28294C5.81721 7.20242 5.91944 7.07065 6.00707 6.96817C6.09469 6.86568 6.1312 6.78516 6.18962 6.66804C6.24803 6.54359 6.21883 6.44111 6.17501 6.35326C6.1312 6.26542 5.7661 5.37234 5.62006 5.00633C5.47402 4.65495 5.32067 4.69888 5.21114 4.69156H4.86064C4.73651 4.69156 4.54665 4.73548 4.37871 4.91849C4.21806 5.10149 3.75073 5.54071 3.75073 6.43379C3.75073 7.32686 4.40061 8.19066 4.48824 8.30778C4.57586 8.43223 5.7661 10.2623 7.57701 11.0456C8.00783 11.2359 8.34373 11.3457 8.6066 11.4262C9.03742 11.5653 9.43173 11.5434 9.74572 11.4994C10.0962 11.4482 10.8191 11.0602 10.9652 10.6356C11.1185 10.2111 11.1185 9.85236 11.0674 9.77184C11.0163 9.69132 10.9067 9.65472 10.7242 9.56687Z"
                fill="white"
              />
            </svg>
          </i>
          <span>custom board</span>
        </button>
      </div>
    </div>
  );
};

export default Cta;
