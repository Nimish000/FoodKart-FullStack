import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark", // or 'light'

    primary: {
      light: "#333333",
      main: "#000000", // black
      dark: "#000000",
      contrastText: "#ffffff", // text on primary
    },

    secondary: {
      light: "#ff6666",
      main: "#990B0B", // dark red
      dark: "#7f0000",
      contrastText: "#ffffff",
    },
    landingPage: {
      one: "#F82C2C",
      two: "#DA1717",
      three: "#8F0404",
    },

    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#ffffff",
    },

    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "#000000",
    },

    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#ffffff",
    },

    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "#ffffff",
    },

    background: {
      default: "#000000", // app background
      paper: "#121212", // card/dialog background
    },
    backgroundFix: {
      default: "#ffffff",
    },

    text: {
      black: "#000",
      primary: "#ffffff",
      secondary: "#cccccc",
      disabled: "#777777",
    },
    search: {
      main: "#450F07",
      contrastText: "#FFFFFF",
    },
  },

  spacing: 8, // base spacing unit

  typography: {
    fontSize: 14,
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#fff",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "12px 24px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
          borderRadius: "6px",
        },
      },
    },
  },
});

export default theme;
