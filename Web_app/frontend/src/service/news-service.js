import axios from "axios";

export const fetchNews = async () => {
  const options = {
    method: "GET",
    url: "https://ms-finance.p.rapidapi.com/news/list",
    params: { performanceId: "0P0000OQN8" },
    headers: {
      "X-RapidAPI-Key": "613f9463f9msh9f787964b89df47p11e365jsnf8c82b702e08",
      "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // const response = []
    console.log("news", response);
    return response.data
  } catch (err) {
    console.log(err);
  }
};
