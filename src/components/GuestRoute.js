import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./login";

const GuestRoute = ({ component: Component, ...rest }) => {
  const token = sessionStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) => (!token ? <Login {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default GuestRoute;
