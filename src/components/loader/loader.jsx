import React from "react";
import PropTypes from "prop-types";

import styles from "./loader.module.css";

function Loader({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      {children &&
        <div className="text text_type_main-default text_color_inactive mt-4">{children}</div>
      }
    </div>
  );
}

Loader.propTypes = {
  children: PropTypes.string
}

export default Loader;
