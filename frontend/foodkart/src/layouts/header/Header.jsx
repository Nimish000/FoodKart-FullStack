import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Updated import for react-router-dom
import {
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { Switch, Tooltip } from "@mui/material";
import "./Header.css"; // Import CSS for animations
import { LocationContext, useLocation } from "../../context/LocationContext";

function Header() {
  const [isMultiple, setIsMultiple] = useState(false);
  const { location, address, requestLocation } = useLocation();

  const handleToggle = () => {
    setIsMultiple((prev) => !prev);
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50 w-full">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        {/* First Row - Logo, Navigation, User Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/restaurants" className="flex items-center">
              <img
                src="../../../public/assets/foodkart.png"
                alt="FoodKart Logo"
                className="h-15 w-15 rounded-full mr-2 logo-animation " // Added animation class
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-800 to-orange-600 bg-clip-text text-transparent">
                Food<span className="text-white">Kart</span>
              </span>
            </NavLink>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex justify-center mt-4 space-x-6">
            <NavLink
              to="/restaurants"
              className={({ isActive }) =>
                `py-2 px-1 hover:text-red-600 border-b-2 ${
                  isActive && window.location.pathname === "/restaurants"
                    ? "border-red-600  text-red-600"
                    : "border-transparent"
                }`
              }
            >
              Home
            </NavLink>
            {/* <NavLink
              to="/restaurants/restaurant"
              className={({ isActive }) =>
                `py-2 px-1 hover:text-red-600  border-b-2 ${
                  isActive
                    ? "border-red-600  text-red-600 "
                    : "border-transparent"
                }`
              }
            >
              Restaurants
            </NavLink> */}

            <NavLink
              to="/restaurants/search"
              className={({ isActive }) =>
                `py-2 px-1 hover:text-red-600 border-b-2 ${
                  isActive
                    ? "border-red-600  text-red-600 "
                    : "border-transparent"
                }`
              }
            >
              Search
            </NavLink>
            <NavLink
              to="/restaurants/about"
              className={({ isActive }) =>
                `py-2 px-1 hover:text-red-600  border-b-2 ${
                  isActive
                    ? "border-red-600  text-red-600 "
                    : "border-transparent"
                }`
              }
            >
              About Us
            </NavLink>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1 hover:text-red-600">
              <FaHeart />
              <span>Favorites</span>
            </button>
            <button className="hidden md:flex items-center space-x-1 hover:text-red-600">
              <FaUser />
              <span>Account</span>
            </button>
            <button className="flex items-center space-x-1 relative hover:text-red-600">
              <FaShoppingCart />
              <span>Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-800 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="md:hidden text-2xl">
              <FaBars />
            </button>
          </div>
        </div>

        {/* Location Bar */}
        <div className="hidden md:flex items-center justify-between mt-3 text-sm bg-red-800 px-4 py-2 rounded-lg">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {location.latitude} {location.longitude}
            </span>
          </div>
          <button
            className="text-white hover:underline"
            onClick={requestLocation}
          >
            Change
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
