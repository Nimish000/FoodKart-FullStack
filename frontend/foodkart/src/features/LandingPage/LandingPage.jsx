import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
} from "@mui/material";
import {
  LocalDining,
  Timer,
  Payments,
  Diversity3,
  Place,
} from "@mui/icons-material";
import LandingPageFooter from "../../layouts/footer/LandingPageFooter";
import AuthSlideModal from "../../components/LandingPage/AuthSliderModal";

const features = [
  {
    icon: <LocalDining fontSize="large" />,
    title: "Multi-Restaurant Orders",
    description:
      "Combine items from different restaurants in one order for ultimate convenience",
  },
  {
    icon: <Timer fontSize="large" />,
    title: "Save Time",
    description:
      "No more switching between apps - get all your favorites in one place",
  },
  {
    icon: <Payments fontSize="large" />,
    title: "Save Money",
    description: "Single delivery fee when ordering from multiple restaurants",
  },
  {
    icon: <Diversity3 fontSize="large" />,
    title: "Group Orders Made Easy",
    description: "Satisfy everyone's cravings without the hassle",
  },
];

function LandingPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const handleAuthModalOpen = (isLogin) => {
    setIsLoginView(isLogin);
    setAuthModalOpen(true);
  };
  const handleAuthModalClose = () => {
    setAuthModalOpen(false);
  };
  const toggleAuthMode = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <Box
      sx={{ minHeight: "100vh", width: "100%", bgcolor: "background.default" }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: "white",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {" "}
        <div id="recaptcha-container"></div>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 6,
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              <Box component="span" color="white">
                Food
              </Box>
              <Box component="span" color="secondary.light">
                Kart
              </Box>
            </Typography>
            <Box>
              <Button
                variant="text"
                onClick={() => handleAuthModalOpen(true)}
                sx={{ color: "white", mr: 2 }}
              >
                Login
              </Button>
              <Button
                onClick={() => handleAuthModalOpen(false)}
                variant="contained"
                color="secondary"
              >
                Sign Up
              </Button>
            </Box>
          </Box>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant={isMobile ? "h3" : "h2"}
                fontWeight="bold"
                gutterBottom
              >
                Order from multiple restaurants.{" "}
                <Box component="span" color="secondary.light">
                  One delivery.
                </Box>
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                The revolutionary way to satisfy all your cravings without
                compromise.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <FormControl
                  fullWidth
                  sx={{
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <InputLabel>Enter your address</InputLabel>
                  <Select
                    label="Enter your address"
                    startAdornment={<Place sx={{ mr: 1 }} />}
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                      "& .MuiInputLabel-root": {
                        color: "white",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "white",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "white",
                      },
                      "& .MuiSelect-select": {
                        color: "white",
                      },
                    }}
                  >
                    <MenuItem value="current">Use current location</MenuItem>
                    <MenuItem value="home">Home Address</MenuItem>
                    <MenuItem value="work">Work Address</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    px: 4,
                    flexShrink: 0,
                  }}
                >
                  Find Restaurants
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          color={theme.palette.secondary.main}
          gutterBottom
        >
          Why FoodKart is Different?
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          We reinvented food delivery to give you more freedom and flexibility
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "background.paper",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                  "&:hover": {
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.light,
                      color: theme.palette.primary.contrastText,
                      width: 60,
                      height: 60,
                      mb: 3,
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            color="white"
            gutterBottom
          >
            How It Works
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Get your favorite meals from multiple restaurants in just a few taps
          </Typography>

          <Grid container spacing={4} sx={{ pt: 2, justifyContent: "center" }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: theme.palette.landingPage.one,
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    mb: 3,
                  }}
                >
                  1
                </Box>
                <Typography
                  variant="h6"
                  color={theme.palette.text.primary}
                  gutterBottom
                >
                  Choose Restaurants
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Browse through our partner restaurants and select your
                  favorite meals
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: theme.palette.landingPage.two,
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    mb: 3,
                  }}
                >
                  2
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  color={theme.palette.text.primary}
                >
                  Build Your Order
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Add items from different restaurants to your single cart
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: theme.palette.landingPage.three,
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    mb: 3,
                  }}
                >
                  3
                </Box>
                <Typography
                  variant="h6"
                  color={theme.palette.text.primary}
                  gutterBottom
                >
                  One Fast Delivery
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Receive all your meals together in one convenient delivery
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
          color: "white",
          py: 8,
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to revolutionize your food ordering?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of happy customers enjoying the future of food
            delivery
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              px: 6,
              py: 2,
              fontSize: "1.1rem",
            }}
          >
            Get Started Now
          </Button>
          <Typography
            fontFamily={theme.typography.fontFamily}
            fontSize={theme.typography.fontSize * 1.4}
            fontWeight={600}
            textAlign={"left"}
            variant="body1"
            sx={{ marginLeft: "5vw", mt: 5, opacity: 0.8 }}
          >
            Mobile App Preview
          </Typography>

          <Grid container spacing={5} justifyContent="center" sx={{ mt: 3 }}>
            {[
              "/assets/5.jpg",
              "/assets/4.jpg",
              "/assets/2.jpg",
              "/assets/3.jpg",
            ].map((src, index) => (
              <Grid
                item
                key={index}
                xs={12} // Full width on small screens
                md={3} // 4 columns on medium+ screens
                sx={{
                  minWidth: 200,
                  height: 450,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 3,
                  flexShrink: 0,
                }}
              >
                <img
                  src={src}
                  alt={`App Screenshot ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* AuthSlider Modal for login signup */}
      <AuthSlideModal
        open={authModalOpen}
        onClose={handleAuthModalClose}
        isLogin={isLoginView}
        toggleAuthMode={toggleAuthMode}
      />

      {/* Footer */}
      <LandingPageFooter />
    </Box>
  );
}

export default LandingPage;
