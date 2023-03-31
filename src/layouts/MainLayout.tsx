import Head from "next/head";
import React, { ReactElement } from "react";
import { useRouter } from "next/router";

//components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import ToTopButton from "@/components/ToTopButton/ToTopButton";
import Navbar from "@/components/Navbar/Navbar";

//recoil
import { useRecoilState } from "recoil";
import { ToTopButtonState } from "@/atoms/ToTopButtonAtom";
import { NavbarState } from "@/atoms/NavbarAtom";
import { MenuModalState } from "@/atoms/MenuModalAtom";

//utils
import { checkSlug } from "@/Utils/checkSlug";

type Page = {
  children: ReactElement;
};

export const MainLayout: React.FC<Page> = ({ children }) => {
  const router = useRouter();
  const [toTopState, setToTopState] = useRecoilState(ToTopButtonState);
  const [navbarState, setNavbarState] = useRecoilState(NavbarState);
  const [menuModalState, setMenuModalState] = useRecoilState(MenuModalState);

  React.useEffect(() => {
    setToTopState((prev) => ({
      ...prev,
      isFixed: checkSlug(router.asPath, ["/", "/journal", "/about-us"]),
    }));

    setNavbarState((prev) => ({
      ...prev,
      isSticky: router.asPath !== "/catalog",
    }));

    setMenuModalState((prev) => ({
      ...prev,
      open: false,
    }));
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>{"Frigate"}</title>
        <meta name="description" content={""} />
        <meta name="keywords" content={"keywords"} />
        <meta property="og:image" content="/img/head/meta.jpg" />
      </Head>
      <Header />
      <Navbar />
      <div className="main">{children}</div>

      <div className={"flex justify-end relative"}>
        <ToTopButton />
      </div>
      <Footer />
      <MobileMenu />
    </>
  );
};
