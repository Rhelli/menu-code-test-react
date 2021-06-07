import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomeContainer from './pages/welcome/WelcomeContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
