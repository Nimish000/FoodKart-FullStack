import React, { createContext, useState, useEffect } from "react";

export const LocationContext = createContext({
  location: { latitude: 0, longitude: 0 },
  address: null,
  error: null,
  loading: false,
  requestLocation: () => {},
  updateLocation: (lat, lng) => {},
});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestLocation = () => {
    if ("geolocation" in navigator) {
      setLoading(true);
      setError(null);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // console.log(latitude, longitude);
          setLocation({ latitude, longitude });
          // fetchAddress(latitude, longitude); // Fetch address after getting location
          setLoading(false);
        },
        (err) => {
          setError(err.message);
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  };

  const fetchAddress = async (lat, lng) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch address");
      }
      const data = await response.json();
      console.log(data);
      setAddress(data.display_name); // Set the address from the response
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateLocation = (lat, lng) => {
    setLocation({ latitude: lat, longitude: lng });
    fetchAddress(lat, lng); // Fetch address when location is updated
  };

  // Optionally request location when provider mounts
  useEffect(() => {
    // Remove or comment this if you want manual control
    requestLocation();
  }, []);

  const value = {
    location,
    address,
    error,
    loading,
    requestLocation,
    updateLocation,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook for easy access
export const useLocation = () => React.useContext(LocationContext);
