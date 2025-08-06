import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
function Footer() {
  return (
    <footer className="bg-black text-gray-300 2 pb-8">
      <div className="bg-red-800 h-0.5 "></div>
      <div className="container mx-auto px-4 pt-5 border-red-800">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Food<span className="text-red-800">Kart</span>
            </h3>
            <p className="mb-4">
              Your favorite food delivered hot & fresh to your doorstep. Order
              from the best restaurants in town.
            </p>
            <div className="flex space-x-6 text-xl">
              <a
                href="#"
                className="text-gray-400 hover:text-red-800 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-800 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-800 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-800 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-800 transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  Deals & Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          {/* Help & Support */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">
              Help & Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-800 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="text-red-800 mr-3" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-red-800 mr-3" />
                <span>support@foodkart.com</span>
              </li>
              <li className="flex items-center">
                <FiClock className="text-red-800 mr-3" />
                <span>9:00 AM - 11:00 PM (Daily)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-800 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} FoodKart. All Rights Reserved.</p>
          <p className="mt-2">Made with ❤️ in India</p>
        </div>
        {/* Mobile App Badges */}
      </div>
    </footer>
  );
}
export default Footer;
