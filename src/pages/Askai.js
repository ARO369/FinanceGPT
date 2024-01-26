import React, { useState } from "react";
import { Link } from "react-router-dom";
import OpenAI from "openai";

const Askai = () => {
  const [inputPrompt, setInputPrompt] = useState("");
  const [gptResponse, setGptResponse] = useState("Ask Anything...");

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
    <div>
      <div className="flex w-screen justify-center items-center my-8">
        <div className="text-3xl">Ask AI</div>
      </div>
      <Link to="/">
        <div className="fixed top-4 p-4 bg-gray-800 text-white left-4">
          <div>Back</div>
        </div>
      </Link>
      <div className="p-2 flex flex-col items-center justify-center">
        <div className="p-4 mb-16 w-[50%]">{gptResponse}</div>
        <div className="fixed bottom-8">
          <input
            placeholder="Search here..."
            className="w-[20rem] p-2"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={handleEnter}
          />
          <button className="p-2 bg-blue-400" onClick={handlePrompt}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Askai;
