import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-5 border-b">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-30 h-30" />
        <h1 className="font-bold text-lg"><span className="font-normal"></span></h1>
      </div>
      <nav className="hidden md:flex gap-6 text-sm">
        <a href="#">Services</a>
        <a href="#">How it works</a>
        <a href="#">Why it's different</a>
        <a href="#">Reviews</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-green-100 text-primary rounded-full">Sign In</button>
        <button className="px-4 py-2 bg-black text-white rounded-full">Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
