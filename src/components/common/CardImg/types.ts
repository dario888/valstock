import { CSSProperties } from "react";

export interface ICardImgProps {
  image: string;
  textBtn: string;
  heightImg: string;
  width: string;
  divColor: CSSProperties["color"];
  mainDivStle?: CSSProperties;
  onClickRemove: (newImg: string) => void;
}
