import { isEmpty } from "lodash";
import { Fragment, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { IAlbum } from "../../features/Album";
import { useAlbumProvider } from "../../features/Album/providers";

import {
  getFromLocalStorage,
  removeFromStorage,
  STORAGE_KES,
} from "../../utils";
import { DropdownButton } from "../common/DropdownButton";
import "./NavbarStyle.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const { albumsList, setAlbum } = useAlbumProvider();
  const isAuthenticated = getFromLocalStorage(STORAGE_KES.AUTH);
  // console.log(11, albums);
  const onClickAlbum = (id: number) => {
    if (!isEmpty(albumsList)) {
      //TODO getAlbumFromList
      setAlbum(albumsList.find((a) => a.id === id) as IAlbum);
      navigate("/album");
    }
  };

  return (
    <nav className="navbar">
      <div className={!!isAuthenticated ? "logo" : " loginLogo"}>
        <img
          className="logoImg"
          height={"25px"}
          width={"125px"}
          src={LogoImg}
          alt="logo"
        />
      </div>
      <div className="buttonDiv">
        {!!isAuthenticated ? (
          <Fragment>
            <DropdownButton
              content={albumsList}
              btnName={"MY ALBUMS"}
              btnVariant="myAlbumBtn"
              onClickItemCB={onClickAlbum}
            />

            <button
              type="button"
              className="logoutBtn"
              onClick={() => {
                removeFromStorage(STORAGE_KES.AUTH);
                navigate("/");
              }}
            >
              LOGOUT
            </button>
          </Fragment>
        ) : null}
      </div>
    </nav>
  );
};
