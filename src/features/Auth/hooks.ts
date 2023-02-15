import { create } from "zustand";
import { combine } from "zustand/middleware";

export interface IUser {
  id: number;
  username: string;
  password: string;
}

export type AuthState = {
  isAuthenticated: boolean;
  user: IUser;
};

export type AuthAction = {
  setIsAuthenticated: (authParam: boolean) => void;
};

export const useAuthStore = create<AuthState & AuthAction>(
  combine(
    {
      isAuthenticated: false,
      user: { id: 1, username: "user1", password: "qwerty" },
    },
    (set) => ({
      setIsAuthenticated: (authParam: boolean) =>
        set(() => ({ isAuthenticated: authParam })),
    })
  )
);
