import React from "react";

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
  return (
    <div className="w-[16rem] bg-orange-500 p-2 m-4 cursor-pointer">
      <div>Name: {name}</div>
      <div>Price: {price}</div>
      <div>Change: {change}</div>
      <div>Previous Close :{previous_close}</div>
      <div>Country Code :{country_code}</div>
      <div>Timezone: {timezone}</div>
      <div>Currency: {currency}</div>
      <div>Type: {type}</div>
    </div>
  );
};

export default StockCard;
