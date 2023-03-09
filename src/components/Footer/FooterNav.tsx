import styles from "./Footer.module.scss";
import React from "react";
import Link from "next/link";

const FooterNav: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.subtitle}>Company</li>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/catalog"}>Catalog</Link>
        </li>
        <li>
          <Link href={"/about"}>About US</Link>
        </li>
        <li>
          <Link href={"/journal"}>Journal</Link>
        </li>
      </ul>

      <ul>
        <li className={styles.subtitle}>Help</li>
        <li>
          <Link href={"#"} className={"textGradient"}>
            How to choose a board?
          </Link>
        </li>
        <li>
          <Link href={"/contacts"}>Contacts</Link>
        </li>
        <li>
          <Link href={"/privacy policy"}>Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
