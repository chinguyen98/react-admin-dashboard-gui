import React from 'react';
import { Container } from 'react-bootstrap';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, useRouteMatch } from 'react-router-dom';
import SignupPage from '../../pages/SignupPage';
import AuthMenu from '../AuthMenu';

import './auth.scss';

function Auth() {
  const { url } = useRouteMatch();

  return (
    <div className="auth">
      <AuthMenu />
      <Container>
        <Switch>
          <Route path={`${url}/sign-up`} component={SignupPage} />
        </Switch>
      </Container>
    </div>
  )
}

export default Auth;