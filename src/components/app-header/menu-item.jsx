import React from "react";

import styles from "./app-header.module.css";

export default function MenuItem(props) {
  return (
    <a className={`${styles["menu-item"]} ${props.active && styles["menu-item_active"]} pl-5 pr-5`} href={props.url}>
      <props.Icon type={props.active ? "primary" : "secondary"} />
      <span className="text text_type_main-default">{props.children}</span>
    </a>
  );
}
