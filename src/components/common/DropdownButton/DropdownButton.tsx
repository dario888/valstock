import { isEmpty } from "lodash";
import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAlbum } from "../../../features/Album";
import "./DropdownButton.css";

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

export const DropdownButton = ({
  content,
  btnName,
  btnVariant,
  onClickItemCB,
}: IDropdownButtonProps) => {
  const [btnDisplay, setBtnDisplay] = useState(false);
  return (
    <div className="dropdown">
      <button className={btnVariant} onClick={() => setBtnDisplay(!btnDisplay)}>
        {btnName}
      </button>
      <div
        className="dropdownContent"
        // onFocus={() => setBtnDisplay("block")}
        // onBlur={() => setBtnDisplay("none")}
        style={{ display: btnDisplay ? "block" : "none" }}
      >
        {content.map((a, i) => (
          <div
            key={i}
            onClick={(e) => {
              onClickItemCB(a.id);
              setBtnDisplay(false);
            }}
            className="contentItems"
          >
            {a.name}
          </div>
        ))}
      </div>
    </div>
  );
};
