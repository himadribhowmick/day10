import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Trusted />
      <Footer />
    </div>
  );
}

export default App;
