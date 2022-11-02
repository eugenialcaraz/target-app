import React from "react";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";
import { handleModal, ModalStatus } from "@/state/features";
import { Icon, ContactForm } from "@/components/common";

import styles from "./Modal.module.css";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { modalOpen, modalStatus } = useAppSelector((state) => state.modal);

  const closeModal = () => {
    dispatch(handleModal(false));
  };

  const modalContent = (() => {
    switch (modalStatus) {
      case ModalStatus.Error:
        return <p>error</p>;

      case ModalStatus.Success:
        return <p>success</p>;

      default:
        return (
          <>
            <h1>Don’t be shy, drop us a line!</h1>
            <ContactForm />
          </>
        );
    }
  })();

  return (
    <>
      <div
        className={`${styles.overlay} center flex-column ${
          modalOpen ? styles.opened : styles.closed
        }`}
        onClick={closeModal}></div>
      <div
        className={`${styles.modalContainer} ${
          modalOpen ? styles.opened : styles.closed
        } center flex-column`}>
        <div className={styles.iconContainer} onClick={closeModal}>
          <Icon name="close" />
        </div>

        <div className={`${styles.modalContent} flex-column `}>
          <>
            <Icon name="logo" />
            {modalContent}
          </>
        </div>
      </div>
    </>
  );
};

export { Modal };
