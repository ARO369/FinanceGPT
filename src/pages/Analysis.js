import React from "react";
import { Link } from "react-router-dom";

const Analysis = () => {
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
    </div>
  );
};

export default Analysis;
