// context/LocationContext.js
import { createContext, useState, useEffect, useContext } from "react";

export const LocationContext = createContext({
  location: { latitude: 0, longitude: 0 },
  address: null,
  error: null,
  loading: false,
  requestLocation: () => {},
  updateLocation: (lat, lng, address) => {},
});

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [address, setAddress] = useState(
    localStorage.getItem("address") || null
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyBrp_Uvj09nLKoGJuCpgNtKI76sgm0ceGo`
      );
      if (!response.ok) throw new Error("Failed to fetch address");
      const data = await response.json();
      setAddress(data.results[0]?.formatted_address || "Unknown location");
      localStorage.setItem("address", data.results[0]?.formatted_address);
    } catch (err) {
      setError(err.message);
    }
  };

  const requestLocation = () => {
    if ("geolocation" in navigator && !address) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          await fetchAddress(latitude, longitude);
          setLoading(false);
        },
        (err) => {
          setError(err.message);
          setLoading(false);
        },
        { enableHighAccuracy: true }
      );
    } else {
      setError("Geolocation is not supported");
    }
  };

  const updateLocation = (lat, lng, newAddress) => {
    setLocation({ latitude: lat, longitude: lng });
    setAddress(newAddress || address);
    localStorage.setItem("address", newAddress || address);
  };

  useEffect(() => {
    requestLocation();
  }, []); // Get current location on mount

  return (
    <LocationContext.Provider
      value={{
        location,
        address,
        error,
        loading,
        requestLocation,
        updateLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
