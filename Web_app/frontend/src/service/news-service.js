import axios from "axios";

export const fetchNews = async () => {
  const options = {
    method: "GET",
    url: "https://ms-finance.p.rapidapi.com/news/list",
    params: { performanceId: "0P0000OQN8" },
    headers: {
      "X-RapidAPI-Key": "a9f30e3ca8mshbe5c06139e5fa3dp140faajsn96323fe94212",
      "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("news", response);
    return response.data
  } catch (err) {
    console.log(err);
  }
};
