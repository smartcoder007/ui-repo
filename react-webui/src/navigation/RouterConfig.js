import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";

const RouterConfig = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/landing" exact component={Landing} />
        <AuthRoute path="/landing1" component={Landing} />
      </Switch>
    </div>
  );
};

export { RouterConfig };
