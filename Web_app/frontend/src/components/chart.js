import React, { Component } from "react";
import Chart from "react-google-charts";

var fetchdata = (symbol) =>{
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`)}`)
  .then(response => {
    if (response.ok) return response.json()
    throw new Error('Network response was not ok.')
  })
  .then(data => {return(JSON.parse(data.contents).chart.result[0].indicators.quote)});  
  }

var data = fetchdata("googl")
console.log(data);
const datachart = [
  
];







class GoogleChart extends Component {
  
  constructor(props) {
    super(props)
  }
  render() {
      return (
          <div className="container">
              <h2>Activity of the asset for last 3 months</h2>
              <Chart
                width={'100%'}
                height={450}
                chartType="CandlestickChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                  legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
              />             
          </div>                  
      )
  }
}
export default GoogleChart;