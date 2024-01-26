import React, { useEffect, useState } from "react";
import StockCard from "../components/StockCard.js";
import { Link } from "react-router-dom";

const Stocks = () => {
  const [stockData, setStockData] = useState([]);
  const [inputData, setInputData] = useState("");

  const fetchData = async (company) => {
    const url = `https://real-time-finance-data.p.rapidapi.com/search?query=${company}&language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_STOCKS_API_KEY,
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const allData = [...result.data.stock]; // mutual funds-, ...result.data.mutual_fund
      // console.log(allData);
      // console.log(result.data.mutual_fund);
      setStockData(allData);
      setInputData("");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData("apple");
  }, []);

  const handleClick = () => {
    fetchData(inputData);
  };

  return (
    <div className="flex flex-col items-center bg-green-600 justify-center  w-full h-screen">
      <div className="fixed top-4 text-white text-2xl">Stocks</div>
      <Link to="/">
        <div className="fixed top-4 p-4 bg-gray-800 text-white left-4">
          <div>Back</div>
        </div>
      </Link>
      <div className="fixed top-20">
        <input
          placeholder="Search Stocks..."
          className="border border-black p-2 mb-2"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          className="bg-blue-500 p-2 border border-black"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center w-10/12">
        {stockData ? (
          stockData.map((stock) => (
            <Link to={"/stocks/detail/" + stock.symbol} key={stock.symbol}>
              <StockCard
                key={stock.symbol}
                name={stock.name}
                price={stock.price}
                change={stock.change}
                previous_close={stock.previous_close}
                country_code={stock.country_code}
                timezone={stock.timezone}
                currency={stock.currency}
                type={stock.type}
              />
            </Link>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Stocks;
