import { useState } from "react";

import "./HomeCardStyle.css";
import { IHomeCardProps } from "./types";

export const HomeCard = ({
  imageUrl,
  textBtn,
  divColor,
  heightImg,
  width,
  mainDivStle,
  onClickAdd,
  onClickNavigete,
}: IHomeCardProps) => {
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
