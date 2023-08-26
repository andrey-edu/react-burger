import React from "react";
import PropTypes from "prop-types";

import styles from "./loader.module.css";

function Loader({ message }) {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      {message &&
        <div className="text text_type_main-default text_color_inactive mt-4">{message}</div>
      }
    </div>
  );
}

Loader.propTypes = {
  message: PropTypes.string
}

export default Loader;
