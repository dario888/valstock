import React, {
  ChangeEvent,
  CSSProperties,
  HTMLInputTypeAttribute,
} from "react";
import "./InputFieldStyle.css";

export interface IInputFiled {
  inputType: HTMLInputTypeAttribute;
  inputName: string;
  labelName: string;
  inputValue: string;
  errorMsg?: string;
  onChangeCB: (e: ChangeEvent<HTMLInputElement>) => void;
}
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
