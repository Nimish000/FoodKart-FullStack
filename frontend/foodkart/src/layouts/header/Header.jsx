import React from "react";
import { Link, NavLink } from "react-router";
import {
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaSearch,
  FaBars,
} from "react-icons/fa";

function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 w-full">
      {/* Top Announcement Bar */}
      <div className="bg-amber-600 text-black text-sm text-center py-1">
        <p>🔥 Free delivery on orders above ₹199 | Limited time offer!</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        {/* First Row - Logo, Search, User Actions */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src="https://placehold.co/50x50?text=FK"
                alt="FoodKart Logo"
                className="h-12 w-12 rounded-full mr-2"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Food<span className="text-white">Kart</span>
              </span>
            </NavLink>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="w-full py-2 px-4 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-600 p-2 rounded-full">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1 hover:text-amber-400">
              <FaHeart />
              <span>Favorites</span>
            </button>
            <button className="hidden md:flex items-center space-x-1 hover:text-amber-400">
              <FaUser />
              <span>Account</span>
            </button>
            <button className="flex items-center space-x-1 relative hover:text-amber-400">
              <FaShoppingCart />
              <span>Cart</span>
              <span className="absolute -top-2 -right-2 bg-amber-600 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="md:hidden text-2xl">
              <FaBars />
            </button>
          </div>
        </div>

        {/* Second Row - Navigation */}
        <nav className="hidden md:flex justify-center mt-4 space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-2 px-1 hover:text-amber-400 border-b-2 ${
                isActive
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/restaurants"
            className={({ isActive }) =>
              `py-2 px-1 hover:text-amber-400 border-b-2 ${
                isActive
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent"
              }`
            }
          >
            Restaurants
          </NavLink>
          <NavLink
            to="/deals"
            className={({ isActive }) =>
              `py-2 px-1 hover:text-amber-400 border-b-2 ${
                isActive
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent"
              }`
            }
          >
            Deals & Offers
          </NavLink>
          <NavLink
            to="/cuisines"
            className={({ isActive }) =>
              `py-2 px-1 hover:text-amber-400 border-b-2 ${
                isActive
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent"
              }`
            }
          >
            Cuisines
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-2 px-1 hover:text-amber-400 border-b-2 ${
                isActive
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `py-2 px-1 hover:text-amber-400 border-b-2 ${
                isActive
                  ? "border-amber-500 text-amber-400"
                  : "border-transparent"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Location Bar */}
        <div className="flex items-center justify-between mt-3 text-sm bg-gray-800 px-4 py-2 rounded-lg">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-amber-500 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Mumbai, Maharashtra</span>
          </div>
          <button className="text-amber-400 hover:underline">Change</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
