import React from "react";
import "../styles/Welcomepage.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Welcomepage = () => {
  return (
    <div id="page">
      <div id="header">
        <div id="logo">
          <a>Quanta</a>
        </div>

        <div id="links">
          <Link>
            <h4 style={{ color: "white", fontWeight: 700 }}>Home</h4>
          </Link>

          <Link to="/login">
            <h4 style={{ color: "white", fontWeight: 700 }}>Sign in</h4>
          </Link>
          <Link to="/register">
            <h4 style={{ color: "white", fontWeight: 700 }}>Sign up</h4>
          </Link>

          <Link>
            <h4 style={{ color: "white", fontWeight: 700 }}> Why us?</h4>
          </Link>
        </div>
      </div>

      <div id="contents">
        <div id="left">
          <div id="huge">Quant Trading Terminal for Novices</div>
          <div id="description">
            A terminal which provides real time data on assets with several
            indicators so that one can make informed choices .
          </div>

          <Link to="/login">
            <MDBBtn id="button"> Get Started</MDBBtn>
          </Link>
        </div>
        <div id="right"></div>
      </div>
    </div>
  );
};

export default Welcomepage;
