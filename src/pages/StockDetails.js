import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  const { stockId } = useParams();
  //   console.log(stockId);

  const fetchStockDetails = async (company) => {
    // console.log(company)
    const url = `https://real-time-finance-data.p.rapidapi.com/stock-overview?symbol=${company}&language=en`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0a3a2f8e35msh47b9577e2eb25b6p1e7cd6jsnba3aa712850e',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
      }
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
    <div className="bg-blue-500 w-10/12 h-screen flex flex-col items-center p=8">
      <div className="text-white my-8 text-2xl">Stock Details</div>
      <div className="p-8 text-white">
        {details.name ? <div>Name: {details.name}</div> : <div>Loading...</div>}
        {details.type ? <div>Type: {details.type}</div> : null}
        {details.price ? <div>price: {details.price}</div> : null}
        {details.about ? <div>about: {details.about}</div> : null}
        {details.company_website ? <div>website: {details.company_website}</div> : null}
        {details.company_country ? <div>country: {details.company_country}</div> : null}
        {details.company_state ? <div>state: {details.company_state}</div> : null}
        {details.company_city ? <div>city: {details.company_city}</div> : null}
        {details.company_street_address ? <div>address: {details.company_street_address}</div> : null}
        {details.company_ceo ? <div>CEO: {details.company_ceo}</div> : null}
        {details.company_employees ? <div>Employees: {details.company_employees}</div> : null}
        {details.company_founded_date ? <div>founded: {details.company_founded_date}</div> : null}
        {details.wikipedia_url ? <div>URL: {details.wikipedia_url}</div> : null}
      </div>
    </div>
  );
};

export default StockDetails;
