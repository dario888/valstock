import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttom, DropdownButton, Popup, ToastMsg } from "../../components";
import { useAlbumProvider } from "../../features/Album";
import "./DetailStyle.css";

const dammyDownlload = [
  {
    id: 1,
    name: "test",
    value: ["dsadsa"],
  },
];
const DetailPage = () => {
  const { imageDetail } = useAlbumProvider();
  const [isPopup, setIsPopup] = useState(false);
  const [isToast, setIsToast] = useState(false);
  const navigate = useNavigate();

  // console.log(99, imageDetail);
  return (
    <div className="mainDetail">
      <Popup
        isActive={isPopup!}
        onClosePopupCB={() => setIsPopup(false)}
        onToastCB={() => setIsToast(true)}
      />
      <ToastMsg isActive={isToast} onClickCB={() => setIsToast(false)} />
      <div className="btnDiv">
        <Buttom
          btnText="ADD TO ALBUM"
          btnVariant="whiteXlBtn"
          onClickCB={() => setIsPopup(true)}
        />
        <DropdownButton
          content={dammyDownlload}
          btnName="DOWNLOAD"
          btnVariant="downloadBtn"
          onClickItemCB={() => null}
        />
      </div>
      <div className="imgDiv">
        <img
          height={"530px"}
          width={"410px"}
          src={imageDetail.download_url}
          alt="img"
        />
      </div>
      <div className="bottomSection">
        <div className="wrapperText">
          <div className="text1">UPLOADED BY</div>
          <div className="text2">{imageDetail.author}</div>
        </div>
        <Buttom
          btnText="GO BACK"
          btnVariant="whiteSmBtn"
          onClickCB={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default DetailPage;
