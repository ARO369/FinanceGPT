import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-2/12 text-white bg-violet-500 font-sans text-2xl">
      <div className="m-4 mt-8 p-4">
        <Link to="/">
          <div className="my-4 px-4 py-2 hover:text-yellow-400">Home</div>
        </Link>
        <Link to="/stocks">
          <div className="my-4 px-4 py-2  hover:text-yellow-400">Stocks</div>
        </Link>
        <Link to="/finance-news">
          <div className="my-4 px-4 py-2  hover:text-yellow-400">
            Finance News
          </div>
        </Link>
        <Link to="/analysis">
          <div className="my-4 px-4 py-2  hover:text-yellow-400">Analysis</div>
        </Link>
        <Link to="/ask-ai">
          <div className="my-4 px-4 py-2  hover:text-yellow-400">Ask AI</div>
        </Link>
        <Link to="/calculator">
          <div className="my-4 px-4 py-2  hover:text-yellow-400">
            Calculator
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
