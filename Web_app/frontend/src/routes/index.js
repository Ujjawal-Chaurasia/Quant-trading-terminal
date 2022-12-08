import React from 'react';
import { useRoutes } from 'react-router-dom';
import Error from '../pages/Error';

import normalRoutes from './normal.routes';
import authRoutes from './auth.routes';

const Routing = () => {
  const routes = useRoutes([
    ...normalRoutes,
    ...authRoutes,
    { element: <Error />, path: '*' },
  ]);

  return routes;
};

export default Routing;
