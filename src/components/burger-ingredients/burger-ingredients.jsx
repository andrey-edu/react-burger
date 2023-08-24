import React from "react";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsTabs from "./ingredients-tabs";
import IngredientsGroup from "./ingredients-group";

import styles from "./burger-ingredients.module.css";
import { data } from "../../utils/data";


export default function BurgerIngredients() {
    return (
      <>
        <h2 className="text text_type_main-large mt-10">
          Соберите бургер
        </h2>
        <IngredientsTabs />
        <div className={styles.types}>
          <IngredientsGroup groupName="Булки" group={data.filter((ingredient) => ingredient.type == "bun")} />
          <IngredientsGroup groupName="Соусы" group={data.filter((ingredient) => ingredient.type == "sauce")} />
          <IngredientsGroup groupName="Начинки" group={data.filter((ingredient) => ingredient.type == "main")} />
        </div>
      </>
    );

}


