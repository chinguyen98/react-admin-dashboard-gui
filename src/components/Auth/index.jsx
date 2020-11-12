import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SigninPage from '../../pages/SigninPage';
import SignupPage from '../../pages/SignupPage';

import './auth.scss';

function Auth() {
  const { url } = useRouteMatch();

  return (
    <div className="auth">
      <Switch>
        <Route path={`${url}/sign-up`} component={SignupPage} />
        <Route path={`${url}/sign-in`} component={SigninPage} />
      </Switch>
    </div>
  )
}

export default Auth;