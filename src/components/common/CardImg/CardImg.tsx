import React, { CSSProperties, useState, MouseEvent } from "react";
import { Buttom } from "../Button";
import "./CardImgStyle.css";
import { ICardImgProps } from "./types";

export const CardImg = ({
  image,
  textBtn,
  divColor,
  heightImg,
  width,
  mainDivStle,
  onClickRemove,
}: ICardImgProps) => {
  // const { album,  } = useAlbumStore();
  const [displayRemove, setDisplayRemove] = useState("none");

  return (
    <div
      className="cardImg"
      onMouseOver={() => setDisplayRemove("block")}
      onMouseOut={() => setDisplayRemove("none")}
      style={{ ...mainDivStle }}
    >
      <img
        className="image"
        src={image}
        height={heightImg}
        width={width}
        alt="img"
      />
      <div
        className="wrapperBtn"
        style={{ display: `${displayRemove}`, backgroundColor: divColor }}
      >
        <Buttom
          colorText={"white"}
          btnText={textBtn}
          btnVariant="noBorderBtn"
          btnWidht="100%"
          onClickCB={() => onClickRemove(image)}
        />
      </div>
    </div>
  );
};
