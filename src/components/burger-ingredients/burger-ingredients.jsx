import React from "react";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsTabs from "./ingredients-tabs";
import IngredientsGroup from "./ingredients-group";

import styles from "./burger-ingredients.module.css";


export default function BurgerIngredients(props) {
    const ingredientsGroups = React.useRef(null);
    React.useEffect(() => {
      if (ingredientsGroups) {
        const windowHeight = window.innerHeight;
        const ingredientsY = ingredientsGroups.current.getBoundingClientRect().y;
        const bottomPadding = 40;

        // const htmlEl = document.querySelector("html");

        ingredientsGroups.current.style.height = `${windowHeight-ingredientsY-bottomPadding}px`;
      }
    },[]);

    return (
      <>
        <h2 className="text text_type_main-large mt-10">
          Соберите бургер
        </h2>
        <IngredientsTabs />
        <div ref={ingredientsGroups} className={`${styles.types} custom-scroll`}>
          <IngredientsGroup groupName="Булки" group={props.ingredients.filter((ingredient) => ingredient.type == "bun")} />
          <IngredientsGroup groupName="Соусы" group={props.ingredients.filter((ingredient) => ingredient.type == "sauce")} />
          <IngredientsGroup groupName="Начинки" group={props.ingredients.filter((ingredient) => ingredient.type == "main")} />
        </div>
      </>
    );

}


