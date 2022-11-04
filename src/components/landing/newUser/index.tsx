import React from "react";
import { useAppSelector } from "@/state/app/hooks";
import { SignInForm } from "@components/common";

import styles from "./NewUser.module.css";

const NewUser = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className={`${styles.container} flex-column`}>
      <span>Hi, {user?.name}!</span>
      <span>Welcome to</span>
      <span>TARGET</span>
      <SignInForm />
    </div>
  );
};

export { NewUser };
