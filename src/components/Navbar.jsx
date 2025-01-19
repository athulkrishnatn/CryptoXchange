import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using React Router for navigation

const Navbar = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  
  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
    // Handle any currency-related logic here (e.g., updating the displayed prices)
  };

  return (
    <div className="bg-gradient-to-r from-black to-blue-900 fixed w-full z-10">
      <div className="flex items-center justify-between px-6 pt-1">
        {/* Logo with Link to Home */}
        <div className="logo flex items-center text-xl font-semibold ps-6 text-white">
          <Link to="/" className="flex items-center text-white no-underline">
            <i className="fa-brands fa-ethereum text-white me-2"></i>
            CryptoXchange
          </Link>
        </div>

       

        {/* Currency Selector and Login Button */}
        <div className="loginbutton pt-1 text-base space-x-3 text-white me-5">
          <select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="bg-transparent text-white px-2 py-1 rounded"
          >
            <option className="text-black" value="USD">USD</option>
            <option className="text-black" value="EUR">EUR</option>
            <option className="text-black" value="INR">INR</option>
          </select>
          <button className="bg-white text-blue-800 px-3 py-1 rounded-lg font-medium">
            Login
          </button>
          <i className="fa-solid fa-right-to-bracket me-4"></i>
        </div>
      </div>

      <div className="border-b border-gray-700 pt-2"></div>
    </div>
  );
};

export default Navbar;
