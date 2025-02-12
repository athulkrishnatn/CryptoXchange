import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const ChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        const chartData = response.data.map((coin) => ({
          name: coin.name,
          price: coin.current_price,
        }));
        setData(chartData);
      } catch (error) {
        console.error("Error fetching chart data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Top 10 Cryptocurrencies by Market Cap</h2>
      <p className="text-lg mb-6">
        The chart below displays the current prices of the top 10 cryptocurrencies based on market cap. Track their trends and performance in real time.
      </p>

      {/* Chart */}
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ChartComponent;
