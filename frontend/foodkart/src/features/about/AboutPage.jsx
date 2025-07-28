import React from "react";
import { FaLeaf, FaAward, FaShip, FaHeart } from "react-icons/fa";
import { GiMeal, GiCook } from "react-icons/gi";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <img
          src="https://placehold.co/1920x600"
          alt="Chefs preparing food in a modern restaurant kitchen"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Our <span className="text-amber-500">Story</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            From humble beginnings to becoming your favorite food delivery
            service
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-12">
        {/* About Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Welcome to <span className="text-amber-500">FoodKart</span>
          </h2>
          <p className="text-lg mb-6">
            Founded in 2020, FoodKart began as a simple idea: make great food
            accessible to everyone. What started as a small team delivering
            meals within a single neighborhood has grown into one of the leading
            food delivery platforms in the country.
          </p>
          <p className="text-lg mb-6">
            Today, we partner with over 5,000 restaurants across 20+ cities,
            delivering millions of meals while maintaining the personal touch
            that made us special from the beginning.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="bg-gray-800 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Our <span className="text-amber-500">Mission</span> & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-amber-500 text-3xl">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Quality Ingredients
              </h3>
              <p>
                We partner with restaurants that share our commitment to fresh,
                high-quality ingredients.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-amber-500 text-3xl">
                <FaHeart />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Customer Happiness
              </h3>
              <p>
                Your satisfaction is our top priority - and we go the extra mile
                to prove it.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-amber-500 text-3xl">
                <FaShip />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Fast Delivery
              </h3>
              <p>
                We guarantee your food arrives hot and fresh when promised - or
                it's on us.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Meet Our <span className="text-amber-500">Team</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={`https://placehold.co/600x600?text=Team+${item}`}
                  alt={`Team member ${item} portrait`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white">
                    Team Member {item}
                  </h3>
                  <p className="text-amber-500 mb-2">Position {item}</p>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Why Choose <span className="text-amber-500">FoodKart</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="text-amber-500 text-2xl mr-4 mt-1">
                <GiCook />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Curated Restaurant Partners
                </h3>
                <p>
                  Every restaurant on FoodKart goes through our rigorous
                  selection process to ensure they meet our high standards for
                  quality, hygiene, and taste.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-2xl mr-4 mt-1">
                <GiMeal />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Diverse Cuisines
                </h3>
                <p>
                  From local favorites to international cuisine, we bring the
                  world's flavors to your doorstep with authentic recipes
                  prepared by expert chefs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-2xl mr-4 mt-1">
                <FaAward />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Award-Winning Service
                </h3>
                <p>
                  Recognized as "Best Food Delivery Service" for three
                  consecutive years, our commitment to excellence never wavers.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-amber-500 text-2xl mr-4 mt-1">
                <FaShip />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Eco-Friendly Packaging
                </h3>
                <p>
                  All our deliveries use sustainable, biodegradable packaging to
                  minimize our environmental footprint while keeping your food
                  fresh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
