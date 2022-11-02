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
        return (
          <div>
            <p>Opps!</p>
            <p>An error has occurred while sending your message.</p>
          </div>
        );

      case ModalStatus.Success:
        return (
          <div>
            <p>Thanks for getting in touch!</p>
            <p> We’ll get back to you as soon as we can.</p>
          </div>
        );

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
            <Icon
              name={modalStatus === ModalStatus.Error ? "errorLogo" : "logo"}
            />
            {modalContent}
          </>
        </div>
      </div>
    </>
  );
};

export { Modal };
