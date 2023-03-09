import styles from "./BackLink.module.scss";
import React, { ReactElement } from "react";
import Link from "next/link";

type BackLinkProps = {
  slug: string;
};

const BackLink: React.FC<BackLinkProps> = ({ slug }) => {
  return (
    <Link className={styles.backLink} href={slug}>
      <i>
        <svg
          width="33"
          height="13"
          viewBox="0 0 33 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.67994 6.81086L7.08629 11.2158L6.09497 12.2057L0 6.11077L6.09497 0.0144043L7.08629 1.00573L2.67994 5.41068H32.2031V6.81086H2.67994Z"
            fill="#BFBFBF"
          />
        </svg>
      </i>
      <span>{slug[1].toUpperCase() + slug.slice(2)}</span>
    </Link>
  );
};

export default BackLink;
