import React, { CSSProperties, useState, MouseEvent } from "react";
import { Buttom } from "../Button";
import "./HomeCardStyle.css";

export const HomeCard = ({
  imageUrl,
  textBtn,
  divColor,
  heightImg,
  width,
  mainDivStle,
  onClickAdd,
  onClickNavigete,
}: {
  imageUrl: string;
  textBtn: string;
  heightImg: string;
  width: string;
  divColor: CSSProperties["color"];
  mainDivStle?: CSSProperties;
  onClickAdd: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickNavigete: () => void;
}) => {
  const [displayRemove, setDisplayRemove] = useState("none");

  return (
    <div
      className="homeCardImg"
      onMouseOver={() => setDisplayRemove("block")}
      onMouseOut={() => setDisplayRemove("none")}
      onClick={onClickNavigete}
      style={{ ...mainDivStle }}
    >
      <img src={imageUrl} height={heightImg} width={width} alt="img" />
      <div
        className="homeWrapperBtn"
        style={{ display: `${displayRemove}`, backgroundColor: divColor }}
      >
        <button className="addBtn" type="button" onClick={(e) => onClickAdd(e)}>
          {textBtn}
        </button>
      </div>
    </div>
  );
};
