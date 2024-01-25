import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Stocks from "./pages/Stocks.js";
import StockDetail from "./pages/StockDetails.js";
import FinanceNews from "./pages/FinanceNews.js";
import Analysis from "./pages/Analysis.js";
import Askai from "./pages/Askai.js";
import Calculator from "./pages/Calculator.js";

const MainPage = () => {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stocks",
        element: <Stocks />,
      },
      {
        path: "/stocks/detail/:stockId",
        element: <StockDetail />
      },
      {
        path: "/finance-news",
        element: <FinanceNews />,
      },
      {
        path: "/analysis",
        element: <Analysis />,
      },
      {
        path: "/ask-ai",
        element: <Askai />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
