import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaHeart, FaBars } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  IconButton,
  TextField,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import {
  LocationOn,
  MyLocation,
  ArrowDropDown,
  Close,
} from "@mui/icons-material";
import { useLocation } from "../../context/LocationContext";
import "./Header.css"; // Import CSS for animations
const mapApiKey = import.meta.env.VITE_MAP_API_KEY;

function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [loading, setLoading] = useState(false);
  const autocompleteServiceRef = useRef(null);
  const placesServiceRef = useRef(null);
  const { location, address, requestLocation, updateLocation } = useLocation();

  useEffect(() => {
    console.log("on start address" + address);
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${mapApiKey}}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      autocompleteServiceRef.current =
        new window.google.maps.places.AutocompleteService();
      placesServiceRef.current = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 2 && autocompleteServiceRef.current) {
      setLoading(true); // Start loading
      autocompleteServiceRef.current.getPlacePredictions(
        { input: value, types: ["geocode"] },
        (predictions, status) => {
          setLoading(false); // Stop loading
          if (status === "OK") {
            setPredictions(predictions);
            setShowPredictions(true);
          } else {
            setShowPredictions(false);
          }
        }
      );
    } else {
      setShowPredictions(false);
    }
  };

  const handleSelectPlace = (placeId) => {
    placesServiceRef.current.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry) {
        console.log("Selected Place:", place.formatted_address);
        updateLocation(
          place.geometry.location.lat(),
          place.geometry.location.lng(),
          place.formatted_address
        );
        setSearchQuery(place.formatted_address);
        setShowPredictions(false);
      }
    });
  };

  const handleUseCurrentLocation = () => {
    requestLocation();
    setSearchQuery(address);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <NavLink to="/restaurants" className="flex items-center">
              <img
                src="../../../public/assets/foodkart.png"
                alt="FoodKart Logo"
                className="h-15 w-15 rounded-full mr-2 logo-animation"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-800 to-orange-600 bg-clip-text text-transparent">
                Food<span className="text-white">Kart</span>
              </span>
            </NavLink>
          </div>

          <nav className="hidden md:flex justify-center mt-4 space-x-6">
            <NavLink
              to="/restaurants"
              className={({ isActive }) =>
                `py-2 px-1 hover:text-red-600 border-b-2 ${
                  isActive
                    ? "border-red-600 text-red-600"
                    : "border-transparent"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/restaurants/search"
              className={({ isActive }) =>
                `py-2 px-1 hover:text-red-600 border-b-2 ${
                  isActive
                    ? "border-red-600 text-red-600"
                    : "border-transparent"
                }`
              }
            >
              Search
            </NavLink>
            <NavLink
              to="/restaurants/about"
              className={({ isActive }) =>
                `py-2 px-1 hover:text-red-600 border-b-2 ${
                  isActive
                    ? "border-red-600 text-red-600"
                    : "border-transparent"
                }`
              }
            >
              About Us
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1 hover:text-red-600">
              <FaHeart />
              <span>Favorites</span>
            </button>
            <button
              className="hidden md:flex items-center space-x-1 hover:text-red-600"
              onClick={() => navigate("/restaurants/account")}
            >
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
        <div className=" md:flex items-center justify-between mt-3 text-sm bg-red-800 px-4 py-2 rounded-lg">
          <div className="flex items-center flex-grow">
            <IconButton onClick={handleMenuOpen}>
              <LocationOn className="h-5 w-5 text-white mr-2" />
            </IconButton>
            <span className="flex-grow text-white">
              {address || "Select your location"}
            </span>
            <IconButton onClick={handleMenuOpen}>
              <ArrowDropDown className="text-white" />
            </IconButton>
          </div>
        </div>

        {/* Dropdown menu for location options */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ width: { md: "40vw", xs: "80vw" } }} // Set a fixed width for the menu
        >
          <MenuItem
            onClick={handleUseCurrentLocation}
            sx={{ padding: "10px 16px" }}
          >
            <MyLocation sx={{ mr: 1 }} /> Use current location
          </MenuItem>
          <MenuItem sx={{ padding: "10px 16px" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for a location"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setSearchQuery("")}>
                    <Close />
                  </IconButton>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "action.hover",
                },
                width: "80vw",
              }}
            />
          </MenuItem>
          {loading && (
            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
              <CircularProgress size={24} />
            </Box>
          )}
          {showPredictions && predictions.length > 0 && (
            <Box sx={{ maxHeight: 200, overflowY: "auto" }}>
              {predictions.map((prediction) => (
                <MenuItem
                  key={prediction.place_id}
                  onClick={() => handleSelectPlace(prediction.place_id)}
                  sx={{ padding: "10px 16px" }} // Adjust padding for predictions
                >
                  {prediction.description}
                </MenuItem>
              ))}
            </Box>
          )}
        </Menu>
      </div>
    </header>
  );
}

export default Header;
