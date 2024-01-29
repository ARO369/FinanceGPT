import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeProvider.js";
// import loader from "../assets/loader.svg";
import wheel_gif from "../assets/wheel_gif.gif";

const Analysis = () => {
  const [summery, setSummery] = useState("");
  const [inputURL, setInputURL] = useState("");

  const { darkMode } = useTheme();

  const ExtractURL = async () => {
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/extract?url=${inputURL}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_SUMMERIZER_API_KEY,
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      const dataURL = result.url;
      // console.log(dataURL);
      fetchSummery(dataURL);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSummery = async (dataURL) => {
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${dataURL}&length=3`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_SUMMERIZER_API_KEY,
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      // console.log(result.summary);
      setSummery(result.summary);
    } catch (error) {
      console.error(error);
    }
  };

  const handleURL = () => {
    setInputURL("");
    ExtractURL();
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <Link to="/">
        <div className="fixed top-4 p-4 bg-gray-800 text-white left-4">
          <div>Back</div>
        </div>
      </Link>
      <div className="bg-[#FFF5EE;] text-black  dark:bg-[#001220;] dark:text-white">
        <div className="flex w-screen justify-center items-center">
          <div className="text-black text-2xl head_text mb-10 dark:text-white">
            Rapid Abstract
          </div>
        </div>

        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="w-[50%] h-[60vh] mt-[5rem] overflow-auto">
            {summery.length !== 0 ? (
              summery
            ) : (
              <div className="flex justify-center items-center">
                <img src={wheel_gif} alt="wheel-gif" />
              </div>
            )}
          </div>

          <div>Enter URL and wait for 10 sec.</div>
          <div className=" flex justify-center items-center w-full mb-[3rem]">
            <input
              className="bg-black text-white border p-2 rounded-l-2xl w-[25rem] dark:bg-white dark:text-black"
              placeholder="URL"
              value={inputURL}
              onChange={(e) => setInputURL(e.target.value)}
            />
            <button
              onClick={handleURL}
              className="bg-white text-black font-bold border-r rounded-r-2xl p-2 border border-black"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
