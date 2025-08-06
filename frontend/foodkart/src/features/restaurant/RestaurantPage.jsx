import React, { useState } from "react";
import {
  Box,
  Typography,
  CardMedia,
  Rating,
  Chip,
  Divider,
  Button,
  Grid,
  Paper,
  Tabs,
  Tab,
  IconButton,
  Badge,
  useTheme,
} from "@mui/material";
import {
  LocationOn,
  LocalOffer,
  AccessTime,
  ShoppingCart,
  Remove,
  Add,
} from "@mui/icons-material";

// Sample restaurant data
const restaurant = {
  id: 1,
  name: "Taj Mahal Restaurant",
  rating: 4.7,
  reviewCount: 342,
  address: "123 Main Street, City Center, Mumbai 400001",
  cuisines: ["North Indian", "Mughlai", "Biryani"],
  deliveryTime: "30-45 min",
  minOrder: "₹200",
  offers: ["20% off on orders above ₹500", "Free delivery on first order"],
  image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",

  menu: {
    Starters: [
      {
        id: 1,
        name: "Veg Spring Rolls",
        description: "Crispy vegetable rolls with schezwan sauce",
        price: 220,
        veg: true,
      },
      {
        id: 2,
        name: "Chicken Tikka",
        description: "Tandoori roasted chicken pieces",
        price: 280,
        veg: false,
      },
    ],
    Breads: [
      {
        id: 3,
        name: "Butter Naan",
        description: "Soft bread brushed with butter",
        price: 60,
        veg: true,
      },
      {
        id: 4,
        name: "Garlic Naan",
        description: "Naan stuffed with garlic butter",
        price: 80,
        veg: true,
      },
    ],
    "Main Course": [
      {
        id: 5,
        name: "Paneer Butter Masala",
        description: "Cottage cheese in rich tomato gravy",
        price: 320,
        veg: true,
      },
      {
        id: 6,
        name: "Chicken Biryani",
        description: "Aromatic rice with chicken pieces",
        price: 380,
        veg: false,
      },
    ],
    Desserts: [
      {
        id: 7,
        name: "Gulab Jamun",
        description: "2 pieces of fried milk balls in sugar syrup",
        price: 120,
        veg: true,
      },
    ],
  },
};

function RestaurantPage() {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === itemId);
      if (existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== itemId);
      }
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      {/* Restaurant Header */}
      <CardMedia
        component="img"
        image={restaurant.image}
        alt={restaurant.name}
        sx={{ objectFit: "cover", height: "40vh", width: "80vw" }}
      />

      <Box
        sx={{
          p: 3,
          width: "80vw",
          mx: "auto",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} sx={{ width: { md: "65%", xs: "90vw" } }}>
            {/* Restaurant Info */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                color={theme.palette.secondary.contrastText}
              >
                {restaurant.name}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Rating value={restaurant.rating} precision={0.1} readOnly />
                <Typography
                  variant="body1"
                  sx={{ ml: 1, color: theme.palette.secondary.contrastText }}
                >
                  {restaurant.rating} ({restaurant.reviewCount} ratings)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn
                  sx={{ color: theme.palette.secondary.contrastText }}
                />
                <Typography
                  sx={{ ml: 1, color: theme.palette.secondary.contrastText }}
                >
                  {restaurant.address}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AccessTime
                  sx={{ color: theme.palette.secondary.contrastText }}
                />
                <Typography
                  sx={{ ml: 1, color: theme.palette.secondary.contrastText }}
                >
                  Delivery in {restaurant.deliveryTime}
                </Typography>
                <Typography
                  sx={{ ml: 2, color: theme.palette.secondary.contrastText }}
                >
                  • Min order: {restaurant.minOrder}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                {restaurant.cuisines.map((cuisine, index) => (
                  <Chip
                    key={index}
                    label={cuisine}
                    color={theme.palette.primary.contrastText}
                    variant="outlined"
                  />
                ))}
              </Box>

              {restaurant.offers && restaurant.offers.length > 0 && (
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    mb: 3,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    color={theme.palette.secondary.contrastText}
                  >
                    <LocalOffer
                      sx={{
                        color: theme.palette.secondary.contrastText,
                        verticalAlign: "middle",
                        mr: 1,
                      }}
                    />
                    Offers
                  </Typography>
                  <ul>
                    {restaurant.offers.map((offer, index) => (
                      <li key={index}>
                        <Typography
                          color={theme.palette.secondary.contrastText}
                        >
                          {offer}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Paper>
              )}
            </Box>

            {/* Menu Categories */}
            <Box sx={{ borderBottom: 1, borderColor: "transparent" }}>
              <Tabs
                value={activeCategory}
                onChange={(e, newValue) => setActiveCategory(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  bgcolor: theme.palette.background.paper,
                }}
              >
                {Object.keys(restaurant.menu).map((category) => (
                  <Tab
                    key={category}
                    label={category}
                    value={category}
                    sx={{
                      color:
                        activeCategory === category
                          ? theme.palette.secondary.contrastText
                          : "grey",
                      borderBottom:
                        activeCategory === category
                          ? `2px solid ${theme.palette.secondary.main}`
                          : "none",
                      "&.Mui-selected": {
                        color: theme.palette.secondary.contrastText, // Active tab color
                      },
                      // "&:hover": {
                      //   color: theme.palette.secondary.main,
                      // },
                    }}
                  />
                ))}
              </Tabs>
            </Box>

            {/* Menu Items */}
            <Box mt={2}>
              {restaurant.menu[activeCategory].map((item) => (
                <Paper
                  key={item.id}
                  elevation={0}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 2,
                    bgcolor: theme.palette.background.paper,
                    width: { xs: "100%", md: "100%" },
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={8} sx={{ width: { md: "40%", xs: "60%" } }}>
                      {item.veg ? (
                        <Typography variant="caption" color="green">
                          🟢 VEG
                        </Typography>
                      ) : (
                        <Typography variant="caption" color="red">
                          🔴 NON-VEG
                        </Typography>
                      )}
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color={theme.palette.secondary.contrastText}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={theme.palette.secondary.contrastText}
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="h6"
                        mt={1}
                        color={theme.palette.secondary.contrastText}
                      >
                        ₹{item.price}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      {cart.some((cartItem) => cartItem.id === item.id) ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            borderRadius: 2,
                            p: "4px 8px",
                          }}
                        >
                          <IconButton
                            size="small"
                            sx={{ color: theme.palette.secondary.contrastText }}
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Remove fontSize="small" />
                          </IconButton>
                          <Typography mx={1}>
                            {
                              cart.find((cartItem) => cartItem.id === item.id)
                                .quantity
                            }
                          </Typography>
                          <IconButton
                            size="small"
                            sx={{ color: theme.palette.secondary.contrastText }}
                            onClick={() => addToCart(item)}
                          >
                            <Add
                              sx={{
                                color: theme.palette.secondary.contrastText,
                              }}
                              fontSize="small"
                            />
                          </IconButton>
                        </Box>
                      ) : (
                        <Button
                          variant="outlined"
                          onClick={() => addToCart(item)}
                          startIcon={<Add />}
                          sx={{
                            color: theme.palette.primary.contrastText,
                            borderColor: theme.palette.primary.contrastText,
                          }}
                        >
                          Add
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Box>
          </Grid>

          {/* Cart Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                width: { md: "20vw", xs: "60vw" },
                p: 2,
                position: "relative",
                top: "20px",
                bgcolor: theme.palette.background.paper,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={theme.palette.secondary.contrastText}
                >
                  Your Order
                </Typography>
                <Badge badgeContent={totalItems} color="primary">
                  <ShoppingCart color="action" />
                </Badge>
              </Box>

              {cart.length === 0 ? (
                <Typography
                  textAlign="center"
                  color={theme.palette.secondary.contrastText}
                  py={2}
                >
                  Your cart is empty
                </Typography>
              ) : (
                <>
                  {cart.map((item) => (
                    <Box
                      key={item.id}
                      sx={{
                        mb: 2,
                        pb: 2,
                        borderBottom: 1,
                        borderColor: "divider",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          fontWeight="bold"
                          color={theme.palette.secondary.contrastText}
                        >
                          {item.name} × {item.quantity}
                        </Typography>
                        <Typography
                          color={theme.palette.secondary.contrastText}
                        >
                          ₹{item.price * item.quantity}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 1 }}>
                        <IconButton
                          size="small"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                        <Typography variant="body2" component="span" mx={1}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          size="small"
                          onClick={() => addToCart(item)}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  ))}

                  <Divider sx={{ my: 2 }} />

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      fontWeight="bold"
                      color={theme.palette.secondary.contrastText}
                    >
                      Subtotal
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      color={theme.palette.secondary.contrastText}
                    >
                      ₹{subtotal}
                    </Typography>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ mt: 3 }}
                    disabled={cart.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default RestaurantPage;
