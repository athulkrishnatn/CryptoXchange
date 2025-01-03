import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-800 fixed w-full z-10">
      <div className="flex items-center justify-between px-6 pt-1">
        {/* Logo with Icon */}
        <div className="logo flex items-center text-xl font-semibold ps-6 text-white">
          <i className="fa-brands fa-ethereum text-white me-2"></i>
          CryptoXchange
        </div>

        {/* Navigation Items */}
        <div className="flex-grow pt-1 text-base">
          <ul className="flex justify-center space-x-10 ml-[-20px] text-white">
            <li>Coins</li>
            <li>Markets</li>
            <li>Wallet</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="loginbutton pt-1 text-base space-x-3 text-white me-5">
          <select
            name=""
            id=""
            className="bg-transparent text-white px-2 py-1 rounded"
          >
            <option className="text-black" value="USD">USD</option>
            <option className="text-black" value="EUR">EUR</option>
            <option className="text-black" value="INR">INR</option>
          </select>
          <button className="bg-white text-blue-800 px-4 py-1 rounded">
            Login
          </button>
        </div>
        <div className="mx-1 mt-1 text-white me-10">
          <i className="fa-solid fa-right-to-bracket"></i>
        </div>
      </div>

      <div className="border-b border-gray-700 pt-2"></div>
    </div>
  );
};

export default Navbar;
