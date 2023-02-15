import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttom, CardImg, ToastMsg } from "../../components";
import { useAlbumProvider } from "../../features/Album/providers";
// import { useAlbumStore } from "../../features/Album";
import "./AlbumStyle.css";

const AlbumPage = () => {
  const [toastMsg, setToastMsg] = useState(false);
  const { album, removeItemFromAlbumAction } = useAlbumProvider();
  const navigate = useNavigate();

  return (
    <div className="mainAlbum">
      <ToastMsg isActive={toastMsg} onClickCB={() => setToastMsg(false)} />
      <div className="divHeader">
        <div className="title">{album.name}</div>
        <div className="subtitle">Date created: {album.createAt}</div>
      </div>
      <div
        className={`${
          album.value.length > 2 ? "girdContainer" : "containerFlex"
        }`}
      >
        {album.value.map((img, i) => (
          <CardImg
            key={i}
            image={img}
            textBtn="REMOVE"
            divColor="tomato"
            heightImg="190px"
            width="190px"
            onClickRemove={() => removeItemFromAlbumAction(img)}
          />
        ))}
      </div>
      <div className="divButtons">
        <Buttom
          btnText="GO BACK"
          btnVariant="whiteSmBtn"
          onClickCB={() => navigate("/")}
        />
        <Buttom
          btnText="SAVE"
          btnVariant="blackSmBtn"
          onClickCB={() => {
            setToastMsg(true);
          }}
        />
      </div>
    </div>
  );
};

export default AlbumPage;
