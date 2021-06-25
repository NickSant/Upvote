import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

type PrivateRouteProps = {
  component: React.FC;
  path: string;
};

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
