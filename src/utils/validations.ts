import { ILoginError, ILoginInput } from "../pages/Login/types";

const username = "user1";
const password = "qwerty";

export const loginValidation = (val: ILoginInput): ILoginError => {
  const loginError = { passwordErr: "", usernameErr: "", credentialsErr: "" };

  if (val.username.length < 4) {
    loginError.usernameErr = "Username  should be min 4 characters!";
  } else if (val?.password?.length < 6) {
    loginError.passwordErr = "Password should be min 6 characters!";
  } else if (val.username !== username || val.password !== password) {
    loginError.credentialsErr = "Invalid credentials, email or password!";
  }

  return loginError;
};
