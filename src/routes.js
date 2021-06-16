import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import WelcomeContainer from './pages/welcome/WelcomeContainer';
import MenuContainer from './pages/menu/MenuContainer';
import ConfirmationContainer from './pages/confirmation/ConfirmationContainer';

const Routes = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <Route path="/menu" component={MenuContainer} />
      <Route path="/confirmation" component={ConfirmationContainer} />
    </Switch>
  </HashRouter>
);

export default Routes;
