import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { urlFormat, getCurrentUser } from "@/utils";
import { Pages } from "@/types";

const PrivateRoute = () => {
  const user = getCurrentUser();
  return user ? <Outlet /> : <Navigate to={urlFormat(Pages.SignIn)} />;
};

export { PrivateRoute };
