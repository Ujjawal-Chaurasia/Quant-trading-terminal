import React from "react";

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
];

export default authRoutes;
