import "./ToastMsgStyle.css";
import { IToastMsgProps } from "./types";

export const ToastMsg = ({ isActive = false, onClickCB }: IToastMsgProps) => {
  return (
    <>
      <div
        className="toast"
        style={{ display: isActive ? "block" : "none" }}
        onClick={onClickCB}
      ></div>
      <div className={`text ${isActive ? "active" : null}`}>
        This is a success message!
      </div>
    </>
  );
};
