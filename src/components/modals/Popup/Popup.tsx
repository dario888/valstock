import { isEmpty } from "lodash";
import { ChangeEvent, useState } from "react";
import { IAlbum, useAlbumProvider } from "../../../features/Album";
import { createAtDate } from "../../../utils";
import { AlbumItem } from "../../AlbumItem";
import { Buttom } from "../../common";
import "./PopupStyle.css";
import { IPopupProps } from "./types";

export const Popup = ({
  isActive = false,
  onClosePopupCB,
  onToastCB,
}: IPopupProps) => {
  const { addAlbumToListAction, albumsList, addImgToAlbumsAction } =
    useAlbumProvider();
  const [isCreateAlbum, setIsCreateAlbum] = useState(true);
  const [albumName, setAlbumName] = useState("");
  const [selectedAlbums, setSelectedAlbums] = useState<IAlbum[]>([]);

  const onChangeAlbum = (e: ChangeEvent<HTMLInputElement>) => {
    setAlbumName(e.target.value);
  };

  const closePopupHendler = () => {
    onClosePopupCB();
    setSelectedAlbums([]);
    setIsCreateAlbum(true);
  };

  const selectedAlbumHendler = (album: IAlbum, isAlbumSelected: boolean) => {
    if (isAlbumSelected) {
      setSelectedAlbums([...selectedAlbums, album]);
    } else {
      setSelectedAlbums(selectedAlbums.filter((a) => a.id !== album.id));
    }
  };

  const onClikSaveImage = (albumNameParam: string) => {
    onClosePopupCB();

    if (isCreateAlbum) {
      addAlbumToListAction({
        id: Math.round(Math.random() * 1000),
        name: albumNameParam,
        value: [],
        createAt: createAtDate(),
      });
      setAlbumName("");
    }

    if (!isEmpty(selectedAlbums)) {
      addImgToAlbumsAction(selectedAlbums);
      setSelectedAlbums([]);
    }

    setTimeout(() => {
      onToastCB();
    }, 700);
  };

  return (
    <>
      <div
        className="modalPopup"
        style={{ display: isActive ? "block" : "none" }}
        onClick={closePopupHendler}
      >
        {" "}
      </div>
      <div
        className={`popup ${isActive ? "active" : null}`}
        style={{ marginTop: 300, marginLeft: 400 }}
      >
        <div className="topButns">
          <Buttom
            btnText="CREATE NEW ALBUM"
            btnVariant="noBorderBtn"
            onClickCB={() => {
              if (!isCreateAlbum) setIsCreateAlbum(!isCreateAlbum);
            }}
            colorText={isCreateAlbum ? "black" : "#9D9D9D"}
          />
          <Buttom
            btnText="ADD TO EXISTING"
            btnVariant="noBorderBtn"
            onClickCB={() => {
              if (isCreateAlbum) setIsCreateAlbum(!isCreateAlbum);
            }}
            colorText={isCreateAlbum ? "#9D9D9D" : "black"}
          />
        </div>
        <form>
          <div className="albums">
            {isCreateAlbum ? (
              <div>
                <input
                  className="inputAlbum"
                  placeholder="Enter title here"
                  onChange={onChangeAlbum}
                  type={"text"}
                  value={albumName}
                />
              </div>
            ) : (
              <div className="albumsList">
                {albumsList.map((album) => (
                  <AlbumItem
                    onSelectedAlbumItemCB={selectedAlbumHendler}
                    modalActive={isActive}
                    key={album.id}
                    albumObj={album}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="bottomButns">
            <Buttom
              btnText="CANCEL"
              btnVariant="whiteSmBtn"
              onClickCB={closePopupHendler}
            />
            <Buttom
              btnType="button"
              btnDisabled={isEmpty(albumName) && isEmpty(selectedAlbums)}
              btnText="SAVE"
              btnVariant="blackSmBtn"
              onClickCB={() => onClikSaveImage(albumName)}
            />
          </div>
        </form>
      </div>
    </>
  );
};
