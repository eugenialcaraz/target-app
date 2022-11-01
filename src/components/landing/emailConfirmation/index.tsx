import React from "react";
import styles from "./EmailConfirmation.module.css";

const EmailConfirmation = () => (
  <div className={`${styles.container} flex-column`}>
    <span>Yey!</span>
    <span>Only one more step to start enjoying</span>
    <span>TARGET</span>
    <p>We’ve sent an email to confirm your account. Please check your inbox.</p>
  </div>
);

export { EmailConfirmation };
