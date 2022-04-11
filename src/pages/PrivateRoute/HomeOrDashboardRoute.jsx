import React from "react";
import { Navigate } from "react-router-dom";
import { useLogged } from "../../utils/hooks/customHooks";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";

function PrivateDashboardRoute({ component: Home }) {
  /**
   * Boolean : Custom Hook that check if user is logged
   */
  const logged = useLogged();

  /**
   * If session / user is logged we can acces to composant else redirect to sign in page
   */
  if (logged) {
    return <Dashboard />;
  } else {
    return <Home />;
  }
}

export default PrivateDashboardRoute;
