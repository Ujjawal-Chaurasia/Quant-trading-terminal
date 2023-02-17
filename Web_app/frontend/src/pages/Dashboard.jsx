import React from 'react'
import '../styles/Dashboard.css'
import GoogleChart from '../components/chart';
import { useEffect } from 'react';

var fetchdata = (symbol) =>{
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`)}`)
.then(response => {
	if (response.ok) return response.json()
	throw new Error('Network response was not ok.')
})
.then(data => console.log(JSON.parse(data.contents).chart.result[0].indicators.quote));  
}



const Dashboard = () => {
  useEffect(()=>{
    fetchdata("googl");
  },[])
  return (
    <div className="dashboard">
      <nav>
        <form>
        <input type="text" className="search" placeholder="Search for desired asset class" />
        </form>
      </nav>
      <div className="content">
      <div className="dataandnews">
        <div className="data">
          <p className="assetname">Reliance</p>
          <div className="priceandchange">
          <p className="price">1234</p>
          <p className="change">23%</p>
          </div>
        
        </div>
  <p className="recentnews">Recent News</p>
  <div className="news">
    <p className="newsheading">
      This happened
    </p>
    <p className="newscontent">do re mi fa so la ti</p>
  </div>
      </div>
      <div className="chart">
      
  
      </div>
      <div className="portfolio">
        <p>My porfolio</p>
        <li className="listofstocks">
          <ul>hello</ul>
          <ul>hello</ul>
        </li>
      </div>
    <div className="chartandmetrics">

 <GoogleChart/>

    </div>
     </div>
     <div className="keymetrics">
      <h1>Key Metrics</h1>
      <div className="metrics">
        <h2>metric 1</h2>
        <h2>metric 2</h2>
        <h2>metric 3</h2>
      </div>
     </div>
    </div>
  )
}

export default Dashboard