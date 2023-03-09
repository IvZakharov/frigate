import styles from "./Header.module.scss";
import React from "react";
import Link from "next/link";

const MainNav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>
            <svg
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0697 7.85204L19 9.82624L17.6627 11.194L9.5 2.84559L1.33732 11.194L0 9.82624L9.5 0.110107L14.5465 5.2714V2.69075H17.0697V7.85204ZM9.5 4.67785L17.0697 12.4069V20.1101H1.93028V12.4069L9.5 4.67785ZM12.0232 18.8198V12.3682H6.97676V18.8198H12.0232Z"
                fill="#BFBFBF"
              />
            </svg>
          </Link>
        </li>
        <li>
          {" "}
          <Link href={"/catalog"}>Catalog</Link>
        </li>
        <li>
          {" "}
          <Link href={"/journal"}>Journal</Link>{" "}
        </li>
        <li>
          {" "}
          <Link href={"/about"}>About US</Link>
        </li>
        <li>
          {" "}
          <Link href={"/contacts"}>Contacts</Link>
        </li>
        <li>
          {" "}
          <Link href={"#"} className={"textGradient"}>
            How to choose a board ?
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
