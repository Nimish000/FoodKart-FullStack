import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "../../context/LocationContext";
import {
  TextField,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  LocationOn,
  MyLocation,
  ArrowDropDown,
  Close,
} from "@mui/icons-material";

const LocationSearch = () => {
  const { address, requestLocation, updateLocation } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const autocompleteServiceRef = useRef(null);
  const placesServiceRef = useRef(null);

  // Current location handling
  const [isUsingCurrentLocation, setIsUsingCurrentLocation] = useState(true);

  useEffect(() => {
    console.log("LocationSearch component mounted" + address);
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBrp_Uvj09nLKoGJuCpgNtKI76sgm0ceGo&libraries=places`;

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

  useEffect(() => {
    if (isUsingCurrentLocation) {
      setSearchQuery(address || "Getting your location...");
    }
  }, [address, isUsingCurrentLocation]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsUsingCurrentLocation(false);

    if (value.length > 2 && autocompleteServiceRef.current) {
      autocompleteServiceRef.current.getPlacePredictions(
        { input: value, types: ["geocode"] },
        (predictions, status) => {
          if (status === "OK") {
            setPredictions(predictions);
            setShowPredictions(true);
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
        updateLocation(
          place.geometry.location.lat(),
          place.geometry.location.lng(),
          place.formatted_address
        );
        setSearchQuery(place.formatted_address);
        setShowPredictions(false);
        setIsUsingCurrentLocation(false);
      }
    });
  };

  const handleUseCurrentLocation = () => {
    setSearchQuery("Getting your location...");
    requestLocation();
    setIsUsingCurrentLocation(true);
    setAnchorEl(null);
  };

  const handleClearInput = () => {
    setSearchQuery("");
    setShowPredictions(false);
    setIsUsingCurrentLocation(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for a location"
        value={searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <LocationOn sx={{ mr: 1, color: "text.secondary" }} />
          ),
          endAdornment: (
            <div style={{ display: "flex", alignItems: "center" }}>
              {searchQuery && !isUsingCurrentLocation && (
                <IconButton onClick={handleClearInput} sx={{ mr: -1 }}>
                  <Close fontSize="small" />
                </IconButton>
              )}
              <IconButton
                onClick={handleMenuOpen}
                aria-label="location options"
                aria-controls="location-menu"
                sx={{ p: 0 }}
              >
                <ArrowDropDown />
              </IconButton>
            </div>
          ),
        }}
      />

      {/* Dropdown menu for location options */}
      <Menu
        id="location-menu"
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
      >
        <MenuItem onClick={handleUseCurrentLocation}>
          <MyLocation sx={{ mr: 1 }} /> Use current location
        </MenuItem>
      </Menu>

      {/* Location predictions dropdown */}
      {showPredictions && predictions.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 1,
            mt: 1,
            maxHeight: 200,
            overflow: "auto",
          }}
        >
          {predictions.map((prediction) => (
            <Typography
              key={prediction.place_id}
              sx={{
                p: 1.5,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
              onClick={() => handleSelectPlace(prediction.place_id)}
            >
              {prediction.description}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default LocationSearch;
