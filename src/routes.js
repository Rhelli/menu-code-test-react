import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomeContainer from './pages/welcome/WelcomeContainer';
import MenuContainer from './pages/menu/MenuContainer';
import ConfirmationContainer from './pages/confirmation/ConfirmationContainer';

const Routes = () => (
  <BrowserRouter basename="/public/webpack/index.html">
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <Route path="/menu" component={MenuContainer} />
      <Route path="/confirmation" component={ConfirmationContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
