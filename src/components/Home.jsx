import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 min-h-screen">
      <div className="container mx-auto pt-[150px] text-center">
        <h1 className="text-[65px] font-extrabold leading-[80px] text-white">
          Pioneering the Evolution of <br /> Blockchain Markets
        </h1>
        <p className="pt-3 text-xl text-gray-300">
          Join the CryptoXchange community today and unlock a world of possibilities in blockchain trading. <br />
          Sign up now to experience secure, seamless, and innovative crypto transactions!
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Search Crypto..."
            className="w-[300px] px-4 py-2 rounded-l-sm"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-r-sm hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>
      <div className="text-white mt-11 ms-5 text-left">
        <h1 className="text-3xl font-light">Today's Cryptocurrency Prices by Market Cap</h1>
        <p className="text-gray-300 ms-1">
          The global crypto market cap is <span className="text-green-400">$3.43T</span>, a <span className="text-green-400">0.57%</span> increase over the last day.
        </p>
      </div>
      <div className="mt-5 px-4">
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-700 text-white">
            <thead>
              <tr className="bg-blue-800">
                <th className="px-4 py-2 border border-gray-600">#</th>
                <th className="px-4 py-2 border border-gray-600">Coin</th>
                <th className="px-4 py-2 border border-gray-600">Price</th>
                <th className="px-4 py-2 border border-gray-600">Volume</th>
                <th className="px-4 py-2 border border-gray-600">Circulating Supply</th>
                <th className="px-4 py-2 border border-gray-600">24H Change</th>
                <th className="px-4 py-2 border border-gray-600">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800 hover:bg-gray-700">
                <td className="px-4 py-2 border border-gray-600">1</td>
                <td className="px-4 py-2 border border-gray-600">Bitcoin</td>
                <td className="px-4 py-2 border border-gray-600">Bitcoin</td>
                <td className="px-4 py-2 border border-gray-600">Bitcoin</td>
                <td className="px-4 py-2 border border-gray-600">$27,000</td>
                <td className="px-4 py-2 border border-gray-600 text-green-400">+2.5%</td>
                <td className="px-4 py-2 border border-gray-600">$1.2T</td>
              </tr>
              <tr className="bg-gray-800 hover:bg-gray-700">
                <td className="px-4 py-2 border border-gray-600">2</td>
                <td className="px-4 py-2 border border-gray-600">Ethereum</td>
                <td className="px-4 py-2 border border-gray-600">Bitcoin</td>
                <td className="px-4 py-2 border border-gray-600">Bitcoin</td>
                <td className="px-4 py-2 border border-gray-600">$1,800</td>
                <td className="px-4 py-2 border border-gray-600 text-red-400">-1.2%</td>
                <td className="px-4 py-2 border border-gray-600">$500B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
