import React from "react";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";
import { toggleModal } from "@/state/features";
import { Icon, ContactForm } from "@/components/common";

import styles from "./ContactModal.module.css";

const ContactModal = () => {
  const dispatch = useAppDispatch();
  const { modalOpen } = useAppSelector((state) => state.modal);

  const closeModal = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      <div
        className={`${styles.overlay} center flex-column ${
          modalOpen ? styles.opened : styles.closed
        }`}
        onClick={closeModal}>
        {""}
      </div>
      <div
        className={`${styles.modalContainer} ${
          modalOpen ? styles.opened : styles.closed
        } center flex-column`}>
        <div className={styles.iconContainer} onClick={closeModal}>
          <Icon name="close" />
        </div>

        <div className={`${styles.modalContent} flex-column `}>
          <Icon name="logo" />
          <h1>Don’t be shy, drop us a line!</h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export { ContactModal };
