import React, { Component } from "react";
import Chart from "react-google-charts";
import { Spinner } from "../spinner";

class GoogleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formatted: [],
    };
  }

  render() {
    return (
      <div className="container">
        {/* {this.formData()} */}
        {/* {JSON.stringify(this.props.chartData)} */}
        {this.props.isChartSpin ? (
          <div
            style={{
              height: "450px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </div>
        ) : (
          <Chart
            width={"1000px"}
            height={450}
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={this.props.chartData}
            options={{
              legend: "none",
            }}
            rootProps={{ "data-testid": "1" }}
          />
        )}
      </div>
    );
  }
}
export default GoogleChart;
