// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { getCoinListings } from "../Api"; // REST API function to get initial coin data

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const connectWebSocket = () => {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setCoins((prevCoins) => {
        return prevCoins.map((coin) => {
          const matchingCoin = data.find(
            (item) => item.s === `${coin.symbol.toUpperCase()}USDT`
          );
          if (matchingCoin) {
            return { ...coin, current_price: parseFloat(matchingCoin.c) };
          }
          return coin;
        });
      });
    };

    socket.onclose = () => {
      console.warn("WebSocket closed. Reconnecting...");
      setTimeout(connectWebSocket, 5000); // Retry after 5 seconds
    };

    return socket;
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const coinData = await getCoinListings(); // Fetch initial coin data
        setCoins(coinData);
      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();

    const socket = connectWebSocket();

    // Cleanup WebSocket on component unmount
    return () => socket.close();
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to-blue-900 min-h-screen flex flex-col">
      <div className="container mx-auto flex flex-col items-center pt-[150px]">
        {/* Left Section - Hero Banner */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-blue-500 bg-clip-text text-transparent">
          <h1 className="text-[65px] font-extrabold leading-[80px] text-white">
            <span className="bg-gradient-to-r from-blue-50 to-blue-500 bg-clip-text text-transparent">
              Pioneering the Evolution of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-50 to-blue-500 bg-clip-text text-transparent">
              Blockchain Markets
            </span>
          </h1>
          <p className="pt-3 text-xl text-gray-400">
            Join the CryptoXchange community today and unlock a world of possibilities in blockchain trading. <br />
            Sign up now to experience secure, seamless, and innovative crypto transactions!
          </p>
        </div>

        {/* Right Section - Placeholder or other content */}
        
      </div>

      {/* Search Section */}
      <div className="flex justify-center mt-16 mb-8">
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

      {/* Coins Section */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          {loading ? (
            <p className="text-center text-white">Loading data...</p>
          ) : (
            coins.map((coin) => (
              <div
                key={coin.id}
                className="w-[250px] h-[250px] bg-white flex flex-col items-center justify-center text-center border rounded-md shadow-lg mb-4"
              >
                <img src={coin.image} alt={coin.name} className="w-16 h-16 mb-2" />
                <h3 className="text-xl font-bold">{coin.name}</h3>
                <p className="text-gray-500">{coin.symbol.toUpperCase()}</p>
                <p className="text-green-500">
                  ${coin.current_price?.toLocaleString() || "N/A"}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
