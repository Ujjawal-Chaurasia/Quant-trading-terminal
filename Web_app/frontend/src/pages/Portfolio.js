import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";
import noStockImg from "../image/nostock.png";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { fetchNews } from "../service/news-service";
import { fetchPortfolioStocks } from "../service/portfolio-service";
import { Spinner } from "../spinner";

const Portfolio = () => {
  const navigate = useNavigate();
  const [stocks, setStocks] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const [metadata, setMetadata] = useState({
    symbol: "GOOGL",
    previousClose: 96.94,
    regularMarketPrice: 95.51,
  });
  const [newsData, setNewsData] = useState([]);

  const [isNewsSpin, setIsNewsSpin] = useState(true);

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const getNews = async () => {
    const news = await fetchNews();
    setIsNewsSpin(false);
    setNewsData(news.slice(0, 6));
  };

  const getStocksData = async () => {
    const data = await fetchPortfolioStocks();
    setStocks(data);
  };

  useEffect(() => {
    getNews();
    getStocksData();
  }, []);

  return (
    <div className="portfolio-main">
      {/* {JSON.stringify(newsData)} */}
      {/* {JSON.stringify(stocks)} */}
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
          </div>
        </form>
      </nav>
      <div className="content">
        <div className="dataandnews">
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
              newsData.map((item, item_index) => (
                <div
                  key={`NEWS_${item.title}_${item_index}`}
                  className="news-container"
                >
                  <p className="newsheading">{item.title}</p>
                  <p className="newscontent">{item.sourceName}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="portfolio-stocks">
          <h3 className="pt-5 ps-3">You are viewing your Portfolio</h3>
          <div className="stocks my-5">
            {stocks.length > 0 ? (
              stocks.map((item, item_index) => (
                <>
                  <div
                    key={`STOCK_${item.symbol}_${item_index}`}
                    className="data p-3"
                  >
                    <p className="assetname">{item.symbol}</p>
                    <div className="priceandchange">
                      <p className="price">{item.regularMarketPrice}</p>
                      <p className="change">
                        {parseFloat(
                          item.twoHundredDayAverageChangePercent
                        ).toFixed(2)}
                        %
                      </p>
                    </div>
                  </div>
                  {/* <div style={{ display: "flex", gap: "10px" }}>
                    <MDBDropdown>
                      <MDBDropdownToggle>Select Strategy</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem link>Strategy 1</MDBDropdownItem>
                        <MDBDropdownItem link>Strategy 2</MDBDropdownItem>
                        <MDBDropdownItem link>Strategy 3</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                    <MDBBtn className="me-1" color="secondary">
                      Get Price
                    </MDBBtn>
                  </div> */}
                </>
              ))
            ) : (
              <div className="no-stock mt-5">
                <div className="no-stock-img">
                  <img src={noStockImg} />
                  <p className="fw-bold mt-3">
                    You Don't have any stocks in your Portfolio
                  </p>
                  <MDBBtn onClick={() => navigate("/dashboard")}>
                    Go To dashboard
                  </MDBBtn>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* <div className="chartandmetrics">
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
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
