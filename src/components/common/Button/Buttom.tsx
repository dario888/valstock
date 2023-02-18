import "./ButtonStyle.css";
import { IButtonProps } from "./types";

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
