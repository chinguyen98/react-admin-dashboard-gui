import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { userSetUserAction } from './actions/user.action';
import decodeToken from './api/decodeToken';
import Auth from './components/Auth';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import MainPage from './pages/MainPage';
import NoMatchPage from './pages/NoMatchPage';

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
        <AuthenticatedRoute path="/home" component={MainPage} />
        <Route path="/auth" >
          {
            !isLogged ? <Auth /> : <Redirect exact to="/home/dashboard" />
          }
        </Route>
        <Route path="*" component={NoMatchPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
