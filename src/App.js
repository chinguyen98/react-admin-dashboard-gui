import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { userSetUserAction } from './actions/user.action';
import decodeToken from './api/decodeToken';
import Auth from './components/Auth';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import HomePage from './pages/HomePage';

function App() {
  const dispatch = useDispatch();

  const { isLogged } = useSelector(state => state.user);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const data = decodeToken(token);
    if (data !== null) {
      const { name } = data;
      dispatch(userSetUserAction(name));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute exact path="/" component={HomePage} />
        <Route path="/auth" >
          {
            !isLogged ? <Auth /> : <Redirect exact to="/" />
          }
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
