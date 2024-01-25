import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard.js";

const FinanceNews = () => {
  const [news, setNews] = useState([]);
  const [inputNews, setInputNews] = useState("");
  const fetchNews = async (newsName) => {
    const url = `https://real-time-finance-data.p.rapidapi.com/stock-news?symbol=${newsName}&language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0a3a2f8e35msh47b9577e2eb25b6p1e7cd6jsnba3aa712850e",
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

  return (
    <div className="bg-red-400 w-10/12 flex flex-col items-center">
      <div className="my-8 text-2xl">Finance News</div>
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
              image={item.article_photo_url}
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
