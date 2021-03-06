import React from 'react';
import { Route, HashRouter, Switch, Router } from 'react-router-dom';
import LoginPage from "./Pages/Login";
import HomePage from "./Pages/Home";

export default () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}