import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="head_text">Opps!</div>
      <div className="text-4xl my-8 p-4">404 error, page does not exist</div>
      <Link to="/">
        <div className="home-card p-4 font-bold text-3xl my-4">FinanceGPT</div>
      </Link>
    </div>
  );
};

export default Error;
