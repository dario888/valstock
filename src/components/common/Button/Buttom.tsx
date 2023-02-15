import { CSSProperties } from "react";
import "./ButtonStyle.css";
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

export const Buttom = ({
  btnText,
  btnVariant,
  colorText,
  onClickCB,
  btnWidht,
  btnDisabled = false,
  btnType = "button",
}: IButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={btnDisabled}
      style={{ color: colorText, width: btnWidht }}
      className={btnVariant}
      onClick={onClickCB}
    >
      {btnText}
    </button>
  );
};
