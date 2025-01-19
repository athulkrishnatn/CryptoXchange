import React, { useEffect, useState } from "react";

const NFT = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/nfts/list?per_page=10&page=1");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNfts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white text-black min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-6">NFT Collections</h1>

      {loading ? (
        <p className="text-center text-xl">Loading NFTs...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow bg-gray-100"
            >
              <h2 className="text-lg font-semibold mb-3">{nft.name}</h2>
              <div className="text-sm space-y-1">
                <p>
                  <span className="font-bold">ID:</span> {nft.id}
                </p>
                <p>
                  <span className="font-bold">Symbol:</span> {nft.symbol}
                </p>
                <p>
                  <span className="font-bold">Platform:</span> {nft.asset_platform_id}
                </p>
                <p>
                  <span className="font-bold">Contract Address:</span>
                  <br />
                  <span className="text-gray-600">{nft.contract_address}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NFT;
