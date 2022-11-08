import React from "react";
import { Link } from "react-router-dom";

import { clearLocalStorage, getLocalStorage, urlFormat } from "@/utils";
import { Pages, LocalStorageKeys } from "@/types";
import { logoutRequest } from "@/services";

const Main = () => {
  const user = getLocalStorage(LocalStorageKeys.user);

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

export { Main };
