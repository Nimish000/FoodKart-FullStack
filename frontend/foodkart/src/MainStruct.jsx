import { Outlet } from "react-router";
import "./App.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

function MainStruct() {
  return <Outlet />;
}

export default MainStruct;
