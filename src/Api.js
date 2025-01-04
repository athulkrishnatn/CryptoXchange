import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getCoinListings = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: "usd", // Convert prices to USD
        order: "market_cap_desc", // Order by market cap
        per_page: 10, // Get top 10 coins
        page: 1, // First page
        sparkline: false, // No sparkline data
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching coin listings:", error);
    return [];
  }
};
