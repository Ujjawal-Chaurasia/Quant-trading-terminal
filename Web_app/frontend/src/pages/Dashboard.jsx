import React, { useState } from "react";
import "../styles/Dashboard.css";
import GoogleChart from "../components/chart";
import { useEffect } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { fetchNews } from "../service/news-service";
import { addStockToPortfolio } from "../service/portfolio-service";
import { Link } from "react-router-dom"

import { Spinner } from "../spinner";

const Dashboard = () => {
  const [searchItem, setSearchItem] = useState("");
  const [chartData, setChartData] = useState([]);
  const [metadata, setMetadata] = useState({
    symbol: "GOOGL",
    previousClose: 96.94,
    regularMarketPrice: 95.51,
  });
  const [newsData, setNewsData] = useState([]);
  const [isChartSpin, setIsChartSpin] = useState(true);
  const [isNewsSpin, setIsNewsSpin] = useState(true);

  const fetchdata = (symbol) => {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`
      )}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        const result = JSON.parse(data.contents).chart.result[0];
        console.log("rel", result);

        setMetadata(result.meta);
        setChartData(formatData(result.indicators.quote[0]));
        setIsChartSpin(false);
      });
  };

  const formatData = (data) => {
    let formattedData = [["day", "a", "b", "c", "d"]];

    for (let i = 0; i < 6; i++) {
      let me = [i, data.close[i], data.high[i], data.open[i], data.low[i]];
      formattedData = [...formattedData, me];
    }

    return formattedData;
  };

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchdata(searchItem);
  };

  const getNews = async () => {
    const news = await fetchNews();
    setIsNewsSpin(false);
    setNewsData(news.slice(0, 4));
  };

  useEffect(() => {
    fetchdata("googl");
    getNews();
  }, []);

  return (
    <div className="dashboard">
      {/* {JSON.stringify(chartData)} */}
      {/* {JSON.stringify(newsData)} */}
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSearchSubmit}>
          <div className="searchandicon">
            <span className="input-group-text border-0" id="search-addon">
              <i
                style={{ color: "white", top: "20px" }}
                className="fas fa-search"
              ></i>
            </span>
            <input
              style={{
                width: "800px",
              }}
              onChange={handleSearchChange}
              type="search"
              className="form-control rounded"
              placeholder="Search for desired asset class"
            />
            <Link to="/portfolio">
              <MDBIcon
                style={{
                  color: "white",
                  position: "relative",
                  top: "10px",
                  left: "5px",
                }}
                size="lg"
                fas
                icon="user-circle"
              />
            </Link>
          </div>
        </form>
      </nav>
      <div className="content">
        <div className="dataandnews">
          <div className="data">
            <p className="assetname">{metadata.symbol}</p>
            <div className="priceandchange">
              <p className="price">{metadata.regularMarketPrice} $</p>
              <p className="change">
                {parseFloat(
                  (metadata.regularMarketPrice - metadata.previousClose) / 100
                ).toFixed(2)}
                %
              </p>
            </div>
            <MDBBtn onClick={() => addStockToPortfolio(metadata.symbol)}>
              Add to Portfolio
            </MDBBtn>
          </div>
          <p className="recentnews">Recent News</p>

          <div className="news">
            {isNewsSpin ? (
              <div
                style={{
                  height: "300px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spinner />
              </div>
            ) : (
              newsData.map((item) => (
                <div key={`NEWS_${item.title}`} className="news-container">
                  <p className="newsheading">{item.title}</p>
                  <p className="newscontent">{item.sourceName}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="chartandmetrics">
          <h3 className="pt-5 ps-3">Activity of the asset for last 3 months</h3>

          <GoogleChart chartData={chartData} isChartSpin={isChartSpin} />

          <div className="keymetrics">
            <h3 className="pt-2 ps-3">Key Metrics</h3>
            <div className="metrics">
              <div className="metrics-block">
                <h3>Instrument Type</h3>
                <h4>{metadata.instrumentType}</h4>
              </div>
              <div className="metrics-block">
                <h3>Exchange Timezone Name</h3>
                <h4>{metadata.exchangeTimezoneName}</h4>
              </div>
              <div className="metrics-block">
                <h3>Currency</h3>
                <h4>{metadata.currency}</h4>
              </div>
              <div className="metrics-block">
                <h3>Exchange Name</h3>
                <h4>{metadata.exchangeName}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
