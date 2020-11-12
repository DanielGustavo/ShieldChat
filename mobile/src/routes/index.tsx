import React from 'react';

import { useAuth } from '../context/AuthContext';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Routes: React.FC = () => {
  const { authenticated } = useAuth();

  return authenticated ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
