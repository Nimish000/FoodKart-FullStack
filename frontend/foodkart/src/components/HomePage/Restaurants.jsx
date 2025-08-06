import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Restaurants({ data, title }) {
  const theme = useTheme();

  return (
    <Box sx={{ width: "90vw", maxWidth: "1200px", mx: "auto" }}>
      <Typography
        variant="h6"
        color={theme.palette.primary.contrastText}
        fontWeight="bold"
        sx={{
          mb: 2,
          ml: 1,
          fontSize: "clamp(1.1rem, 3vw, 1.5rem)", // Responsive font size
        }}
      >
        {title}
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          minHeight: "50vh",
          height: "auto",
          mb: "3vh",
        }}
      >
        {data.map((restaurant) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={restaurant.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto", // Allow height to adjust based on content
            }}
          >
            <Card
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: 2,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100%", // Ensure card takes full height of grid item
              }}
            >
              {/* Deal Badge */}
              {restaurant.deal && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: 1,
                  }}
                >
                  <Chip
                    label={restaurant.deal}
                    color="secondary"
                    size="small"
                    sx={{
                      fontWeight: "bold",
                      boxShadow: 1,
                    }}
                  />
                </Box>
              )}

              {/* Restaurant Image */}
              <CardMedia
                component="img"
                image={restaurant.image}
                alt={restaurant.name}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: { xs: "150px", sm: "180px", md: "200px" }, // Adjust height for different screen sizes
                }}
              />

              <CardContent sx={{ flex: 1 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}
                  >
                    {restaurant.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Rating
                      value={restaurant.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1, fontSize: "0.8rem" }}
                    >
                      ({restaurant.reviewCount})
                    </Typography>
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ mt: 1 }}
                >
                  <LocationOnIcon color="primary" sx={{ fontSize: "1rem" }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.8rem" }}
                  >
                    {restaurant.address}
                  </Typography>
                </Stack>

                {/* Show delivery time and min order only on sm and up */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    mt: "auto",
                    pt: 1,
                    borderTop: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.8rem",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    🚚 {restaurant.deliveryTime}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "0.8rem",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    Min order: {restaurant.minOrder}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Restaurants;
