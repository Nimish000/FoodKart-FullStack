import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
} from "react-router";
import App from "../App";
import Register from "../features/register/Register";
import Login from "../features/login/Login";
import Home from "../features/home/Home";
import AboutPage from "../features/about/AboutPage";
import RestaurantPage from "../features/restaurant/RestaurantPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="restaurants" element={<RestaurantPage />} />
    </Route>
  )
);

export default router;
