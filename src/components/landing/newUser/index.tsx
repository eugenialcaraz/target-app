import React from "react";

import { SignInForm } from "@components/common";
import { getLocalStorage } from "@/utils";
import { LocalStorageKeys } from "@/types";

import styles from "./NewUser.module.css";

const NewUser = () => {
  const username = getLocalStorage(LocalStorageKeys.username);
  return (
    <div className={`${styles.container} flex-column`}>
      <span>Hi, {username}!</span>
      <span>Welcome to</span>
      <span>TARGET</span>
      <SignInForm />
    </div>
  );
};

export { NewUser };
