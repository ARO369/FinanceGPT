const fetchStocks = async() =>{
    const url =
    "https://real-time-finance-data.p.rapidapi.com/search?query=Apple&language=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4063153c18msh7e3ad85b895719dp1187f7jsn5e0d6c7ae266",
      "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data.stock[0].name);
    // setStockData(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default fetchStocks;