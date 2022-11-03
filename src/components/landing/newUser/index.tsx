import React from "react";
import { useAppSelector } from "@/state/app/hooks";
import { SignInForm } from "@components/common";

import styles from "./NewUser.module.css";

const NewUser = () => {
  const { username } = useAppSelector((state) => state.user);
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
