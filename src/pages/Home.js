import React, { useState } from "react";
import { Link } from "react-router-dom";
import stock from "../assets/stock.svg";
import news from "../assets/news.svg";
import summery from "../assets/summery.svg";
import ai from "../assets/ai.svg";
import stockGif from "../assets/stock_gif.gif";
import newsGif from "../assets/news-gif.gif";
import ai_gif from "../assets/ai_gif.gif";
import summery_gif from "../assets/summery_gif.gif";
import { useTheme } from "../components/ThemeProvider.js";

const Home = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="home w-full h-full bg-[#FFF5EE;] text-black dark:bg-[#001220;] dark:text-white">
        <div className="flex justify-center items-center mb-4">
          <h1 className="head_text orange_gradient subtitle">
            FinanceGPT <br />
            <span className="text-black dark:text-white subtitle">
              Empowering Your Financial Decisions with AI.
            </span>
          </h1>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-black text-white p-2 rounded-xl font-bold dark:bg-white dark:text-black"
            onClick={toggleTheme}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
        <div className=" flex flex-col justify-center items-center flex-wrap">
          <div className="flex flex-row mt-5 flex-wrap justify-center items-center">
            <Link to="/stocks">
              <div className="p-4 m-4 w-[25rem] h-[15rem] flex justify-between home-card cards">
                <div className="flex flex-col">
                  <div className="text-4xl text-black dark:text-white">
                    Stocks
                  </div>
                  <img
                    src={stockGif}
                    alt="stock-gif"
                    className="h-[9rem] mt-[4rem]"
                  />
                </div>
                <img
                  src={stock}
                  alt="stock-img"
                  className="home-img mt-[3rem] display-images"
                />
              </div>
            </Link>
            <Link to="/finance-news">
              <div className="p-4 m-4 w-[25rem] h-[15rem] flex justify-between home-card cards">
                <div className="flex flex-col">
                  <div className="text-4xl text-black dark:text-white">
                    Stock News
                  </div>
                  <img
                    src={newsGif}
                    alt="news-gif"
                    className="h-[5rem] mt-[3rem]"
                  />
                </div>
                <img
                  src={news}
                  alt="news-img"
                  className="home-img mt-12 ml-7 cards"
                />
              </div>
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap mt-2">
            <Link to="/analysis">
              <div className="p-4 m-4 w-[25rem] h-[15rem] flex justify-between home-card cards">
                <div className="flex flex-col">
                  <div className="text-4xl text-black dark:text-white">
                    Rapid Abstract
                  </div>
                  <img
                    src={ai_gif}
                    alt="ai-gif"
                    className="ai-gif w-[7rem] mt-[1rem] cards"
                  />
                </div>
                <img src={ai} alt="ai-img" className="home-img mt-8" />
              </div>
            </Link>
            <Link to="/ask-ai">
              <div className="p-4 m-4 w-[25rem] h-[15rem] flex justify-between home-card cards">
                <div className="flex flex-col">
                  <div className="text-4xl text-black dark:text-white">
                    Ask GPT
                  </div>
                  <img
                    src={summery_gif}
                    alt="summery-gif"
                    className="w-[7rem] mt-[3rem] cards"
                  />
                </div>
                <img
                  src={summery}
                  alt="summery-img"
                  className="home-img mt-8"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
