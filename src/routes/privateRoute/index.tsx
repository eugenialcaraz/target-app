import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { urlFormat, useAuth } from "@/utils";
import { Pages } from "@/pages";

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to={urlFormat(Pages.SignIn)} />;
};

export { PrivateRoute };
