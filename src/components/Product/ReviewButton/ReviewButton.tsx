import styles from "./ReviewButton.module.scss";
import React from "react";

const ReviewButton: React.FC = () => {
  return (
    <div className={styles.reviewButton}>
      <button>
        <svg
          width="21"
          height="28"
          viewBox="0 0 21 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0156292 2.50274V25.5578C0.0156292 27.3158 1.81053 28.384 3.19282 27.4271L19.9865 15.8996C20.2805 15.6989 20.5227 15.4212 20.6905 15.0924C20.8583 14.7637 20.9463 14.3944 20.9463 14.0191C20.9463 13.6438 20.8583 13.2746 20.6905 12.9458C20.5227 12.617 20.2805 12.3394 19.9865 12.1387L3.19282 0.633415C2.88163 0.416316 2.5219 0.293836 2.15156 0.278896C1.78122 0.263956 1.41401 0.35711 1.08866 0.54853C0.763312 0.739951 0.491894 1.02254 0.303037 1.36649C0.114179 1.71044 0.0148851 2.10299 0.0156292 2.50274Z"
            fill="#333333"
          />
        </svg>
      </button>
      <p>
        Watch <br /> reviews
      </p>
    </div>
  );
};

export default ReviewButton;
