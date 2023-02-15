import { Outlet, Navigate } from "react-router-dom";
import { getFromLocalStorage, STORAGE_KES } from "../utils";

export const PrivateRoutes = () => {
  const isAuthenticated = getFromLocalStorage(STORAGE_KES.AUTH);
  return !!isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
