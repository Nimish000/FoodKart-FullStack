import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Slide,
  Box,
  Typography,
  useTheme,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { postApiCall } from "../../apiController/ApiController";

const AuthSlideModal = ({ open, onClose, isLogin, toggleAuthMode }) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("+919999600320");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const theme = useTheme();

  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    const formattedPhone = `+91${phone}`;

    setLoading(true);
    setError(null);

    try {
      const response = await postApiCall("/send-otp", {
        mobile: formattedPhone,
      });

      if (response.success) {
        setIsOtpSent(true);
      } else {
        setError(response.error || "Failed to send OTP");
      }
    } catch (err) {
      setError("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    const formattedPhone = `+91${phone}`;

    setLoading(true);
    setError(null);

    try {
      console.time("OTP verified");

      const response = await postApiCall("/verify-otp", {
        mobile: formattedPhone,
        otp: otp,
      });

      if (response.success && response.data?.data) {
        localStorage.setItem("token", response.data.data);

        navigate("/restaurants");

        onClose();
        console.timeEnd("OTP verified");
      } else {
        setError(response.error || "Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Slide}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          margin: 0,
          height: "100vh",
          maxHeight: "none",
          position: "fixed",
          right: 0,
          top: 0,
          borderRadius: 0,
          width: { xs: "100%", md: "40%" },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: theme.palette.primary.main,
          color: "white",
        }}
      >
        <Typography variant="body1">
          {isLogin ? "Login to FoodKart" : "Create an Account"}
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          p: 4,
          background: `linear-gradient(145deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
        }}
      >
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {!isOtpSent ? (
          <div>
            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
                if (value.length <= 10) setPhone(value);
              }}
              placeholder="Enter phone number"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={handleSendOtp}
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : "Send OTP"}
            </Button>
          </div>
        ) : (
          <div>
            <Typography variant="body1" sx={{ mb: 2, color: "white" }}>
              OTP sent to {phone}
            </Typography>
            <TextField
              fullWidth
              margin="normal"
              label="OTP"
              value={otp}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Only digits
                if (value.length <= 6) setOtp(value);
              }}
              placeholder="Try 123456"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "white",
                  },
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={handleVerifyOtp}
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : "Verify OTP"}
            </Button>
          </div>
        )}

        <Box textAlign="center" mt={2}>
          <Button
            onClick={() => {
              setIsOtpSent(false);
              setOtp("");
              setError(null);
              toggleAuthMode();
            }}
            sx={{ textTransform: "none", color: "white" }}
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthSlideModal;
