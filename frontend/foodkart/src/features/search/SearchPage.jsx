import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Card,
  CardMedia,
  Typography,
  Stack,
  Chip,
  Rating,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Slider,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

// Sample data
const sampleRestaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    rating: 4.5,
    reviewCount: 124,
    distance: "0.8 km",
    cuisine: ["Italian", "Pizza", "Pasta"],
    menuMatch: ["Margherita Pizza", "Pepperoni", "Garlic Bread"],
    image: "https://placehold.co/600x400?text=Pizza+Palace",
  },
  {
    id: 2,
    name: "Burger Bistro",
    rating: 4.2,
    reviewCount: 87,
    distance: "1.2 km",
    cuisine: ["American", "Burgers", "Fries"],
    menuMatch: ["Cheeseburger", "Bacon Burger", "Onion Rings"],
    image: "https://placehold.co/600x400?text=Burger+Bistro",
  },
  {
    id: 3,
    name: "Sushi World",
    rating: 4.7,
    reviewCount: 156,
    distance: "1.5 km",
    cuisine: ["Japanese", "Sushi", "Asian"],
    menuMatch: ["California Roll", "Nigiri", "Sashimi"],
    image: "https://placehold.co/600x400?text=Sushi+World",
  },
  {
    id: 4,
    name: "Sushi World",
    rating: 4.7,
    reviewCount: 156,
    distance: "1.5 km",
    cuisine: ["Japanese", "Sushi", "Asian"],
    menuMatch: ["California Roll", "Nigiri", "Sashimi"],
    image: "https://placehold.co/600x400?text=Sushi+World",
  },
];

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    rating: [3, 5],
    distance: [0, 5],
    cuisine: [],
    sortBy: "relevance",
  });

  // Filter logic
  const filteredRestaurants = sampleRestaurants.filter((restaurant) => {
    const queryMatch = searchQuery
      ? restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.menuMatch.some((item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : true;

    const ratingMatch =
      restaurant.rating >= filters.rating[0] &&
      restaurant.rating <= filters.rating[1];

    return queryMatch && ratingMatch;
  });

  // Sort logic
  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    switch (filters.sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "distance":
        return parseFloat(a.distance) - parseFloat(b.distance);
      default:
        return 0;
    }
  });

  return (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "1200px",
        mx: "auto",
        minHeight: "100vh",
        p: 2,
      }}
    >
      {/* Search Bar */}
      <Box
        sx={{
          width: "100%",
          mb: 3,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search restaurants or dishes..."
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton onClick={() => setSearchQuery("")}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Filter and Sort Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {sortedRestaurants.length} Results
        </Typography>

        <Box>
          <Button
            variant="outlined"
            startIcon={<TuneIcon />}
            onClick={() => setShowFilters(!showFilters)}
            sx={{ mr: 2 }}
          >
            Filters
          </Button>

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={filters.sortBy}
              onChange={(e) =>
                setFilters({ ...filters, sortBy: e.target.value })
              }
            >
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="rating">Top Rated</MenuItem>
              <MenuItem value="distance">Nearest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {showFilters && (
        <Card
          sx={{
            p: 3,
            mb: 3,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" mb={2}>
            Filter Options
          </Typography>

          <Grid container spacing={3}>
            {/* Rating Filter */}
            <Grid item xs={12} md={6}>
              <Typography gutterBottom>
                Rating: {filters.rating[0]} - {filters.rating[1]} ⭐
              </Typography>
              <Slider
                value={filters.rating}
                onChange={(_, newValue) =>
                  setFilters({ ...filters, rating: newValue })
                }
                valueLabelDisplay="auto"
                min={0}
                max={5}
                step={0.5}
              />
            </Grid>

            {/* Distance Filter */}
            <Grid item xs={12} md={6}>
              <Typography gutterBottom>
                Distance: up to {filters.distance[1]} km
              </Typography>
              <Slider
                value={filters.distance[1]}
                onChange={(_, newValue) =>
                  setFilters({ ...filters, distance: [0, newValue] })
                }
                valueLabelDisplay="auto"
                min={0}
                max={10}
                step={0.5}
              />
            </Grid>
          </Grid>
        </Card>
      )}

      {/* Results */}
      <Box>
        {sortedRestaurants.length > 0 ? (
          sortedRestaurants.map((restaurant) => (
            <Grid item xs={12} key={restaurant.id} sx={{ my: 3 }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  height: { xs: "auto", md: "22vh" },
                  width: { xs: "auto", md: "100%" },
                }}
              >
                <CardMedia
                  component="img"
                  image={restaurant.image}
                  alt={restaurant.name}
                  sx={{
                    width: { xs: "100vw", md: "15vw" },
                    height: { xs: "40vh", md: "100%" },
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    p: 3,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {restaurant.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Rating
                      value={restaurant.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2" color="text.secondary" ml={1}>
                      ({restaurant.reviewCount}) • {restaurant.distance}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                    {restaurant.cuisine.map((item, index) => (
                      <Chip key={index} label={item} size="small" />
                    ))}
                  </Stack>
                  <Divider sx={{ my: 1 }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: "auto" }}
                  >
                    Menu matches: {restaurant.menuMatch.join(", ")}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              p: 4,
            }}
          >
            <Typography variant="h6">
              No results found for your search
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search or filters
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchPage;
