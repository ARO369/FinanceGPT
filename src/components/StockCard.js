import React from "react";
import stock_gif from "../assets/stock_gif.gif";
import { useTheme } from "../components/ThemeProvider.js";

const StockCard = ({
  name,
  price,
  change,
  previous_close,
  country_code,
  timezone,
  currency,
  type,
}) => {
  const { darkMode } = useTheme();
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-[45rem] home-card pb-8 px-4 m-4 cursor-pointer stock-card">
        <div className="flex justify-between items-center ">
          <div className="text-4xl my-4 overflow-hidden">{name}</div>
          <div> ${price}</div>
        </div>
        <div className="my-2">Change: {change}</div>
        <div className="my-2">Previous Close :{previous_close}</div>
        <div className="my-2">Country Code :{country_code}</div>
        <div className="my-2">Timezone: {timezone}</div>
        <div className="flex justify-between items-center">
          <div>Currency: {currency}</div>
          <div>Type: {type}</div>
        </div>
        <img
          className="absolute bottom-0 right-28 h-[10rem] opacity-30 stock-gif"
          src={stock_gif}
        />
      </div>
    </div>
  );
};

export default StockCard;
