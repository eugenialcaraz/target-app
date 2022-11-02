import React from "react";
import { useAppDispatch, useAppSelector } from "@/state/app/hooks";
import { handleModal } from "@/state/features/modal";
import { Icon, Input, Button, Textarea } from "@/components/common";
import styles from "./Modal.module.css";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { modalOpen } = useAppSelector((state) => state.modal);

  return (
    <>
      <div
        className={`${styles.overlay} center flex-center ${
          modalOpen ? styles.opened : styles.closed
        }`}
        onClick={() => dispatch(handleModal(false))}></div>
      <div
        className={`${styles.modalContainer} ${
          modalOpen ? styles.opened : styles.closed
        } center flex-center`}>
        <div className={styles.iconContainer}>
          <Icon name="close" />
        </div>

        <div className={`${styles.modalContent} flex-center `}>
          <Icon name="logo" />
          <h1>Don’t be shy, drop us a line!</h1>
          <form className="flex-column">
            <Input label="email*" stylesName="contact" />
            <Textarea label="message*" />
            <Button type="submit" value="send" />
          </form>
        </div>
      </div>
    </>
  );
};

export { Modal };
