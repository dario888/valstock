import { createContext, useContext, useMemo, useState } from "react";
import { IAlbum, IAlbumProvider, IImage } from "./types";

export interface IAlbumContext {
  albumsList: IAlbum[];
  album: IAlbum;
  imageDetail: IImage;
  removeItemFromAlbumAction: (newImg: string) => void;
  addAlbumToListAction: (newAlbum: IAlbum) => void;
  addImgToAlbumsAction: (selectedAlbums: IAlbum[]) => void;
  getAlbumFromListAction: (id: number) => void;
  setImageDetailAction: (imageDetail: IImage) => void;
}

const AlbumContext = createContext<IAlbumContext>({} as IAlbumContext);

export const AlbumProvider = ({ children }: IAlbumProvider) => {
  const [albumsList, setAlbumList] = useState<IAlbum[]>([]);
  const [album, setAlbum] = useState<IAlbum>({} as IAlbum);
  const [imageDetail, setImageDetail] = useState<IImage>({} as IImage);

  const removeItemFromAlbumAction = (newImg: string) => {
    const newALbum = {
      ...album,
      value: album.value.filter((img) => img !== newImg),
    };
    setAlbum(newALbum);

    setAlbumList(albumsList.map((a) => (a.id === newALbum.id ? newALbum : a)));
  };

  const addAlbumToListAction = (newAlbum: IAlbum) => {
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

    const albumsData = albumsList.map((currentAlbum) => {
      const updatedAlbum = updatedAlbums.find(
        (updAlbum) => updAlbum.id === currentAlbum.id
      );
      return updatedAlbum ?? currentAlbum;
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
      imageDetail,
      addAlbumToListAction,
      removeItemFromAlbumAction,
      addImgToAlbumsAction,
      getAlbumFromListAction,
      setImageDetailAction,
    }),
    [album, albumsList, imageDetail]
  );

  return (
    <AlbumContext.Provider value={value}>{children}</AlbumContext.Provider>
  );
};

export const useAlbumProvider = () => useContext(AlbumContext);
