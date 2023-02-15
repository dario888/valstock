import React, { useEffect, useState } from "react";
import { IAlbum } from "../../features/Album";
import "./AlbumItemStyle.css";

export const AlbumItem = ({
  modalActive,
  onSelectedAlbumItemCB,
  albumObj,
}: {
  modalActive: boolean;
  albumObj: IAlbum;
  onSelectedAlbumItemCB: (album: IAlbum, isAlbumSelected: boolean) => void;
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!modalActive) {
      setActive(false);
    }
  }, [modalActive]);

  useEffect(() => {
    onSelectedAlbumItemCB(albumObj, active);
  }, [active]);

  return (
    <div
      onClick={() => {
        setActive(!active);
      }}
      style={{ color: active ? "black" : "" }}
      className="albumItem"
    >
      {albumObj.name}
    </div>
  );
};
