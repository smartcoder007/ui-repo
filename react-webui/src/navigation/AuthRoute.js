import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, isTokenAvailable, data }) => {
  console.log("AuthRoute => " + JSON.stringify(isTokenAvailable) + " ," + data);
  return (
    <Route
      render={(props) =>
        isTokenAvailable !== null ? (
          <Component {...props} data={data} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export { AuthRoute };
