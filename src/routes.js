import React from 'react';
import { BrowserRoute, Switch, Route } from 'react-router-dom';
import WelcomeContainer from './pages/welcome/WelcomeContainer';

const Routes = () => (
  <BrowserRoute>
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
    </Switch>
  </BrowserRoute>
);

export default Routes;
