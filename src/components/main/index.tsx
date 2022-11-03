import React from "react";
import { Link } from "react-router-dom";
import { clearLocalStorage, urlFormat } from "@/utils";
import { Pages } from "@/pages";

const Main = () => (
  <Link to={urlFormat(Pages.SignIn)} onClick={() => clearLocalStorage()}>
    Logout
  </Link>
);

export { Main };
