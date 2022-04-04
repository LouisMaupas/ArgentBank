import React from "react";
import { Navigate } from "react-router-dom";
import { useLogged } from "../../utils/hooks/customHooks";

function PrivateRoute({ component: RouteComponent }) {
  /**
   * Boolean : Custom Hook that check if user is logged
   */
  const logged = useLogged();

  /**
   * If session / user is logged we can acces to composant ...
   */
  if (logged) return <RouteComponent />;

  /**
   * ... Else if session / user is not logged, redirect to sign in page
   */
  return <Navigate to="/sign-in" />;
}

export default PrivateRoute;
