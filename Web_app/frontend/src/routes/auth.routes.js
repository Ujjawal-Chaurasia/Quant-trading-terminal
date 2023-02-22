import React from "react";

import Portfolio from "../pages/Portfolio";
const Register = React.lazy(() => import("../pages/Signup"));
const Login = React.lazy(() => import("../pages/Login"));

const authRoutes = [
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Register />,
    path: "/register",
  },
  {
    element: <Portfolio />,
    path: "/portfolio"
  }
];

export default authRoutes;
