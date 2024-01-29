import React, { useState } from "react";
import { Link } from "react-router-dom";
import OpenAI from "openai";
import { useTheme } from "../components/ThemeProvider.js";
import clap_gif from "../assets/clap_gif.gif";

const Askai = () => {
  const [inputPrompt, setInputPrompt] = useState("");
  const [gptResponse, setGptResponse] = useState("");

  const { darkMode } = useTheme();
  const fetchGPT = async () => {
    setInputPrompt("");
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: inputPrompt }],
    });
    // console.log(chatCompletion.choices[0].message.content);
    const response = chatCompletion.choices[0].message.content;
    setGptResponse(response);
  };

  const handlePrompt = () => {
    // console.log(inputPrompt);
    fetchGPT();
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") fetchGPT();
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="h-full bg-[#FFF5EE;] text-black  dark:bg-[#001220;] dark:text-white">
        <div className="flex w-screen justify-center items-center ">
          <div className=" text-black text-2xl head_text mb-10 dark:text-white ask-ai">
            Aks GPT
          </div>
        </div>
        <Link to="/">
          <div className="fixed top-4 p-4 bg-gray-800 text-white left-4">
            <div>Back</div>
          </div>
        </Link>
        <div className="p-2 flex flex-col items-center justify-center">
          <div className="p-4  w-[50%] h-[70vh] ai-resp overflow-auto">
            {gptResponse.length !== 0 ? (
              gptResponse
            ) : (
              <div className="flex justify-center items-center">
                <img src={clap_gif} alt="clap-gif" />
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center items-center mb-[3rem]">
            <div className="flex justify-center items-center">
              <div>Enter Prompt and wait for 10sec</div>
            </div>
            <div className="flex justify-center">
              <input
                placeholder="Search here..."
                className="bg-black text-white border p-2 rounded-l-2xl w-[25rem] dark:bg-white dark:text-black url-input"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                onKeyDown={handleEnter}
              />
              <button
                className="bg-white text-black font-bold border-r rounded-r-2xl p-2 border border-black"
                onClick={handlePrompt}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Askai;
