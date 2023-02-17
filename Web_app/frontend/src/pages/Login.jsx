import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../styles/Login.css"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import { Link } from "react-router-dom";


function App() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer fluid>
        {/* {JSON.stringify(userData)} */}
        <MDBCard className="text-black m-5" style={{ borderRadius: "50px" }}>
          <MDBCardBody>
            <MDBRow>
              <h3
                style={{ color: "black", textDecoration: "underline" }}
                className="text-center fw-bold mt-1 mb-5 pb-1"
              >
                QUANT TRADING TERMINAL
              </h3>

              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <div className="">
                  <p className=" h3 fw-bold mb-5 mx-1 mx-md-4 mt-2">Sign In</p>
                </div>

                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{ width: "100%" }}
                >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      onChange={handleChange}
                      name="email"
                      label="Your Email"
                      id="form2"
                      type="email"
                      style={{ width: "350px" }}
                    />
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      onChange={handleChange}
                      name="password"
                      label="Password"
                      id="form3"
                      type="password"
                      style={{ width: "350px" }}
                    />
                  </div>
                </div>

                <div className="register-text mt-3">
                  <div>
                    <MDBBtn
                      outline
                      color="secondary"
                      type="submit"
                      className="mb-3 ms-4"
                      size="lg"
                    >
                      Log In
                    </MDBBtn>
                  </div>
                  <div>
                    <p>
                      <Link to="/register">
                        <span className="me-1 fw-normal">create account</span>
                      </Link>
                      Instead?
                    </p>
                  </div>
                </div>

                <div style={{ width: "60%" }}>
                  <div className="awesome-divider mt-4"></div>
                </div>

                <div className="sso mt-3">
                  <MDBBtn
                    style={{ backgroundColor: "#dd4b39" }}
                    className="mb-3"
                    size="lg"
                  >
                    <MDBIcon className="me-2" fab icon="google" />
                    Google Sign In
                  </MDBBtn>

                  <MDBBtn
                    className="mb-3"
                    style={{ backgroundColor: "#333333" }}
                    size="lg"
                  >
                    <MDBIcon className="me-2" fab icon="github" />
                    Github Sign In
                  </MDBBtn>
                </div>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
}

export default App;
