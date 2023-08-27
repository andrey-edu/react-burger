import React from "react";

import styles from "./app-header.module.css";

import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

import MenuItem from "./menu-item";

export default function AppHeader() {

  return (
    <nav className={`${styles.menu} pt-4 pb-4`}>

      <div className={`${styles.group} ${styles.left}`}>
        <MenuItem Icon={BurgerIcon} active={true} url={"#"}>Конструктор</MenuItem>
        <MenuItem Icon={ListIcon} active={false} url={"#"}>Лента заказов</MenuItem>
      </div>

      <div className={`${styles.group} ${styles.center}`} >
        <a href="#">
          <Logo />
        </a>
      </div>

      <div className={`${styles.group} ${styles.right}`}>
        <MenuItem Icon={ProfileIcon} active={false} url={"#"}>Личный кабинет</MenuItem>
      </div>

    </nav>
  );
}


