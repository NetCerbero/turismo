import React from "react";
import { ROUTE_PAGE } from "config/RoutePage";
import { Route, Navigate } from "react-router-dom";
import { AuthManager } from "service/AuthManager";

const WrapPrivateRoute = ({ children }: any) => {
  const authed = AuthManager.isLogin();
  return authed ? children : <Navigate to={ROUTE_PAGE.AUTH.LOGIN} />;
};
export default function getPrivateRoute({
  element: Component,
  path,
  ...rest
}: any) {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      key={rest.key}
      path={path}
      element={
        <WrapPrivateRoute>
          <Component {...rest} />
        </WrapPrivateRoute>
      }
    />
  );
}
