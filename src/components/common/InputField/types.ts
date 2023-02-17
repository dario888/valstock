import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface IInputFiled {
  inputType: HTMLInputTypeAttribute;
  inputName: string;
  labelName: string;
  inputValue: string;
  errorMsg?: string;
  onChangeCB: (e: ChangeEvent<HTMLInputElement>) => void;
}
