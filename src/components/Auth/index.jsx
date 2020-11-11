import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SignupPage from '../../pages/SignupPage';
import AuthMenu from '../AuthMenu';

import './auth.scss';

function Auth() {
  const { url } = useRouteMatch();

  return (
    <div className="auth">
      <AuthMenu />
      <Switch>
        <Route path={`${url}/sign-up`} component={SignupPage} />
      </Switch>
    </div>
  )
}

export default Auth;