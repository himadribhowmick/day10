import React from "react";
import fastIcon from "../assets/Illustration.svg"; // your SVG file

const Hero = () => {
  return (
    <section className="text-center mt-16 px-4">
      <span className="text-sm bg-green-100 text-green-900 px-3 py-1 rounded-full">
        Fast. Secure. Hassle-free
      </span>

      <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
        <span className="flex items-center justify-center gap-3 flex-wrap">
          Get Paid Faster
          <img src={fastIcon} alt="Fast Icon" className="w-10 h-10 inline-block" />
          Instant Cash
        </span>
        <br />
        <span>for Businesses!</span>
      </h1>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Stop waiting months for credit card payments. CASA helps business owners
        access cash instantly by converting card transactions into immediate funds.
      </p>

      <button className="mt-6 bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-full">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
