import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function LandingPageFooter() {
  return (
    <footer className="bg-black text-gray-300">
      {/* Red top border */}
      <div className="bg-red-800 h-0.5 w-full"></div>

      {/* Main Row Footer Content */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Branding and Socials */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h3 className="text-2xl font-bold text-white">
            Food<span className="text-red-800">Kart</span>
          </h3>

          <div className="flex space-x-4 text-xl mt-2 md:mt-0">
            <a href="#" className="hover:text-red-800 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-red-800 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-800 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-800 transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-red-800 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} FoodKart. All Rights Reserved.</p>
          <p className="mt-1">Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}

export default LandingPageFooter;
