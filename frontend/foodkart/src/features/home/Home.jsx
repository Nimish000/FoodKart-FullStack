import React, { useState } from "react";
import {
  FaStar,
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaFire,
  FaBolt,
  FaLeaf,
} from "react-icons/fa";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";

function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: <FaFire className="inline mr-1" /> },
    {
      id: "fast",
      name: "Fast Delivery",
      icon: <FaBolt className="inline mr-1" />,
    },
    {
      id: "healthy",
      name: "Healthy",
      icon: <FaLeaf className="inline mr-1" />,
    },
    { id: "indian", name: "Indian" },
    { id: "chinese", name: "Chinese" },
    { id: "italian", name: "Italian" },
    { id: "desserts", name: "Desserts" },
  ];

  const restaurants = [
    {
      id: 1,
      name: "Spice Route",
      cuisine: "Indian",
      rating: 4.5,
      deliveryTime: "25-35 min",
      image: "https://placehold.co/400x300?text=Spice+Route",
      featured: true,
      discount: "20% OFF",
    },
    {
      id: 2,
      name: "Dragon Wok",
      cuisine: "Chinese",
      rating: 4.2,
      deliveryTime: "20-30 min",
      image: "https://placehold.co/400x300?text=Dragon+Wok",
      featured: false,
      discount: "10% OFF",
    },
    {
      id: 3,
      name: "Pasta Bella",
      cuisine: "Italian",
      rating: 4.7,
      deliveryTime: "30-45 min",
      image: "https://placehold.co/400x300?text=Pasta+Bella",
      featured: true,
      discount: "15% OFF",
    },
    {
      id: 4,
      name: "FreshBite",
      cuisine: "Healthy",
      rating: 4.8,
      deliveryTime: "15-25 min",
      image: "https://placehold.co/400x300?text=FreshBite",
      featured: false,
      discount: null,
    },
  ];

  const deals = [
    {
      id: 1,
      title: "Weekend Special",
      description: "Get 30% off on orders above ₹300",
      code: "WEEKEND30",
      image: "https://placehold.co/600x300?text=Weekend+Special",
    },
    {
      id: 2,
      title: "First Order",
      description: "50% off up to ₹100 on your first order",
      code: "FIRST50",
      image: "https://placehold.co/600x300?text=First+Order",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* <Header /> */}

      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-gray-800 to-gray-700 overflow-hidden">
        <img
          src="https://placehold.co/1920x768"
          alt="Delicious food spread with various cuisines"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-amber-500">Craving</span> something delicious?
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Order from the best restaurants in your city and get it delivered to
            your doorstep
          </p>
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Enter your delivery address..."
              className="w-full py-4 px-6 rounded-full bg-gray-800 bg-opacity-90 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-amber-600 px-6 py-2 rounded-full font-medium hover:bg-amber-700 transition-colors">
              Find Food
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center ${
                activeCategory === category.id
                  ? "bg-amber-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.icon && category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Restaurants */}
        <h2 className="text-3xl font-bold mb-8">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {restaurants
            .filter((r) => r.featured)
            .map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {restaurant.discount && (
                  <div className="absolute bg-amber-600 text-white px-3 py-1 rounded-br-lg font-bold">
                    {restaurant.discount}
                  </div>
                )}
                <img
                  src={restaurant.image}
                  alt={`${restaurant.name} restaurant`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{restaurant.name}</h3>
                  <p className="text-gray-400 mb-2">{restaurant.cuisine}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-amber-400">
                      <FaStar className="mr-1" />
                      <span>{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <FaClock className="mr-1" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Deals & Offers */}
        <h2 className="text-3xl font-bold mb-8">Deals & Offers</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="relative rounded-xl overflow-hidden h-48"
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {deal.title}
                </h3>
                <p className="text-gray-200 mb-4">{deal.description}</p>
                <div className="bg-gray-900 bg-opacity-80 inline-block px-4 py-2 rounded-full">
                  <span className="font-mono text-amber-400">
                    Use code: {deal.code}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Restaurants */}
        <h2 className="text-3xl font-bold mb-8">Popular Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {restaurant.discount && (
                <div className="absolute bg-amber-600 text-white px-3 py-1 rounded-br-lg font-bold">
                  {restaurant.discount}
                </div>
              )}
              <img
                src={restaurant.image}
                alt={`${restaurant.name} restaurant`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{restaurant.name}</h3>
                <p className="text-gray-400 mb-2">{restaurant.cuisine}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-amber-400">
                    <FaStar className="mr-1" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <FaClock className="mr-1" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl text-amber-500">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Restaurant</h3>
              <p>Browse through hundreds of restaurants near you</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl text-amber-500">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Select Your Food</h3>
              <p>Choose your favorite dishes from the menu</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl text-amber-500">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery or Pickup</h3>
              <p>Get your food delivered fast or pick it up yourself</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
