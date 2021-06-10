import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomeContainer from './pages/welcome/WelcomeContainer';
import MenuContainer from './pages/menu/MenuContainer';
import ConfirmationContainer from './pages/confirmation/ConfirmationContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <Route exact path="/menu" component={MenuContainer} />
      <Route exact path="/confirmation" component={ConfirmationContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
