import React from "react";
import PropTypes from "prop-types";

import styles from "./app-header.module.css";

function MenuItem({ Icon, active, url, children }) {

  let textClasses = "text text_type_main-default";
  if (!active) {
    textClasses += " text_color_inactive";
  }

  return (
    <a className={`${styles.item} pl-5 pr-5`} href={url}>
      <Icon type={active ? "primary" : "secondary"} />
      <span className={textClasses}>{children}</span>
    </a>
  );
}

MenuItem.propTypes = {
  Icon: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default MenuItem;
