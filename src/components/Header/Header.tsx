import styles from "./Header.module.scss";
import React from "react";
import Logo from "@/components/Header/Logo";
import MenuButton from "@/components/Header/MenuButton";
import SocialButton from "@/ui/SocialButton/SocialButton";
import SearchInput from "@/ui/SearchInput/SearchInput";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.wrapper}>
          <Logo />
          <div className={"hidden md:block flex-1"}>
            <SearchInput />
          </div>
          <div className={"hidden md:flex items-center gap-4 flex-grow-0"}>
            <SocialButton link={"#"} theme={"light"} social={"facebook"} />
            <SocialButton link={"#"} theme={"light"} social={"instagram"} />
            <SocialButton link={"#"} theme={"light"} social={"twitter"} />
            <SocialButton link={"#"} theme={"light"} social={"youtube"} />
          </div>

          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
