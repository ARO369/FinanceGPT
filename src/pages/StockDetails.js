import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import loader from "../assets/loader.svg";
import { useTheme } from "../components/ThemeProvider.js";

const StockDetails = () => {
  const [details, setDetails] = useState({
    name: "",
    type: "",
    price: "",
    about: "",
    company_website: "",
    company_country: "",
    company_state: "",
    company_city: "",
    company_street_address: "",
    company_ceo: "",
    company_employees: "",
    company_founded_date: "",
    wikipedia_url: "",
  });

  const { darkMode } = useTheme();

  const { stockId } = useParams();
  //   console.log(stockId);

  const fetchStockDetails = async (company) => {
    // console.log(company)
    const url = `https://real-time-finance-data.p.rapidapi.com/stock-overview?symbol=${company}&language=en`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_STOCKS_API_KEY,
        "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      setDetails({
        name: result.data.name,
        type: result.data.type,
        price: result.data.price,
        about: result.data.about,
        company_website: result.data.company_website,
        company_country: result.data.company_country,
        company_state: result.data.company_state,
        company_city: result.data.company_city,
        company_street_address: result.data.company_street_address,
        company_ceo: result.data.company_ceo,
        company_employees: result.data.company_employees,
        company_founded_date: result.data.company_founded_date,
        wikipedia_url: result.data.wikipedia_url,
      });
      // console.log(details);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStockDetails(stockId);
  }, []);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="h-full w-full flex flex-col justify-center items-center p-2 bg-[#FFF5EE;] text-black  dark:bg-[#001220;] dark:text-white">
        <div className="text-2xl head_text mb-10 stock-detail-title">
          Stock Details
        </div>
        <Link to="/stocks">
          <div className="fixed top-4 p-4 bg-gray-800 text-white left-4">
            <div>Back</div>
          </div>
        </Link>
        <div className="w-10/12 mt-6 flex justify-center flex-col">
          <div className="flex justify-between items-center name-price">
            {details.name ? (
              <div className="text-5xl pb-8">{details.name}</div>
            ) : (
              <div className="flex w-full justify-center items-center mt-40">
                <img src={loader} className="h-20" />
              </div>
            )}
            {details.price ? <div>price: ${details.price}</div> : null}
          </div>

          {details.about ? (
            <div className="text-lg">{details.about}</div>
          ) : null}
          <div className="flex justify-between items-center mt-8">
            {details.company_ceo ? (
              <div className="text-2xl">CEO: {details.company_ceo}</div>
            ) : null}

            {details.company_country ? (
              <div>
                {details.company_state}, {details.company_country}
              </div>
            ) : null}
          </div>

          <div className="flex justify-between items-center mt-2">
            {details.company_founded_date ? (
              <div>founded: {details.company_founded_date}</div>
            ) : null}
            {details.company_employees ? (
              <div>Employees: {details.company_employees} peoples</div>
            ) : null}
          </div>

          <div className="flex justify-between items-center mt-16 mb-16 wiki-visit">
            {details.wikipedia_url ? (
              <Link to={details.wikipedia_url}>
                <div className="home-card p-4 font-bold text-2xl mb-4">
                  Wikipedia
                </div>
              </Link>
            ) : null}
            {details.company_website ? (
              <Link to={details.company_website}>
                <div className="home-card p-4 font-bold text-2xl px-8">
                  visit
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
