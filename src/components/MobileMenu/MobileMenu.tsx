import styles from "./MobileMenu.module.scss";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRecoilValue } from "recoil";
import { MenuModalState } from "@/atoms/MenuModalAtom";
import Cta from "@/components/Cta/Cta";
import MobileNav from "@/components/MobileMenu/MobileNav";

const MobileMenu: React.FC = () => {
  const modalState = useRecoilValue(MenuModalState);

  return (
    <AnimatePresence initial={false}>
      {modalState.open && (
        <motion.aside
          className={`${styles.mobileMenu}`}
          key="content"
          initial="close"
          animate="open"
          exit="close"
          variants={{
            open: { translateY: 0 },
            close: { translateY: "100%" },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className={"pt-8"}>
            <div className={"mb-8"}>
              <MobileNav />
            </div>
            <Cta />
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
