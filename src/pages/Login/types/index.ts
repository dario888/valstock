export interface ILoginPageProps {}

export interface ILoginInput {
  username: string;
  password: string;
}

export interface ILoginError {
  usernameErr: string;
  passwordErr: string;
  credentialsErr: string;
}

export interface IUserStorage {
  username: string;
  isAuthenticated: boolean;
}
