import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import { JSX } from "react";
import MainPage from "../Pages/MainPage.tsx";
import routerKeys from "../Constants/RouterKeys.tsx";

export default function Routers(): JSX.Element {
  const location = useLocation();
  return (
      <Routes location={location} key={location.pathname}>
        <Route path={routerKeys.main} element={<MainPage/>} />
        <Route path="/" element={<Navigate to={routerKeys.main} replace />} />
      </Routes>
  );
}
