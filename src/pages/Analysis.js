import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Analysis = () => {
  const [summery, setSummery] = useState("");
  const [inputURL, setInputURL] = useState("");

  const ExtractURL = async () => {
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/extract?url=${inputURL}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4063153c18msh7e3ad85b895719dp1187f7jsn5e0d6c7ae266",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const dataURL = result.url;
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
        "X-RapidAPI-Key": "4063153c18msh7e3ad85b895719dp1187f7jsn5e0d6c7ae266",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSummery(result.summary);
    } catch (error) {
      console.error(error);
    }
  };

  const handleURL = () => {
    setInputURL("");
    // ExtractURL();
  };
  return (
    <div>
      <div className="flex w-screen justify-center items-center my-8">
        <div className="text-3xl">Analysis page</div>
        <Link to="/">
          <div className="fixed top-4 p-4 bg-gray-800 text-white left-4">
            <div>Back</div>
          </div>
        </Link>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[50%] mt-12 mb-20">{summery}</div>
        {/* <div className="w-[50%] mt-12 mb-20">
          In this blog post, the author reflects on their journey of choosing a
          career path and ultimately deciding to pursue full stack development.
          They initially chose computer science in college, but were overwhelmed
          by the various subfields within the discipline. To gain clarity, they
          decided to spend a month exploring different areas, starting with
          cybersecurity. However, they discovered that their passion lied in
          creating tangible and usable products, leading them to focus on
          development and full stack development in particular. The author
          shares their excitement about the possibilities and opportunities that
          full stack development offers, citing examples of successful companies
          built using this skill set. They express their determination to
          continue learning and growing in this field. The author acknowledges
          that this is their first blog post and promises to keep it concise and
          informative. They express their enthusiasm for sharing more about
          their experiences and insights. They encourage readers to embrace the
          challenges and fluctuations that come with their chosen career paths,
          emphasizing that every step taken is a step forward. Overall, the
          author's blog post highlights their personal journey of self-discovery
          and their decision to pursue full stack development as a means of
          fulfilling their dream of starting their own business. They offer
          encouragement and share their eagerness to share more about their
          experiences in the field.
        </div> */}
      </div>
      <div className="fixed bottom-8 flex justify-center items-center w-full">
        <input
          className="p-2 w-[30rem]"
          placeholder="URL"
          value={inputURL}
          onChange={(e) => setInputURL(e.target.value)}
        />
        <button onClick={handleURL}>Search</button>
      </div>
    </div>
  );
};

export default Analysis;
