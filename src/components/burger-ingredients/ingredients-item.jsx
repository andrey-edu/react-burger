import React from "react";

import styles from "./burger-ingredients.module.css";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientsItem(props) {
  return (
    <div className={`${styles.ingredient} mt-6`}>

      <div className={styles.image}>
        <img src={props.ingredient.image} alt="" />
      </div>

      <Counter count={1} size="default" />

      <div className={`${styles.price} mt-1 mb-1`}>
        <span className="text text_type_digits-default">{props.ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>

      <p className={`${styles.name} text text_type_main-default`}>
        {props.ingredient.name}
      </p>

    </div>
  );
}
