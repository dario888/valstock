import React, { useState } from "react";
import "./ToastMsgStyle.css";

export const ToastMsg = ({
  isActive = false,
  onClickCB,
}: {
  onClickCB: () => void;
  isActive: boolean;
}) => {
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
