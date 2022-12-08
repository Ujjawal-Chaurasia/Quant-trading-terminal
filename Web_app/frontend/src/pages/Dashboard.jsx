import React from 'react'
import '../styles/Dashboard.css'
import GoogleChart from '../components/chart';

const Dashboard = () => {
  
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
    </div>
  )
}

export default Dashboard