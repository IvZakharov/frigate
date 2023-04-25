import styles from "./DemoProductPrice.module.scss";
import React from "react";

type ProductPriceProps = {
  price: { actual: string; old: string };
  status?: string;
};

const DemoProductPrice: React.FC<ProductPriceProps> = ({ price, status }) => {
  return (
    <>
      <div className={styles.priceBlock}>
        <div className={styles.price}>
          <p className={styles.actual}>
            <sup>$</sup>
            {price.actual}
          </p>
          {status === "sale" && (
            <div className={"flex flex-col items-center xl:mr-4"}>
              <p className={styles.discount}>
                <b>20%</b> off
              </p>
              <p className={styles.old}>${price.old}</p>
            </div>
          )}
        </div>
        <button className={styles.button}>
          <i>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.42578 5.97266H20.4258L19.3702 20.2227H2.48134L1.42578 5.97266Z"
                stroke="white"
                strokeWidth="2.11111"
                strokeLinejoin="round"
              />
              <path
                d="M6.70312 8.08377V1.22266H15.1476V8.08377"
                stroke="white"
                strokeWidth="2.11111"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.70312 16.0005H15.1476"
                stroke="white"
                strokeWidth="2.11111"
                strokeLinecap="round"
              />
            </svg>
          </i>
          <span>Order now</span>
        </button>
      </div>
    </>
  );
};

export default DemoProductPrice;
