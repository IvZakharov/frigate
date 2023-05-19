import styles from "./Header.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Patua_One } from "@next/font/google";

type LogoProps = {
  large?: boolean;
};

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Logo: React.FC<LogoProps> = ({ large }) => {
  return (
    <Link href={"/"}>
      <div className={`${styles.logo} ${large && styles.logoLarge}`}>
        <Image
          src={"/images/logo/logo.svg"}
          alt={"Frigate logo"}
          width={24}
          height={26}
        />
        <h3 className={patuaOne.className}>
          Frigate <small>surfboard</small>{" "}
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
