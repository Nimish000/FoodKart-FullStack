import { Outlet } from "react-router";
import "./App.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex items-center flex-col bg-gray-900">
      <Header />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
