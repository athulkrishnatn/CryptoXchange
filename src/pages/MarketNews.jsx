import React, { useEffect, useState } from "react";
import axios from "axios";

const MarketNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace with your actual API key
        const response = await axios.get(
          "https://cryptonews-api.com/api/v1/category?section=general&items=5&token=YOUR_API_KEY"
        );
        setNews(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="market-news-container p-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6">Latest Crypto Market News</h2>
      
      {/* News List */}
      <div className="news-list">
        {news.map((article, index) => (
          <div key={index} className="news-item mb-6 p-4 bg-gray-700 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
            <p className="text-sm mb-2">Source: {article.source_name}</p>
            <p className="text-base mb-4">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketNews;
