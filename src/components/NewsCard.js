import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeProvider.js";

const NewsCard = ({ newsImage, title, source, more }) => {
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-[20rem] home-card pb-8 px-4 m-4 cursor-pointer news-cards">
        <div className="p-2 flex justify-center items-center w-full">
          <img src={newsImage} alt="news_image" />
        </div>
        <div className="p-2">{title}</div>
        <div className="p-2">Source: {source}</div>
        <Link to={more}>
          <button className="p-2 bg-black text-white font-bold rounded-xl  dark:bg-white dark:text-black">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
