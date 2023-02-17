export interface ILoginInput {
  username: string;
  password: string;
}

export interface ILoginError {
  passwordErr: string;
  usernameErr: string;
  credentialsErr: string;
}
