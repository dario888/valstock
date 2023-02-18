import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttom, InputField } from "../../components";
import { loginValidation, setToLocalStorage, STORAGE_KES } from "../../utils";
import CameraImg from "../../assets/camera.png";
import "./LoginStyle.css";
import { ILoginError } from "./types";

const LoginPage = () => {
  const [user, SetUser] = useState({
    username: "",
    password: "",
  });
  const [error, SetError] = useState<ILoginError>({
    usernameErr: "",
    passwordErr: "",
    credentialsErr: "",
  });
  const navigate = useNavigate();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };

  const onClickLogin = () => {
    const inputErrors = loginValidation(user);
    if (inputErrors.passwordErr || inputErrors.usernameErr)
      return SetError(inputErrors);
    if (inputErrors.credentialsErr) return SetError(inputErrors);
    SetError({
      usernameErr: "",
      passwordErr: "",
      credentialsErr: "",
    });
    setToLocalStorage(STORAGE_KES.AUTH, JSON.stringify(true));
    navigate("/home");
  };

  return (
    <div className="mainDiv">
      <div className="inputHeaderWrapper">
        <div className="headerWrapper">
          <div className="title">Join our stock community!</div>
          <div className="subtitle">
            Download free photos and videos powered by the best photographers.
          </div>
        </div>
        <form className="inputWrapper">
          <div className="errMsg">{error?.credentialsErr}</div>
          <InputField
            inputType="text"
            inputName="username"
            inputValue={user.username}
            labelName="USERNAME"
            errorMsg={error?.usernameErr}
            onChangeCB={onChangeInput}
          />
          <InputField
            inputType="password"
            inputName="password"
            inputValue={user.password}
            labelName="PASSWORD"
            errorMsg={error?.passwordErr}
            onChangeCB={onChangeInput}
          />
          <Buttom
            btnText="LOG IN"
            btnVariant="blackSmBtn"
            onClickCB={onClickLogin}
          />
        </form>
      </div>
      <div className="footer">
        <img
          className="cameraImg"
          height="340px"
          src={CameraImg}
          alt="camera"
        />
      </div>
    </div>
  );
};

export default LoginPage;
