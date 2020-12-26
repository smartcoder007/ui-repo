import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import { useSelector } from "react-redux";
import { AutoComplete } from "../pages/AutoComplete/AutoComplete";
import { UserForm } from "../pages/UserForm/UserForm";
import { UserForm1 } from "../pages/UserForm/UserForm1";

const RouterConfig = () => {
  const userToken = useSelector((state) => state.AppReducer.userInfo);
  console.log("Route config token check :" + JSON.stringify(userToken));
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/autocomplete" exact component={AutoComplete} />
        <Route path="/userform" exact component={UserForm} />
        <Route path="/userform1" exact component={UserForm1} />
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
