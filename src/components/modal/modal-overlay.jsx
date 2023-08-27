import React from "react";
import PropTypes from "prop-types";

import styles from "./modal.module.css";

import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";


function ModalOverlay({ closeModal }) {
  return (
    <div className={styles.overlay} onClick={closeModal}></div>
  );

}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired
}

export default ModalOverlay;
