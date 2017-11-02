import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const checkAuth = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest} render={props => (
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      )}
    />
  );
};

export default PrivateRoute;