import React from "react";
import { ProtectedRoute } from "./ProtectedRoute";

const Home = React.lazy(() => import("../pages/Welcomepage"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const normalRoutes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: (
      // <ProtectedRoute type="auth">
        <Dashboard />
      // </ProtectedRoute>
    ),
    path: "/dashboard",
  },
];

export default normalRoutes;
