import { useState } from "react";
import { downloadImage, options, resizeImage } from "../../../utils";
import "./DownloadBtnStyle.css";
import { IDownloadBtnProps } from "./types";

export const DownloadBtn = ({ btnName, imageUrl }: IDownloadBtnProps) => {
  const [btnDisplay, setBtnDisplay] = useState(false);
  const [blobArr, setBlobArr] = useState<Blob[]>([]);

  const usageDownloadImages = async (urlImg: string) => {
    const response = await fetch(urlImg);
    const blob = await response.blob();

    const originalImage = (await resizeImage(blob, 2632, 3290)) as Blob;
    const largeImage = (await resizeImage(blob, 1920, 2400)) as Blob;
    const mediumImage = (await resizeImage(blob, 1280, 1600)) as Blob;
    const smallImage = (await resizeImage(blob, 640, 800)) as Blob;

    setBlobArr([originalImage, largeImage, mediumImage, smallImage]);
  };

  return (
    <div className="dropdown">
      <button
        className="downloadBtn"
        onClick={() => {
          usageDownloadImages(imageUrl);
          setBtnDisplay(!btnDisplay);
        }}
      >
        {btnName}
      </button>
      <div
        className="dropdownContent"
        style={{ display: btnDisplay ? "block" : "none" }}
      >
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => {
              if (blobArr.length) {
                downloadImage(
                  URL.createObjectURL(blobArr[option.id]),
                  option.fileName
                );
              }
              setBtnDisplay(false);
            }}
            className="contentItems"
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
};
