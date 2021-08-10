import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { NavBar } from "./components";

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact patch="/" component={NavBar} />
      </Switch>
    </Router>
  );
};
