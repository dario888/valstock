import React, { CSSProperties, useState, MouseEvent } from "react";
import { Buttom } from "../Button";
import "./CardImgStyle.css";

export const CardImg = ({
  image,
  textBtn,
  divColor,
  heightImg,
  width,
  mainDivStle,
  onClickRemove,
}: {
  image: string;
  textBtn: string;
  heightImg: string;
  width: string;
  divColor: CSSProperties["color"];
  mainDivStle?: CSSProperties;
  onClickRemove: (newImg: string) => void;
}) => {
  // const { album,  } = useAlbumStore();
  const [displayRemove, setDisplayRemove] = useState("none");

  return (
    <div
      className="cardImg"
      onMouseOver={() => setDisplayRemove("block")}
      onMouseOut={() => setDisplayRemove("none")}
      style={{ ...mainDivStle }}
    >
      <img src={image} height={heightImg} width={width} alt="img" />
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
