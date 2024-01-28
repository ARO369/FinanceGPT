import React from "react";
import { Link } from "react-router-dom";
import stock from "../assets/stock.svg";
import news from "../assets/news.svg";
import summery from "../assets/summery.svg";
import ai from "../assets/ai.svg";
import stockGif from "../assets/stock_gif.gif";
import newsGif from "../assets/news-gif.gif";
import ai_gif from "../assets/ai_gif.gif";
import summery_gif from "../assets/summery_gif.gif";

const Home = () => {
  return (
    <div className="home w-screen">
      <div className="flex justify-center items-center">
        <h1 className="head_text orange_gradient">
          FinanceGPT <br />
          <span className="text-white">
            Empowering Your Financial Decisions with AI.
          </span>
        </h1>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="flex flex-row mt-8">
          <Link to="/stocks">
            <div className="p-4 m-4 w-[25rem] h-[15rem] flex justify-between home-card">
              <div className="flex flex-col">
                <div className="text-4xl">Stocks</div>
                <img src={stockGif} className="h-[9rem] mt-[4rem]" />
              </div>
              <img src={stock} className="home-img mt-[3rem] ml-7" />
            </div>
          </Link>
          <Link to="/finance-news">
            <div className="p-4 m-4 w-[25rem] h-[15rem] flex justify-between home-card">
              <div className="flex flex-col">
                <div className="text-4xl">Stock News</div>
                <img src={newsGif} className="h-[5rem] mt-[3rem]" />
              </div>
              <img src={news} className="home-img mt-12 ml-7" />
            </div>
          </Link>
        </div>
        <div className="flex flex-row mt-2">
          <Link to="/analysis">
            <div className="p-4 m-4 w-[25rem] h-[15rem] flex justify-between home-card">
              <div className="flex flex-col">
                <div className="text-4xl">Ask AI</div>
                <img src={ai_gif} className="ai-gif h-[7rem] mt-[3rem]" />
              </div>
              <img src={ai} className="home-img mt-8" />
            </div>
          </Link>
          <Link to="/ask-ai">
            <div className="p-4 m-4 w-[25rem] h-[15rem] flex justify-between home-card">
              <div className="flex flex-col">
                <div className="text-4xl">Rapid Abstract</div>
                <img src={summery_gif} className="w-[7rem] mt-[1rem]" />
              </div>
              <img src={summery} className="home-img mt-8" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
