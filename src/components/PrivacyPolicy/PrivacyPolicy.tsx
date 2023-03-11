import styles from "./PrivacyPolicy.module.scss";
import React from "react";

import { Patua_One } from "@next/font/google";
import BackLink from "@/components/Shared/BackLink/BackLink";

const patuaOne = Patua_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.privacyPolicy}>
      <div className={"container"}>
        <BackLink slug={"/catalog"} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
