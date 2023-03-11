import { atom } from "recoil";

export interface ToTopState {
  isFixed: boolean;
}

const defaultButtonState: ToTopState = {
  isFixed: true,
};

export const ToTopButtonState = atom<ToTopState>({
  key: "ToTopButtonState",
  default: defaultButtonState,
});
