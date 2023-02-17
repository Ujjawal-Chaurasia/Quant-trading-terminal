import React, { Component } from "react";
import Chart from "react-google-charts";

class GoogleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formatted: []
    };
  }

  render() {
    return (
      <div className="container">
        {/* {this.formData()} */}
        {/* {JSON.stringify(this.props.chartData)} */}
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
      </div>
    );
  }
}
export default GoogleChart;
