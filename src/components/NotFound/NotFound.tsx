import styles from "./NotFound.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={"container"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-10 px-12"
          }
        >
          <div>
            <p className={styles.subtitle}>error</p>
            <h1 className={styles.title}>404</h1>
            <p className={styles.text}>
              We can't seem to find the page you're looking for. Error code: 404
            </p>

            <div className={"flex gap-2.5"}>
              <Link className={`button button--primary`} href={"/"}>
                Go to home
              </Link>
              <Link className={`button button--secondary`} href={"/catalog"}>
                Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={"md:hidden"}>
        <Image
          alt="serf boards"
          src={"/images/notFound/mobile.png"}
          width={500}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className={`hidden md:inline-flex ${styles.image}`}>
        <Image
          alt="serf boards"
          src={"/images/notFound/desk.png"}
          width={500}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;
