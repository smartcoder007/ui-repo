import React from "react";
import { Route, Navigate } from "react-router-dom";

const AuthRoute = ({ component: Component, isTokenAvailable, data }) => {
  console.log("AuthRoute => " + JSON.stringify(isTokenAvailable) + " ," + data);
  return (
    <Route
      render={(props) =>
        isTokenAvailable !== null ? (
          <Component {...props} data={data} />
        ) : (
            <Navigate to="/" />
        )
      }
    />
  );
};

export { AuthRoute };
