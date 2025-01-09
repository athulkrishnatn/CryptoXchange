import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TrendingCoins from "./components/TrendingCoins";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 min-h-screen text-white">
      <Navbar />
      <Home />
      <TrendingCoins /> {/* Add this component */}
    </div>
  );
};

export default App;
