import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-blue-900 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Brand and Description */}
        <div className="footer-brand w-full md:w-1/3">
          <h2 className="text-3xl font-semibold mb-4 text-cyan-400">CryptoXchange</h2>
          <p className="text-lg mb-6">
            CryptoXchange is your gateway to the world of cryptocurrencies. Trade your favorite digital assets in a secure and efficient environment. 
            Whether you're a seasoned investor or just getting started, we offer an intuitive platform to make trading simple and enjoyable.
          </p>
          <p className="text-sm text-gray-500">
            Stay ahead in the crypto market with real-time data, market insights, and secure transactions. 
            Join us today and start trading with confidence.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links w-full md:w-1/3">
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-lg">
            <li><a href="#features" className="hover:text-cyan-400">Features</a></li>
            <li><a href="#pricing" className="hover:text-cyan-400">Pricing</a></li>
            <li><a href="#faq" className="hover:text-cyan-400">FAQ</a></li>
            <li><a href="#about" className="hover:text-cyan-400">About Us</a></li>
          </ul>
        </div>

        {/* Market Information */}
        <div className="market-info w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">About the Market</h3>
          <p className="text-sm mb-6">
            The cryptocurrency market is a rapidly evolving sector, with new opportunities emerging every day. 
            At CryptoXchange, we provide comprehensive tools and resources to help you navigate this dynamic market.
          </p>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 text-lg">
            <li><a href="#market-trends" className="hover:text-cyan-400">Market Trends</a></li>
            <li><a href="#market-analysis" className="hover:text-cyan-400">Market Analysis</a></li>
            <li><a href="#news" className="hover:text-cyan-400">Crypto News</a></li>
            <li><a href="#guides" className="hover:text-cyan-400">Trading Guides</a></li>
            <li><a href="#security" className="hover:text-cyan-400">Security Tips</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom text-center mt-10 text-sm text-gray-400">
        <p>&copy; 2025 CryptoXchange. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
