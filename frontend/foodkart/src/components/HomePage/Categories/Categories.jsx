import { Avatar, Box, Card, Typography, useTheme } from "@mui/material";
import React from "react";

function Categories() {
  const theme = useTheme();

  const categories = [
    { name: "Pizza", icon: "🍕" },
    { name: "Burger", icon: "🍔" },
    { name: "Sushi", icon: "🍣" },
    { name: "Pasta", icon: "🍝" },
    { name: "Salad", icon: "🥗" },
    { name: "Dessert", icon: "🍰" },
    { name: "Indian", icon: "🍛" },
    { name: "Chinese", icon: "🥡" },
  ];
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        color={theme.palette.primary.contrastText}
        variant="h6"
        fontWeight="bold"
        sx={{ mb: 2, ml: 1 }}
      >
        Food Categories
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          pb: 2,
          "&::-webkit-scrollbar": {
            height: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.grey[300],
            borderRadius: "3px",
          },
        }}
      >
        {categories.map((category, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 100,
              borderRadius: "12px",
              boxShadow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 3,
              },
            }}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                fontSize: "1.5rem",
                mb: 1,
                bgcolor: theme.palette.primary.light,
              }}
            >
              {category.icon}
            </Avatar>
            <Typography variant="body2" fontWeight="500">
              {category.name}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Categories;
