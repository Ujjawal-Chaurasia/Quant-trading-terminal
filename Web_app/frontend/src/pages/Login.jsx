import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";

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
        console.log(userCredential)
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
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
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src="https://thumbs.dreamstime.com/z/business-trading-logo-vector-design-171734765.jpg"
                  style={{ width: "285px" }}
                  alt="logo"
                />
                <h4 className="mt-1 mb-5 pb-1">QUANT TRADING TERMINAL</h4>
              </div>

              <p>Please login to your account</p>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                name="email"
                onChange={handleChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                name="password"
                onChange={handleChange}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">
                  Sign in
                </MDBBtn>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn outline className="mx-2" color="danger">
                  Register
                </MDBBtn>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <img
                src="https://as2.ftcdn.net/v2/jpg/04/60/71/01/1000_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg"
                style={{ height: "750px", width: "700px" }}
                alt="logo"
              />
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a company</h4>
                <p className="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </form>
  );
}

export default App;
