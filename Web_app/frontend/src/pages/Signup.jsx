import React, { useState } from "react";
import "../styles/Signup.css";
import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateCurrentUser
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  MDBCheckbox,
} from "mdb-react-ui-kit";

function App() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // ..
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <MDBContainer fluid>
      {/* {JSON.stringify(userData)} */}
      <MDBCard className="text-black m-4" style={{ borderRadius: "50px" }}>
        <MDBCardBody>
          <MDBRow>
            <Link to="/">
              <h3
                style={{ color: "black", textDecoration: "underline" }}
                className="text-center fw-bold mt-1 mb-5 pb-1"
              >
                QUANT TRADING TERMINAL
              </h3>
            </Link>

            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <div className="">
                <p className=" h3 fw-bold mb-3 mx-1 mx-md-4 mt-2">Sign up</p>
              </div>

              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ width: "100%" }}
              >
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    name="name"
                    onChange={handleChange}
                    label="Your Name"
                    id="form1"
                    type="text"
                    style={{ width: "350px" }}
                  />
                </div>

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

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                    style={{ width: "350px" }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <div className="register-text">
                <div>
                  <MDBBtn
                    outline
                    color="secondary"
                    type="submit"
                    className="mb-3"
                    size="lg"
                    onClick={handleSubmit}
                  >
                    Register
                  </MDBBtn>
                </div>
                <div>
                  <p>
                    <Link to="/login">
                      <span className="me-1 fw-normal">sign in</span>
                    </Link>
                    Instead?
                  </p>
                </div>
              </div>

              <div style={{ width: "60%" }}>
                <div className="awesome-divider"></div>
              </div>

              <div className="sso">
                <MDBBtn
                  style={{ backgroundColor: "#dd4b39" }}
                  className="mb-3"
                  size="lg"
                  onClick={handleGoogleSignIn}
                >
                  <MDBIcon className="me-2" fab icon="google" />
                  Google Sign Up
                </MDBBtn>

                <MDBBtn
                  className="mb-3"
                  style={{ backgroundColor: "#333333" }}
                  size="lg"
                >
                  <MDBIcon className="me-2" fab icon="github" />
                  Github Sign Up
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
  );
}

export default App;
