import React from "react";

import styles from "./app-header.module.css";

export default function MenuItem(props) {

  let textClasses = "text text_type_main-default";
  if (!props.active) {
    textClasses += " text_color_inactive";
  }

  return (
    <a className={`${styles.item} pl-5 pr-5`} href={props.url}>
      <props.Icon type={props.active ? "primary" : "secondary"} />
      <span className={textClasses}>{props.children}</span>
    </a>
  );
}
