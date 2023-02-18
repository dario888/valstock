import { isEmpty } from "lodash";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
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
  const { albumsList, getAlbumFromListAction } = useAlbumProvider();
  const isAuthenticated = getFromLocalStorage(STORAGE_KES.AUTH);

  const onClickAlbum = (id: number) => {
    if (!isEmpty(albumsList)) {
      getAlbumFromListAction(id);
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
