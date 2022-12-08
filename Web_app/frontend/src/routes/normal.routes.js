import React from 'react';

const Home = React.lazy(() => import('../pages/Welcomepage'));

const normalRoutes = [
  {
    element: <Home />,
    path: '/',
  },
];

export default normalRoutes;
