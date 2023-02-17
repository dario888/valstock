import { CSSProperties } from "react";

export type TBtnVariant =
  | "noBorderBtn"
  | "whiteXlBtn"
  | "whiteSmBtn"
  | "logoutBtn"
  | "blackSmBtn";
export interface IButtonProps {
  btnText: string;
  colorText?: CSSProperties["color"];
  btnVariant: TBtnVariant;
  btnDisabled?: boolean;
  btnWidht?: string;
  onClickCB: () => void;
  btnType?: "submit" | "reset" | "button";
}
