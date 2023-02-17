import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar } from "./components";
import { PrivateRoutes } from "./navigation";
import { PublicRoutes } from "./navigation";
import "./App.css";
import { AlbumProvider } from "./features/Album";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const AlbumPage = lazy(() => import("./pages/Album/AlbumPage"));
const DetailPage = lazy(() => import("./pages/Detail/DetailPage"));

const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AlbumProvider>
          <Suspense>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route element={<HomePage />} path="/home" />
                <Route element={<AlbumPage />} path="/album" />
                <Route element={<DetailPage />} path="/detail" />
              </Route>
              <Route element={<PublicRoutes />}>
                <Route element={<LoginPage />} path="/" />
              </Route>
              <Route element={<NotFoundPage />} path="*" />
            </Routes>
          </Suspense>
          <Navbar />
        </AlbumProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
