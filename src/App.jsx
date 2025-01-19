import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TrendingCoins from "./components/TrendingCoins";
import Footer from "./components/Footer";
import NFT from "./pages/NFT";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 min-h-screen text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/NFT" element={<NFT />}  />

          
        </Routes>
        <TrendingCoins /> {/* Add this component */}
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
