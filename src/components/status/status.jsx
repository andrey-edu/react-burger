import React from "react";

import PropTypes from "prop-types";

import styles from "./status.module.css";
import Loader from "../loader/loader";

import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";


function Status({ children, type }) {
  return (
    <div className={styles.status}>
      {type === "loading" &&
        <Loader>{children}</Loader>
      }
      {type === "error" &&
        <p className="text text_type_main-default text_color_error">{children}</p>
      }
    </div>
  );

}

Status.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["loading", "error"])
}

export default Status;
