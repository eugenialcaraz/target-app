import React from "react";
import { Link } from "react-router-dom";

import { clearLocalStorage, urlFormat, isAuthenticated } from "@/utils";
import { Pages } from "@/pages";
import { logoutRequest } from "@/services";

const UserActions = () => {
  const user = isAuthenticated();

  const handleLogout = async () => {
    try {
      await logoutRequest(user);
      clearLocalStorage();
    } catch (error) {
      //TODO: Verify with PO if we want to show an alert if there's an error
      console.error((error as Error).message);
    }
  };

  return (
    <Link to={urlFormat(Pages.SignIn)} onClick={handleLogout}>
      Logout
    </Link>
  );
};

export { UserActions };
