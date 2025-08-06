import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App";
import Register from "../features/register/Register";
import Login from "../features/login/Login";
import LandingPage from "../features/LandingPage/LandingPage";
import AboutPage from "../features/about/AboutPage";
import RestaurantPage from "../features/restaurant/RestaurantPage";
import MainStruct from "../MainStruct";
import HomePage from "../features/home/HomePage";
import SearchPage from "../features/search/SearchPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* for user */}
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route path="restaurants/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="restaurant" element={<RestaurantPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Route>
      {/* for admin */}
      <Route path="/admin" element={<MainStruct />}>
        <Route path="login" element={<Login />} />
      </Route>
    </>
  )
);

export default router;
