import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard.js";
import { Link } from "react-router-dom";

const FinanceNews = () => {
  const [news, setNews] = useState([]);
  const [inputNews, setInputNews] = useState("");
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
      console.log(result.data.news);

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

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="my-8 text-2xl">Finance News</div>
      <Link to="/">
        <div className="fixed top-4 p-4 bg-gray-800 text-white left-4">
          <div>Back</div>
        </div>
      </Link>
      <div>
        <input
          placeholder="Search News..."
          className="p-2 border border-black"
          value={inputNews}
          onChange={(e) => setInputNews(e.target.value)}
        />
        <button onClick={handleNewsInput} className="p-2 bg-blue-500">
          Search
        </button>
      </div>
      <div>
        <div>
          {news.map((item, index) => (
            <NewsCard
              key={index}
              newsImage={item.article_photo_url}
              title={item.article_title}
              source={item.source}
              more={item.article_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceNews;
