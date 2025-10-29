import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react"; // icons for open/close menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-4 border-b shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-151px h-56.37px md:w-12 md:h-12" />
        
      </div>

      {/* Middle: Nav Links (hidden on mobile) */}
      <nav className="hidden md:flex gap-8 text-sm lg:text-base text-gray-700">
        <a href="#services" className="hover:text-black transition">Services</a>
        <a href="#how" className="hover:text-black transition">How it works</a>
        <a href="#different" className="hover:text-black transition">Why it's different</a>
        <a href="#reviews" className="hover:text-black transition">Reviews</a>
        <a href="#pricing" className="hover:text-black transition">Pricing</a>
        <a href="#contact" className="hover:text-black transition">Contact</a>
      </nav>

      {/* Right: Buttons */}
      <div className="hidden md:flex gap-4">
        <button className="px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200">
          Sign In
        </button>
        <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md md:hidden">
          <nav className="flex flex-col items-center gap-4 py-6 text-gray-800">
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#how" onClick={() => setIsOpen(false)}>How it works</a>
            <a href="#different" onClick={() => setIsOpen(false)}>Why it's different</a>
            <a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
                Sign In
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-full">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
