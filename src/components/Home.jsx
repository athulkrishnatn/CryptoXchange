import React, { useEffect, useState } from "react";
import { getCoinListings } from "../Api";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const coinData = await getCoinListings();
        setCoins(coinData);
      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

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
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-sm hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      <div className="mt-8 ms-5">
        <h2 className="text-white text-3xl font-light">Trending Coins</h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {/* Loop through coins to display the boxes */}
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="w-[250px] h-[250px] bg-white flex items-center justify-center shadow-lg rounded-md"
            >
              <div className="w-[250px] h-[250px] bg-white flex flex-col items-center justify-center text-center border rounded-md shadow-lg">
  <img src={coin.image} alt={coin.name} className="w-16 h-16 mb-2" />
  <h3 className="text-xl font-bold">{coin.name}</h3>
  <p className="text-gray-500">{coin.symbol}</p>
  <p className="text-gray-500">${coin.total_volume.toLocaleString()}</p>
</div>

            </div>
          ))}
        </div>
      </div>

      <div className="text-white mt-11 ms-5 text-left">
        <h1 className="text-3xl font-light">Today's Cryptocurrency Prices by Market Cap</h1>
        <p className="text-gray-300 ms-1">
          The global crypto market cap is <span className="text-green-400">$3.43T</span>, a <span className="text-green-400">0.57%</span> increase over the last day.
        </p>
      </div>

      <div className="mt-5 px-4">
        {loading ? (
          <p className="text-center text-white">Loading data...</p>
        ) : (
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
                {coins.map((coin, index) => (
                  <tr key={coin.id}>
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b flex items-center">
                      <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                      {coin.name} ({coin.symbol.toUpperCase()})
                    </td>
                    <td className="px-4 py-2 border-b">${coin.current_price.toFixed(2)}</td>
                    <td className="px-4 py-2 border-b">${coin.total_volume.toLocaleString()}</td>
                    <td className="px-4 py-2 border-b">{coin.circulating_supply.toLocaleString()}</td>
                    <td
                      className={`px-4 py-2 border-b ${
                        coin.price_change_percentage_24h > 0
                          ? "text-green-500" // Green if positive
                          : "text-red-500"    // Red if negative
                      }`}
                    >
                      {coin.price_change_percentage_24h?.toFixed(2)}%
                    </td>

                    <td className="px-4 py-2 border-b">${coin.market_cap.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
