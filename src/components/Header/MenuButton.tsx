import styles from "./Header.module.scss";
import React from "react";
import { useRecoilState } from "recoil";
import { MenuModalState } from "@/atoms/MenuModalAtom";

const MenuButton: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(MenuModalState);

  const handleClick = () => {
    setModalState((prev) => ({
      ...prev,
      open: !modalState.open,
    }));
  };

  return (
    <button
      className={`${styles.menuBtn} ${modalState.open && styles.active}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
export default MenuButton;
