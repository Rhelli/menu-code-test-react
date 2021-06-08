import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomeContainer from './pages/welcome/WelcomeContainer';
import MenuContainer from './pages/menu/MenuContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <Route exact path="/menu" component={MenuContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
