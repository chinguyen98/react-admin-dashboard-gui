import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function AuthenticatedRoute({ component: Component, ...rest }) {
  const { isLogged } = useSelector(state => state.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogged ? <Component {...props} /> : <Redirect exact to="/auth/sign-in" />
      }}
    />
  )
}

export default AuthenticatedRoute;