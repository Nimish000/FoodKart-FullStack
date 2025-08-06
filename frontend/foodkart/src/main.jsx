import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";

import router from "./app/AppRoutes.jsx";
import { ThemeProvider } from "@mui/material";
import theme from "./store/theme.jsx";
import { LocationProvider } from "./context/LocationContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <LocationProvider>
        <RouterProvider router={router} />
      </LocationProvider>
    </AuthProvider>
  </ThemeProvider>
);
