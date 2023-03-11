import { atom } from "recoil";

export interface NavbarState {
  isSticky: boolean;
}

const defaultNavbarState: NavbarState = {
  isSticky: true,
};

export const NavbarState = atom<NavbarState>({
  key: "NavbarState",
  default: defaultNavbarState,
});
