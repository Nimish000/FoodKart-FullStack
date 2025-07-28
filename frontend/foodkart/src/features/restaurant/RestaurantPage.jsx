import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaClock,
  FaUtensils,
  FaMapMarkerAlt,
  FaPhone,
  FaShoppingCart,
} from "react-icons/fa";

const RestaurantPage = ({ match }) => {
  const [restaurant, setRestaurant] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Mock data - replace with API call in real implementation
  useEffect(() => {
    const mockRestaurants = [
      {
        id: "1",
        name: "Spice Route",
        cuisine: "Indian",
        rating: 4.5,
        deliveryTime: "25-35 min",
        minOrder: 150,
        costForTwo: 400,
        address: "123 Food Street, Mumbai",
        phone: "+91 9876543210",
        image: "https://placehold.co/800x500?text=Spice+Route",
        categories: [
          "Starters",
          "Main Course",
          "Breads",
          "Desserts",
          "Beverages",
        ],
        menu: {
          Starters: [
            {
              id: 1,
              name: "Paneer Tikka",
              description: "Cottage cheese marinated in spices and grilled",
              price: 220,
              veg: true,
            },
            {
              id: 2,
              name: "Chicken 65",
              description: "Spicy deep fried chicken appetizer",
              price: 260,
              veg: false,
            },
            {
              id: 3,
              name: "Gobi Manchurian",
              description: "Crispy cauliflower in manchurian sauce",
              price: 180,
              veg: true,
            },
          ],
          "Main Course": [
            {
              id: 4,
              name: "Butter Chicken",
              description: "Tandoori chicken in rich tomato gravy",
              price: 320,
              veg: false,
            },
            {
              id: 5,
              name: "Paneer Butter Masala",
              description: "Cottage cheese in creamy tomato gravy",
              price: 280,
              veg: true,
            },
            {
              id: 6,
              name: "Dal Makhani",
              description: "Black lentils slow cooked with butter",
              price: 240,
              veg: true,
            },
          ],
          Breads: [
            { id: 7, name: "Garlic Naan", price: 60, veg: true },
            { id: 8, name: "Butter Roti", price: 30, veg: true },
            { id: 9, name: "Tandoori Paratha", price: 50, veg: true },
          ],
          Desserts: [
            {
              id: 10,
              name: "Gulab Jamun",
              description: "Deep fried milk balls in sugar syrup",
              price: 120,
              veg: true,
            },
            {
              id: 11,
              name: "Kheer",
              description: "Rice pudding with dry fruits",
              price: 100,
              veg: true,
            },
          ],
          Beverages: [
            { id: 12, name: "Masala Chai", price: 50, veg: true },
            { id: 13, name: "Mango Lassi", price: 80, veg: true },
          ],
        },
      },
    ];

    const foundRestaurant = mockRestaurants.map((prev) => prev);

    // const foundRestaurant = mockRestaurants.find(
    //   (r) => r.id === match.params.id
    // );
    console.log(foundRestaurant);
    setRestaurant(foundRestaurant);
    console.log(restaurant);
  }, []);

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity }]);
    alert(`${item.name} added to cart!`);
    setQuantity(1);
  };

  if (!restaurant) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Restaurant Hero Section */}
      <div className="relative">
        <img
          src={restaurant.image}
          alt={`${restaurant.name} restaurant`}
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center mt-2 gap-4">
              <div className="flex items-center">
                <FaStar className="text-amber-500 mr-1" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="flex items-center">
                <FaUtensils className="text-gray-400 mr-1" />
                <span>{restaurant.cuisine}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-gray-400 mr-1" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center">
                <span>₹{restaurant.costForTwo} for two</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info & Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Details */}
          <div className="md:col-span-2">
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">About the restaurant</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>{restaurant.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClock className="text-amber-500 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold">Average Delivery Time</h3>
                    <p>{restaurant.deliveryTime}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-amber-500 mr-2">₹</div>
                  <div>
                    <h3 className="font-semibold">Minimum Order</h3>
                    <p>₹{restaurant.minOrder}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-amber-500 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold">Call</h3>
                    <p>{restaurant.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Categories */}
            <div className="sticky top-0 bg-gray-900 py-4 z-10">
              <div className="flex overflow-x-auto pb-2 space-x-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    activeCategory === "all"
                      ? "bg-amber-600 text-white"
                      : "bg-gray-800"
                  }`}
                >
                  All Items
                </button>
                {restaurant[0].categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-amber-600 text-white"
                        : "bg-gray-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className="mt-6 space-y-6">
              {Object.entries(restaurant[0].menu)
                .filter(
                  ([category]) =>
                    activeCategory === "all" || activeCategory === category
                )
                .map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-xl font-bold mb-4">{category}</h3>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="bg-gray-800 rounded-lg p-4 flex justify-between items-start"
                        >
                          <div className="flex-1">
                            <div className="flex items-start">
                              {item.veg !== undefined && (
                                <div
                                  className={`border rounded-full w-4 h-4 mt-1 mr-2 ${
                                    item.veg
                                      ? "border-green-500"
                                      : "border-red-500"
                                  }`}
                                >
                                  <div
                                    className={`rounded-full w-2 h-2 mx-auto mt-0.5 ${
                                      item.veg ? "bg-green-500" : "bg-red-500"
                                    }`}
                                  ></div>
                                </div>
                              )}
                              <div>
                                <h4 className="font-bold">{item.name}</h4>
                                {item.description && (
                                  <p className="text-gray-400 text-sm mt-1">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="font-bold mr-4">
                              ₹{item.price}
                            </span>
                            <button
                              onClick={() => addToCart(item)}
                              className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded-full flex items-center"
                            >
                              <FaShoppingCart className="mr-2" />
                              Add
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Cart Summary (Desktop) */}
          <div className="hidden md:block">
            <div className="sticky top-24 bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Your Order</h2>
              {cart.length === 0 ? (
                <p className="text-gray-400">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-400 text-sm block">
                            × {item.quantity}
                          </span>
                        </div>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pt-4 mb-6">
                    <div className="flex justify-between font-bold">
                      <span>Subtotal</span>
                      <span>
                        ₹
                        {cart.reduce(
                          (sum, item) => sum + item.price * item.quantity,
                          0
                        )}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-bold">
                    Proceed to Checkout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cart Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4">
        <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-bold flex justify-center items-center">
          <FaShoppingCart className="mr-2" />
          {cart.length > 0 ? (
            <span>
              View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)}{" "}
              items)
            </span>
          ) : (
            <span>Your Cart is Empty</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default RestaurantPage;
