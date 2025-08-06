// src/components/Deals.jsx
import React from "react";
import {
  Box,
  CardMedia,
  Chip,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function Deals() {
  const theme = useTheme();

  const deals = [
    {
      id: 1,
      title: "50% OFF on all Pizzas",
      code: "PIZZA50",
      restaurant: "Domino's Pizza",
      image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free Burgers",
      code: "BURGERBOGO",
      restaurant: "Burger King",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    },
    {
      id: 3,
      title: "Free Drink with any Pasta",
      code: "PASTADRINK",
      restaurant: "Olive Garden",
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    },
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        color={theme.palette.primary.contrastText}
        sx={{
          mb: 2,
          ml: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <LocalOfferIcon />
        Hot Deals & Offers
      </Typography>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        loop
        style={{ borderRadius: "16px", overflow: "hidden" }}
      >
        {deals.map((deal) => (
          <SwiperSlide key={deal.id}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "30vh", sm: "30vh", md: "40vh" },
                width: "100vw",
              }}
            >
              <CardMedia
                component="img"
                image={deal.image}
                alt={deal.title}
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                  color: "white",
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {deal.title}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip
                    label={deal.code}
                    color="primary"
                    size="small"
                    sx={{ fontWeight: "bold" }}
                  />
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    At {deal.restaurant}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Deals;
