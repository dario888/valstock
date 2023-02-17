import React, {
  ChangeEvent,
  CSSProperties,
  HTMLInputTypeAttribute,
} from "react";
import "./InputFieldStyle.css";
import { IInputFiled } from "./types";

export const InputField = ({
  inputType,
  inputName,
  labelName,
  inputValue = "",
  errorMsg,
  onChangeCB,
}: IInputFiled) => {
  return (
    <div className="inputMainDiv">
      <label className="inputLabel">{labelName}</label>
      <input
        onChange={onChangeCB}
        className="inputField"
        type={inputType}
        name={inputName}
        value={inputValue}
      />
      <div className="errorMsg">{errorMsg}</div>
    </div>
  );
};
