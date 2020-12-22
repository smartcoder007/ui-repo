import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import { useSelector } from "react-redux";

const RouterConfig = () => {
  const userToken = useSelector((state) => state.AppReducer.userInfo);
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
        <AuthRoute
          path="/landing"
          isTokenAvailable={userToken}
          component={Landing}
        />
      </Switch>
    </div>
  );
};

export { RouterConfig };
