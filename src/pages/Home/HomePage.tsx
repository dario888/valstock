import React, { Fragment, useEffect, useState, MouseEvent } from "react";
import { Buttom, HomeCard, Popup, ToastMsg } from "../../components";
import { IImage, useAlbumProvider, useGetImages } from "../../features/Album";
import "./HomeStyle.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const {
    data,
    error,
    status,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetImages();
  const [popup, setPopup] = useState(false);
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();
  const { setImageDetail } = useAlbumProvider();
  // console.log("DATA", data?.pages);
  // console.log(albumsList);
  return status === "loading" ? (
    <h2 style={{ margin: "200px", textAlign: "center" }}>Loading...</h2>
  ) : status === "error" ? (
    <h2 style={{ color: "red", margin: "200px", textAlign: "center" }}>
      Error: {error ? error.message : null}
    </h2>
  ) : (
    <div className="mainHome">
      <Popup
        isActive={popup}
        onClosePopupCB={() => setPopup(false)}
        onToastCB={() => setToast(true)}
      />
      <ToastMsg isActive={toast} onClickCB={() => setToast(false)} />
      <div className="homeGrid">
        {data?.pages.map((item, i) => (
          <Fragment key={i}>
            {item.images.map((image, k) => (
              <HomeCard
                key={k}
                imageUrl={image.download_url}
                textBtn="ADD TO ALBUM"
                divColor="black"
                heightImg="350px"
                width="300px"
                onClickAdd={(e: MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  // TODO setImageDetailAction
                  setImageDetail(image);
                  setPopup(true);
                }}
                onClickNavigete={() => {
                  setImageDetail(image);
                  navigate("/detail");
                }}
              />
            ))}
          </Fragment>
        ))}
      </div>
      <div className="loadBtndiv">
        <Buttom
          btnVariant="blackSmBtn"
          btnDisabled={!hasNextPage || isFetchingNextPage}
          onClickCB={fetchNextPage}
          btnText={
            isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "End"
          }
        />
      </div>
    </div>
  );
};

export default HomePage;
