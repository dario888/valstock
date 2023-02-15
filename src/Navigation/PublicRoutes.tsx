import { Navigate, Outlet } from "react-router-dom";
import { getFromLocalStorage, STORAGE_KES } from "../utils";

export const PublicRoutes = () => {
  const isAuthenticated = getFromLocalStorage(STORAGE_KES.AUTH);
  return !isAuthenticated ? <Outlet /> : <Navigate to={"/home"} />;
};
