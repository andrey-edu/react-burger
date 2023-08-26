import React from "react";
import { useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import ModalOverlay from "./modal-overlay";

import styles from "./modal.module.css";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";


function Modal({ children, title, closeModal }) {

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    }
  },[]);

  const modalRoot = useMemo(() => document.getElementById("react-modals"), []);
  return createPortal(
    (
      <>
        <ModalOverlay closeModal={closeModal} />
        <div className={`${styles.modal} p-10 pb-15`}>
          <div className={styles.header}>
            <button className={styles.close} onClick={closeModal}>
              <CloseIcon type="primary" />
            </button>
            {title && <h2 className="text text_type_main-large mt-3 mb-3">{title}</h2>}
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </>
    ),
    modalRoot
  );

}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired
}

export default Modal;
