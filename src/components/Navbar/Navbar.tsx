import styles from "./Navbar.module.scss";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CtaHeader from "@/components/Cta/CtaHeader";
import { useRecoilValue } from "recoil";
import { NavbarState } from "@/atoms/NavbarAtom";

const Navbar: React.FC = () => {
  const router = useRouter();
  const navbarState = useRecoilValue(NavbarState);

  return (
    <div
      className={`${styles.navbar} ${navbarState.isSticky && styles.sticky}`}
    >
      <div className={"container h-full"}>
        <div className={"md:flex items-center justify-between h-full"}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link
                  href={"/"}
                  className={router.pathname === "/" ? styles.active : ""}
                >
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
                <Link
                  href={"/catalog"}
                  className={
                    router.pathname === "/catalog" ? styles.active : ""
                  }
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  href={"/journal"}
                  className={
                    router.pathname === "/journal" ? styles.active : ""
                  }
                >
                  Journal
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"/about-us"}
                  className={
                    router.pathname === "/about-us" ? styles.active : ""
                  }
                >
                  About US
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={"/contacts"}
                  className={
                    router.pathname === "/contacts" ? styles.active : ""
                  }
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link href={"#"} className={"textGradient"}>
                  How to choose a board ?
                </Link>
              </li>
            </ul>
          </nav>
          <CtaHeader />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
