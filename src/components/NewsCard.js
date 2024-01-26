import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ newsImage, title, source, more }) => {
  return (
    <div className="bg-blue-400 m-2 p-4">
      <div className="p-2">
        <img src={newsImage} alt="image" />
      </div>
      <div className="p-2">{title}</div>
      <div className="p-2">Source: {source}</div>
      <Link to={more}>
        <button className="p-2 bg-blue-500 text-white">Read more</button>
      </Link>
    </div>
  );
};

export default NewsCard;
