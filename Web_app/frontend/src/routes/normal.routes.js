import React from 'react';

const Home = React.lazy(() => import('../pages/Welcomepage'));
const Dashboard = React.lazy(()=>import('../pages/Dashboard'))
const normalRoutes = [
  {
    element: <Home />,
    path: '/',
  },
  {
    element: <Dashboard />,
    path:'/dashboard',
  }
];

export default normalRoutes;
