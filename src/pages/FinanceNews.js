import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard.js";
import loader from "../assets/loader.svg";
import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeProvider.js";

const FinanceNews = () => {
  const [news, setNews] = useState([]);
  const [inputNews, setInputNews] = useState("");
  const { darkMode } = useTheme();
  const fetchNews = async (newsName) => {
    const url = `https://real-time-finance-data.p.rapidapi.com/stock-news?symbol=${newsName}&language=en`;
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
      // console.log(result.data.news);

      setNews(result.data.news);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews("AAPL%3ANASDAQ");
  }, []);

  const handleNewsInput = () => {
    fetchNews(inputNews);
    setInputNews("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleNewsInput();
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex w-full flex-col items-center justify-center bg-[#FFF5EE;] text-black  dark:bg-[#001220;] dark:text-white">
        <div className="flex w-screen justify-center items-center finance-news">
          <div className=" text-black text-2xl head_text mb-10 dark:text-white">
            Finance News
          </div>
        </div>
        <Link to="/">
          <div className="fixed top-4 p-4 bg-gray-800 text-white left-4 z-10">
            <div>Back</div>
          </div>
        </Link>
        <div className="w-full flex justify-center items-center">
          <input
            placeholder="Search News..."
            // className="p-2 border border-black"
            className="text-black border border-black p-2 border-none rounded-l-2xl w-[60%]"
            value={inputNews}
            onChange={(e) => setInputNews(e.target.value)}
            onKeyDown={handleEnter}
          />
          <button
            onClick={handleNewsInput}
            className="bg-white text-black font-bold border-r rounded-r-2xl p-2 border border-black"
          >
            Search
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex-wrap justify-center items-center flex flex-row mt-4">
            {news.length !== 0 ? (
              news.map((item, index) => (
                <NewsCard
                  key={index}
                  newsImage={item.article_photo_url}
                  title={item.article_title}
                  source={item.source}
                  more={item.article_url}
                />
              ))
            ) : (
              <div className="flex w-full justify-center items-center mt-40">
                <img src={loader} className="h-20" style={{ fill: "white" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceNews;
