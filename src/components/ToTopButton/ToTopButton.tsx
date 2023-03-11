import styles from "./ToTopButton.module.scss";
import React from "react";
import { useRecoilValue } from "recoil";
import { ToTopButtonState } from "@/atoms/ToTopButtonAtom";
import { motion, AnimatePresence } from "framer-motion";

const ToTopButton: React.FC = () => {
  const buttonState = useRecoilValue(ToTopButtonState);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.button
          className={`${styles.button} ${buttonState.isFixed && styles.fixed}`}
          onClick={scrollToTop}
          key="content"
          initial="close"
          animate="open"
          exit="close"
          variants={{
            open: { opacity: 1 },
            close: { opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          up
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ToTopButton;
