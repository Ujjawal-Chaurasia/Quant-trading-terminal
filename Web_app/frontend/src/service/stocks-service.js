import axios from "axios";

export const fetchChartData = async (symbol) => {
  const options = {
    method: "GET",
    url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart",
    params: {
      interval: "1d",
      symbol,
      range: "3mo",
      region: "US",
      includePrePost: "false",
      useYfid: "true",
      includeAdjustedClose: "true",
      events: "capitalGain,div,split",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_X_RAPIDAPI_HOST_STOCKS,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const fetchStocsQuotes = async (symbols) => {
  const options = {
    method: "GET",
    url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes",
    params: { region: "US", symbols },
    headers: {
      "X-RapidAPI-Key": "a9f30e3ca8mshbe5c06139e5fa3dp140faajsn96323fe94212",
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    return response.data.quoteResponse.result;
  } catch (err) {
    console.log(err);
  }
};
