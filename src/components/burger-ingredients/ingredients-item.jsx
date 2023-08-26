import React from "react";

import styles from "./burger-ingredients.module.css";
import { ingredientsPropTypes } from "../../utils/types";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsItem({ ingredient }) {

  function handleClickItem() {
    console.log("clicked");
  }

  return (
    <div className={`${styles.ingredient} mt-6`} onClick={handleClickItem}>

      <div className={styles.image}>
        <img src={ingredient.image} alt="" />
      </div>

      <Counter count={1} size="default" />

      <div className={`${styles.price} mt-1 mb-1`}>
        <span className="text text_type_digits-default">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>

      <p className={`${styles.name} text text_type_main-default`}>
        {ingredient.name}
      </p>

    </div>
  );
}

IngredientsItem.propTypes = {
  ingredient: ingredientsPropTypes.isRequired
}

export default IngredientsItem;
