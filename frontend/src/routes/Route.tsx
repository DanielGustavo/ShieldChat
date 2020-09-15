import React from 'react';
import {
  Route as RouterDOMRoute,
  RouteProps as RouterDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

interface RouteProps extends RouterDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { authenticated } = useAuth();

  return (
    <RouterDOMRoute
      {...rest}
      component={() => {
        if (isPrivate === authenticated) {
          return <Component />;
        }

        return isPrivate ? <Redirect to="/signin" /> : <Redirect to="/" />;
      }}
    />
  );
};

export default Route;
