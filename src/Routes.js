import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    isLoggedIn()
    ? <Component {...props} />
    : <Redirect to="/login" />
  )}/>
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    isLoggedIn()
    ? <Redirect to="/" />
    : <Component {...props} />
  )}/>
);

const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  return true;
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LoginRoute exact path="/login" component={Login} />
        <AuthRoute path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;