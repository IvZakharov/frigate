import styles from "./Footer.module.scss";
import React from "react";
import Logo from "@/components/Header/Logo";
import Link from "next/link";
import NewsletterForm from "@/components/Form/NewsletterForm";
import FooterNav from "@/components/Footer/FooterNav";
import SocialButton from "@/ui/SocialButton/SocialButton";
import { getYear } from "@/Utils/getYear";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={"container"}>
          <div className={"md:flex flex-wrap xl:flex-nowrap xl:gap-20"}>
            <div className={"mb-10 pr-6 md:w-1/2 xl:w-1/4"}>
              <div className={"mb-4"}>
                <Logo large />
              </div>
              <p className={`${styles.description} mb-8  max-w-sm`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a Lorem
              </p>

              <Link href={"#"} className={"buttonWhatsapp"}>
                <i>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3.8182C16.0832 2.88982 14.9912 2.15373 13.7876 1.65286C12.5841 1.152 11.2931 0.896388 9.99 0.900939C4.53 0.900939 0.0800002 5.36205 0.0800002 10.8357C0.0800002 12.5901 0.54 14.2943 1.4 15.798L0 20.9509L5.25 19.5674C6.7 20.3594 8.33 20.7805 9.99 20.7805C15.45 20.7805 19.9 16.3193 19.9 10.8457C19.9 8.18909 18.87 5.69287 17 3.8182ZM9.99 19.0963C8.51 19.0963 7.06 18.6953 5.79 17.9434L5.49 17.7629L2.37 18.585L3.2 15.5374L3 15.2266C2.17775 13.9103 1.74114 12.3888 1.74 10.8357C1.74 6.28435 5.44 2.57511 9.98 2.57511C12.18 2.57511 14.25 3.43726 15.8 5.00115C16.5675 5.76702 17.1757 6.67799 17.5894 7.68125C18.0031 8.68451 18.214 9.76011 18.21 10.8457C18.23 15.397 14.53 19.0963 9.99 19.0963ZM14.51 12.9209C14.26 12.8006 13.04 12.1991 12.82 12.1089C12.59 12.0287 12.43 11.9886 12.26 12.2292C12.09 12.4798 11.62 13.0412 11.48 13.2016C11.34 13.372 11.19 13.392 10.94 13.2617C10.69 13.1414 9.89 12.8708 8.95 12.0287C8.21 11.367 7.72 10.555 7.57 10.3044C7.43 10.0537 7.55 9.92341 7.68 9.79309C7.79 9.68281 7.93 9.50236 8.05 9.36201C8.17 9.22166 8.22 9.11139 8.3 8.95099C8.38 8.78056 8.34 8.64022 8.28 8.51992C8.22 8.39962 7.72 7.17657 7.52 6.67532C7.32 6.19412 7.11 6.25427 6.96 6.24425H6.48C6.31 6.24425 6.05 6.3044 5.82 6.55502C5.6 6.80565 4.96 7.40714 4.96 8.63019C4.96 9.85324 5.85 11.0362 5.97 11.1966C6.09 11.367 7.72 13.8732 10.2 14.9459C10.79 15.2066 11.25 15.3569 11.61 15.4672C12.2 15.6577 12.74 15.6276 13.17 15.5675C13.65 15.4973 14.64 14.966 14.84 14.3845C15.05 13.8031 15.05 13.3119 14.98 13.2016C14.91 13.0913 14.76 13.0412 14.51 12.9209Z"
                      fill="#30B302"
                    />
                  </svg>
                </i>
                <span>+0 645 965 89 96</span>
              </Link>
            </div>

            <div
              className={
                "mb-11 pr-6 max-w-sm md:w-1/2 xl:w-1/4 xl:max-w-full xl:order-1"
              }
            >
              <NewsletterForm />
            </div>

            <div className={"md:w-1/2 xl:w-1/2"}>
              <FooterNav />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={"container"}>
          <div className={"md:flex items-center justify-between"}>
            <div className={"flex items-center gap-5 mb-8 md:mb-0 order-1"}>
              <SocialButton link={"#"} theme={"dark"} social={"facebook"} />
              <SocialButton link={"#"} theme={"dark"} social={"instagram"} />
              <SocialButton link={"#"} theme={"dark"} social={"twitter"} />
              <SocialButton link={"#"} theme={"dark"} social={"youtube"} />
            </div>

            <div className={"mb-8 md:mb-0"}>
              <p className={styles.text}>© Copyright {getYear()}</p>
            </div>

            <div>
              <p className={styles.text}>
                Etiam eu turpis molestie, dictum est a, mattis tellus
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
