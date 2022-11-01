import React, { FC } from "react";
import { SignInForm } from "../../common/forms/SignInForm";

import styles from "./NewUser.module.css";

type NewUserProps = {
  username?: string;
};

const NewUser: FC<NewUserProps> = ({ username = "cbrum" }) => (
  <div className={`${styles.container} flex-column`}>
    <span>Hi, {username}!</span>
    <span>Welcome to</span>
    <span>TARGET</span>
    <SignInForm />
  </div>
);

export { NewUser };
