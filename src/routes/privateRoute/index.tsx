import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { urlFormat, isAuthenticated } from "@/utils";
import { Pages } from "@/pages";

const PrivateRoute = () => {
  const user = isAuthenticated();
  return user ? <Outlet /> : <Navigate to={urlFormat(Pages.SignIn)} />;
};

export { PrivateRoute };
