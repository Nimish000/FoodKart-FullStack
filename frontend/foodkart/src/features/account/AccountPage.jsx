import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  TextField,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Edit as EditIcon,
  Home as HomeIcon,
  CreditCard as CreditCardIcon,
  History as HistoryIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";

const AccountPage = () => {
  // User data state
  const [user, setUser] = useState({
    name: "John Doe",
    mobile: "+91 9876543210",
    email: "john.doe@example.com",
    profilePic: "",
    address: {
      house: "123",
      apartment: "Green Valley Apartments",
      area: "MG Road",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001",
    },
  });

  // Edit mode state
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prev) => ({
          ...prev,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "background.default",
        p: { xs: 2, md: 4 },
      }}
    >
      {/* Main Content Container */}
      <Box
        sx={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: { md: "350px 1fr" },
          gap: 4,
        }}
      >
        {/* Left Sidebar - Profile Section */}
        <Box>
          <Card
            sx={{
              position: "sticky",
              top: 20,
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "background.paper",
              p: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                src={user.profilePic}
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "secondary.main",
                  fontSize: "2.5rem",
                  mr: 3,
                }}
              >
                {!user.profilePic && user.name.charAt(0)}
              </Avatar>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profile-pic-upload"
                type="file"
                onChange={handleProfilePicChange}
              />
              <label htmlFor="profile-pic-upload">
                <IconButton
                  sx={{
                    position: "relative",
                    bottom: 25,
                    right: 46,
                    backgroundColor: "background.paper",
                    boxShadow: 1,
                  }}
                  component="span"
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </label>
            </Box>

            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {user.mobile}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>

            <Button
              fullWidth
              variant="contained"
              startIcon={<EditIcon />}
              onClick={() => setEditMode(!editMode)}
              sx={{
                mt: 3,
                py: 1.5,
                backgroundColor: "secondary.main",
                "&:hover": { backgroundColor: "secondary.dark" },
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              {editMode ? "Cancel Editing" : "Edit Profile"}
            </Button>
          </Card>
        </Box>

        {/* Right Content Area */}
        <Box>
          {/* User Details Section */}
          {editMode ? (
            <Card
              sx={{
                mb: 4,
                borderRadius: 3,
                boxShadow: 3,
                p: 4,
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Edit Profile Details
              </Typography>

              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={user.mobile}
                disabled
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                sx={{ mb: 3 }}
              />

              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Address Information
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Box
                sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
              >
                <TextField
                  label="House No."
                  name="house"
                  value={user.address.house}
                  onChange={handleAddressChange}
                />
                <TextField
                  label="Apartment/Building"
                  name="apartment"
                  value={user.address.apartment}
                  onChange={handleAddressChange}
                />
                <TextField
                  label="Area/Street"
                  name="area"
                  value={user.address.area}
                  onChange={handleAddressChange}
                />
                <TextField
                  label="City"
                  name="city"
                  value={user.address.city}
                  onChange={handleAddressChange}
                />
                <TextField
                  label="State"
                  name="state"
                  value={user.address.state}
                  onChange={handleAddressChange}
                />
                <TextField
                  label="Pincode"
                  name="pincode"
                  value={user.address.pincode}
                  onChange={handleAddressChange}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={() => setEditMode(false)}
                  sx={{
                    px: 4,
                    py: 1.5,
                    backgroundColor: "secondary.main",
                    "&:hover": { backgroundColor: "secondary.dark" },
                  }}
                >
                  Save Changes
                </Button>
              </Box>
            </Card>
          ) : (
            <Card
              sx={{
                mb: 4,
                borderRadius: 3,
                boxShadow: 3,
                p: 3,
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Personal Information
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Full Name
                  </Typography>
                  <Typography>{user.name}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Mobile Number
                  </Typography>
                  <Typography>{user.mobile}</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Email Address
                  </Typography>
                  <Typography>{user.email}</Typography>
                </Box>
              </Box>

              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Default Address
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography>
                {user.address.house}, {user.address.apartment},{" "}
                {user.address.area}
                <br />
                {user.address.city}, {user.address.state} -{" "}
                {user.address.pincode}
              </Typography>
            </Card>
          )}

          {/* Account Sections Tabs */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              mb: 3,
              "& .MuiTabs-indicator": {
                backgroundColor: "secondary.main",
                height: 4,
                borderRadius: 4,
              },
            }}
          >
            <Tab
              label="Saved Addresses"
              icon={<HomeIcon />}
              sx={{
                textTransform: "none",
                color: activeTab === 0 ? "secondary.main" : "text.secondary",
                "&.Mui-selected": {
                  color: "secondary.main",
                },
              }}
            />
            <Tab
              label="Payment Methods"
              icon={<CreditCardIcon />}
              sx={{
                textTransform: "none",
                color: activeTab === 1 ? "red" : "text.secondary",
                "&.Mui-selected": {
                  color: "secondary.main",
                },
              }}
            />
            <Tab
              label="Order History"
              icon={<HistoryIcon />}
              sx={{
                textTransform: "none",
                color: activeTab === 2 ? "secondary.main" : "text.secondary",
                "&.Mui-selected": {
                  color: "secondary.main",
                },
              }}
            />
            <Tab
              label="Favorites"
              icon={<FavoriteIcon />}
              sx={{
                textTransform: "none",
                color: activeTab === 3 ? "secondary.main" : "text.secondary",
                "&.Mui-selected": {
                  color: "secondary.main",
                },
              }}
            />
          </Tabs>

          {/* Tab Content */}
          <Box>
            {activeTab === 0 && (
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    Saved Addresses
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    sx={{
                      textTransform: "none",
                      borderColor: "white",
                      color: "white",
                      "&:hover": {
                        borderColor: "secondary.main",
                        color: "secondary.main",
                      },
                    }}
                  >
                    Add New
                  </Button>
                </Box>

                <Divider sx={{ mb: 3 }} />

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { md: "1fr 1fr" },
                    gap: 3,
                  }}
                >
                  {/* Address Card */}
                  <Card
                    sx={{
                      border: "1px solid",
                      borderColor: "white",
                      p: 3,
                      borderRadius: 2,
                    }}
                  >
                    <Typography fontWeight="bold" gutterBottom>
                      Home Address
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {user.address.house}, {user.address.apartment}
                      <br />
                      {user.address.area}, {user.address.city}
                      <br />
                      {user.address.state} - {user.address.pincode}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <IconButton size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Card>

                  {/* Add New Address Card */}
                  <Card
                    sx={{
                      border: "1px dashed",
                      borderColor: "text.disabled",
                      p: 3,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      height: "100%",
                      "&:hover": {
                        borderColor: "secondary.main",
                        color: "secondary.main",
                      },
                    }}
                  >
                    <Typography sx={{}}>+ Add New Address</Typography>
                  </Card>
                </Box>
              </Card>
            )}

            {activeTab === 1 && (
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Payment Methods
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { md: "1fr 1fr" },
                    gap: 3,
                  }}
                >
                  <Card
                    sx={{
                      border: "1px solid",
                      borderColor: "white",
                      p: 3,
                      borderRadius: 2,
                    }}
                  >
                    <Typography fontWeight="bold" gutterBottom>
                      UPI Payment
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      john.doe@upi
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <IconButton size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Card>

                  <Card
                    sx={{
                      border: "1px dashed",
                      borderColor: "text.disabled",
                      p: 3,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      height: "100%",
                      "&:hover": {
                        borderColor: "secondary.main",
                        color: "secondary.main",
                      },
                    }}
                  >
                    <Typography sx={{}}>+ Add New Payment Method</Typography>
                  </Card>
                </Box>
              </Card>
            )}

            {activeTab === 2 && (
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Order History
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 6,
                  }}
                >
                  <HistoryIcon
                    sx={{
                      fontSize: 60,
                      color: "text.disabled",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" color="text.disabled" gutterBottom>
                    No Orders Yet
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Your orders will appear here
                  </Typography>
                </Box>
              </Card>
            )}

            {activeTab === 3 && (
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 3,
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Favorites
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 6,
                  }}
                >
                  <FavoriteIcon
                    sx={{
                      fontSize: 60,
                      color: "text.disabled",
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" color="text.disabled" gutterBottom>
                    No Favorites Yet
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Your favorite items will appear here
                  </Typography>
                </Box>
              </Card>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountPage;
