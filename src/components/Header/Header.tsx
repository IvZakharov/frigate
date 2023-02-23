import styles from "./Header.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Patua_One } from "@next/font/google";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Header: React.FC = () => {
  return (
    <div className={"container"}>
      <header className={styles.header}>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image
              src={"images/logo/logo.svg"}
              alt={"Frigate logo"}
              width={24}
              height={26}
            />
            <span className={patuaOne.className}>Frigate</span>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
