/* eslint-disable react/forbid-prop-types */
import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthorizedRoute = ({ component: Component, ...rest }) => {
  const token = sessionStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthorizedRoute;
