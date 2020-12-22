import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, isTokenAvailable }) => {
  return (
    <Route
      render={(props) =>
        isTokenAvailable !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export { AuthRoute };
