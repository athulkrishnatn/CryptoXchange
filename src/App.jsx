import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TrendingCoins from "./components/TrendingCoins";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 min-h-screen text-white">
      <Navbar />
      <Home />
      <TrendingCoins /> {/* Add this component */}
      <Footer/>
    </div>
  );
};

export default App;
