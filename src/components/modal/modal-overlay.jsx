import React from "react";

import styles from "./modal.module.css";

import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";


function ModalOverlay() {
  return (
    <div className={styles.overlay}></div>
  );

}

export default ModalOverlay;
