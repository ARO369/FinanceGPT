import React, { useEffect, useState } from "react";
import StockCard from "../components/StockCard.js";
import { Link } from "react-router-dom";
import loader from "../assets/loader.svg";
import { useTheme } from "../components/ThemeProvider.js";

const Stocks = () => {
  const [stockData, setStockData] = useState([]);
  const [inputData, setInputData] = useState("");
  const { darkMode } = useTheme();
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

  const handleEnter = (e) => {
    if (e.key === "Enter") fetchData(inputData);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col items-center justify-center w-full h-full bg-[#FFF5EE;] text-black  dark:bg-[#001220;] dark:text-white">
        <div className="  text-2xl head_text mb-10 text-black dark:text-white">
          Stocks
        </div>
        <Link to="/">
          <div className="fixed top-4 p-4 bg-gray-800 text-white left-4 z-10">
            <div>Back</div>
          </div>
        </Link>
        <div className="w-[100%] flex justify-center items-center">
          <input
            placeholder="Search Stocks..."
            className="text-black border border-black p-2 border-none rounded-l-2xl w-[30%]"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onKeyDown={handleEnter}
          />
          <button
            className="bg-white text-black font-bold border-r rounded-r-2xl p-2 border border-black"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-10/12 mt-6">
          {stockData.length !== 0 ? (
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
            <div className="flex w-full justify-center items-center mt-40">
              <img src={loader} alt="loader" className="h-20" style={{ fill: "white" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stocks;
