export type TDropdownBtnVariant = "myAlbumBtn" | "downloadBtn";
export interface ISlelectItem {
  id: number;
  name: string;
  value: string[];
}
export interface IDropdownButtonProps {
  content: ISlelectItem[];
  btnName: string;
  btnVariant: TDropdownBtnVariant;
  onClickItemCB: (id: number) => void;
}
