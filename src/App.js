import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
