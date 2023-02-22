import React from "react";
import "../styles/Welcomepage.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const Welcomepage = () => {
  return (
    <div id="page">
      <div className="d-flex">
        <div className="ms-5" id="logo">
          <a>Quanta</a>
        </div>

        <div className="mt-4" id="links">
          <Link to="/dashboard">
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
            <MDBBtn size="lg" id="button"> Get Started</MDBBtn>
          </Link>
        </div>
        <div id="right"></div>
      </div>
    </div>
  );
};

export default Welcomepage;
