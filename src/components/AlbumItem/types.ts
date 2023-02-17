import { IAlbum } from "../../features/Album";

export interface IAlbumItemProps {
  modalActive: boolean;
  albumObj: IAlbum;
  onSelectedAlbumItemCB: (album: IAlbum, isAlbumSelected: boolean) => void;
}
