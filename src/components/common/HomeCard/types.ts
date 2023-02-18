import { CSSProperties, MouseEvent } from "react";

export interface IHomeCardProps {
  imageUrl: string;
  textBtn: string;
  heightImg: string;
  width: string;
  divColor: CSSProperties["color"];
  mainDivStle?: CSSProperties;
  onClickAdd: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickNavigete: () => void;
}
