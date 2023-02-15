import { ReactNode } from "react";

export interface IImage {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface IInfinitePage {
  nextCursor: number | undefined;
  images: IImage[];
}

export interface IAlbum {
  id: number;
  name: string;
  value: string[];
  createAt: string;
}

export interface IAlbumProvider {
  children?: ReactNode;
}

export type AlbumState = {
  albumsList: IAlbum[];
  album: IAlbum;
};
