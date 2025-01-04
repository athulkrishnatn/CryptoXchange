import express from "express";
import axios from "axios";

const app = express();

const API_KEY = "e63cbf70-03cd-45f7-832f-3ed1febdbf1a"; // Replace with your API key
const BASE_URL = "https://pro-api.coinmarketcap.com/v1";

app.get("/api/cryptocurrency/listings/latest", async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/cryptocurrency/listings/latest?start=1&limit=10&convert=USD`, {
            headers: {
                "X-CMC_PRO_API_KEY": API_KEY,
                "Accept": "application/json",
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
