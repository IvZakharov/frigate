import { atom } from "recoil";

export interface MenuModalState {
  open: boolean;
}

const defaultModalState: MenuModalState = {
  open: false,
};

export const MenuModalState = atom<MenuModalState>({
  key: "MenuModalState",
  default: defaultModalState,
});
