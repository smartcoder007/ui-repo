import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import { Landing } from "../pages/Landing";
import { Login } from "../pages/Login";
import { useSelector } from "react-redux";
import { AutoComplete } from "../pages/AutoComplete/AutoComplete";
import { UserForm } from "../pages/UserForm/UserForm";
import { UserForm1 } from "../pages/UserForm/UserForm1";
import { UserInfo } from "../pages/UserInfo/UserInfo";
import { Signup } from "../pages/Signup/Signup";

const RouterConfig = () => {
  const userToken = useSelector((state) => state.AppReducer.userInfo);
  console.log(
    "Route config token from local storage :" + JSON.stringify(userToken)
  );

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <AuthRoute
          path="/autocomplete"
          isTokenAvailable={userToken}
          component={AutoComplete}
        />
        <AuthRoute
          path="/users"
          isTokenAvailable={userToken}
          component={UserInfo}
        />
        <AuthRoute
          path="/landing"
          isTokenAvailable={userToken}
          component={Landing}
        />
        <AuthRoute
          path="/userform"
          isTokenAvailable={userToken}
          component={UserForm}
        />
        <AuthRoute
          path="/userform1"
          isTokenAvailable={userToken}
          component={UserForm1}
        />
      </Switch>
    </div>
  );
};

export { RouterConfig };
