import React from "react";
import {
  Container,
  IconButton,
  Typography,
  useTheme,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Avatar,
  Rating,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Categories from "../../components/HomePage/Categories/Categories";
import Deals from "../../components/HomePage/Deals";
import Restaurants from "../../components/HomePage/Restaurants";
import { useNavigate } from "react-router-dom";
const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    rating: 4.5,
    reviewCount: 124,
    address: "123 Main St, Downtown",
    cuisine: ["Italian", "Pizza", "Pasta"],
    deliveryTime: "20-30 min",
    minOrder: "$15",
    deal: "50% off on first order",
    image:
      "https://images.pexels.com/photos/33240983/pexels-photo-33240983.jpeg",
  },
  {
    id: 2,
    name: "Burger Bistro",
    rating: 4.2,
    reviewCount: 87,
    address: "456 Food Ave, Uptown",
    cuisine: ["American", "Burgers", "Fries"],
    deliveryTime: "15-25 min",
    minOrder: "$10",
    deal: "Free fries with any burger",
    image:
      "https://images.pexels.com/photos/33253858/pexels-photo-33253858.jpeg",
  },
  {
    id: 3,
    name: "Sushi World",
    rating: 4.7,
    reviewCount: 156,
    address: "789 Ocean Blvd, Seaport",
    cuisine: ["Japanese", "Sushi", "Asian"],
    deliveryTime: "25-40 min",
    minOrder: "$20",
    deal: "Combo meal discount",
    image:
      "https://images.pexels.com/photos/33223687/pexels-photo-33223687.jpeg",
  },
  {
    id: 4,
    name: "Taco Fiesta",
    rating: 4.3,
    reviewCount: 92,
    address: "101 Tex-Mex Lane",
    cuisine: ["Mexican", "Tacos", "Burritos"],
    deliveryTime: "15-25 min",
    minOrder: "$12",
    deal: "2 for 1 tacos",
    image: "https://images.pexels.com/photos/5848706/pexels-photo-5848706.jpeg",
  },
  {
    id: 5,
    name: "Noodle House",
    rating: 4.1,
    reviewCount: 78,
    address: "202 Asian Street",
    cuisine: ["Chinese", "Noodles", "Dumplings"],
    deliveryTime: "20-35 min",
    minOrder: "$18",
    deal: "Free appetizer",
    image: "https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg",
  },
  {
    id: 6,
    name: "Steakhouse",
    rating: 4.8,
    reviewCount: 210,
    address: "303 Grill Avenue",
    cuisine: ["American", "Steak", "BBQ"],
    deliveryTime: "25-40 min",
    minOrder: "$25",
    deal: "Free dessert with steak",
    image: "https://images.pexels.com/photos/2491273/pexels-photo-2491273.jpeg",
  },
];
function HomePage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        py: 3,
        width: "95vw",
        bgcolor: theme.palette.background.default,
      }}
    >
      {/* Search Button */}
      <Box sx={{ width: "100%", maxWidth: "600px", mx: "auto", mb: 3 }}>
        <Button
          fullWidth
          onClick={() => navigate("/restaurants/search")}
          sx={{
            borderRadius: "12px",
            boxShadow: 2,
            p: 1,
            bgcolor: "background.paper",
            textTransform: "none",
            justifyContent: "flex-start", // Align content to start
            textAlign: "left",
            ":hover": { opacity: 0.8 },
            ":active": { opacity: 0.9 },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center">
              <SearchIcon
                color="primary"
                sx={{
                  fontSize: 30,
                  ml: 1,
                  mr: 2,
                  flexShrink: 0, // Prevent icon from shrinking
                }}
              />
              <Typography variant="body1" color="text.secondary">
                Search for restaurants or dishes...
              </Typography>
            </Stack>
            <IconButton color="primary" sx={{ flexShrink: 0 }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Stack>
        </Button>
      </Box>
      {/* Categories Section */}
      <Categories />
      {/* Deals Carousel */}
      <Deals />
      {/* Nearby Restaurants Section */}
      <Restaurants data={restaurants} title="All Restaurants" />
      {/*All Restaurants Section */}
      <Restaurants data={restaurants} title="All Restaurants" />
    </Container>
  );
}

export default HomePage;
