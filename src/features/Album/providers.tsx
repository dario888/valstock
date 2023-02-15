import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { IAlbum, IAlbumProvider, IImage } from "./types";

export interface IAlbumContext {
  albumsList: IAlbum[];
  album: IAlbum;
  imageDetail: IImage;
  setAlbum: Dispatch<SetStateAction<IAlbum>>;
  setAlbumList: Dispatch<SetStateAction<IAlbum[]>>;
  setImageDetail: Dispatch<SetStateAction<IImage>>;
  removeItemFromAlbumAction: (newImg: string) => void;
  setAddAlbumAction: (newAlbum: IAlbum) => void;
  addImgToAlbumsAction: (selectedAlbums: IAlbum[]) => void;
  getAlbumFromListAction: (id: number) => void;
  setImageDetailAction: (imageDetail: IImage) => void;
}

const AlbumContext = createContext<IAlbumContext>({} as IAlbumContext);

export const AlbumProvider = ({ children }: IAlbumProvider) => {
  const [albumsList, setAlbumList] = useState<IAlbum[]>([
    { id: 1, name: "album 1", value: ["img1", "img2"], createAt: "sdad" },
  ]);
  const [album, setAlbum] = useState<IAlbum>({
    id: 1,
    name: "album 1",
    value: [
      "https://picsum.photos/id/0/5000/3333",
      "https://picsum.photos/id/10/2500/1667",
      "https://picsum.photos/id/11/2500/1667",
      "https://picsum.photos/id/12/2500/1667",
      "https://picsum.photos/id/13/2500/1667",
      "https://picsum.photos/id/20/3670/2462",
      "https://picsum.photos/id/24/4855/1803",
      "https://picsum.photos/id/23/3887/4899",
      "https://picsum.photos/id/21/3008/2008",
    ],
    createAt: "29th November 2021",
  });
  const [imageDetail, setImageDetail] = useState<IImage>({} as IImage);

  const removeItemFromAlbumAction = (newImg: string) => {
    setAlbum({
      ...album,
      value: album.value.filter((img) => img !== newImg),
    });
  };

  const setAddAlbumAction = (newAlbum: IAlbum) => {
    setAlbumList([...albumsList, newAlbum]);
  };

  const setImageDetailAction = (imageDetail: IImage) => {
    setImageDetail(imageDetail);
  };

  const addImgToAlbumsAction = (selectedAlbums: IAlbum[]) => {
    const updatedAlbums = selectedAlbums.map((album) => ({
      ...album,
      value: album.value.concat(imageDetail.download_url),
    }));

    const albumsData = albumsList.map((a) => {
      const updatedAlbum = updatedAlbums.find((ua) => ua.id === a.id);
      return updatedAlbum ?? a;
    });
    setAlbumList(albumsData);
  };

  const getAlbumFromListAction = (id: number) => {
    setAlbum(albumsList.find((a) => a.id === id) as IAlbum);
  };

  const value = useMemo(
    () => ({
      album,
      albumsList,
      setAlbumList,
      setImageDetail,
      setAlbum,
      setAddAlbumAction,
      removeItemFromAlbumAction,
      addImgToAlbumsAction,
      getAlbumFromListAction,
      setImageDetailAction,
      imageDetail,
    }),
    [album, albumsList, imageDetail]
  );

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};

export const useAlbumProvider = () => useContext(AlbumContext);
