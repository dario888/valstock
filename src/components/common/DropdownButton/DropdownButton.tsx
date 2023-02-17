import { useState } from "react";
import { useAlbumProvider } from "../../../features/Album";

import "./DropdownButton.css";
import { IDropdownButtonProps } from "./types";

export const DropdownButton = ({
  content,
  btnName,
  btnVariant,
  onClickItemCB,
}: IDropdownButtonProps) => {
  const [btnDisplay, setBtnDisplay] = useState(false);

  return (
    <div className="dropdown">
      <button
        disabled={content.length === 0}
        className={btnVariant}
        onClick={() => {
          if (content.length) setBtnDisplay(!btnDisplay);
        }}
      >
        {btnName}
      </button>
      <div
        className="dropdownContent"
        style={{ display: btnDisplay ? "block" : "none" }}
      >
        {content.map((a, i) => (
          <div
            key={i}
            onClick={() => {
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
