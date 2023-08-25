import React from "react";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import IngredientsTabs from "./ingredients-tabs";
import IngredientsGroup from "./ingredients-group";

import styles from "./burger-ingredients.module.css";
import { ingredientsPropTypes } from "../../utils/types";

import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";


function BurgerIngredients({ ingredients }) {
    const ingredientsGroupsRef = useRef(null);
    useEffect(() => {
      if (ingredientsGroupsRef) {
        const windowHeight = window.innerHeight;
        const ingredientsY = ingredientsGroupsRef.current.getBoundingClientRect().y;
        const bottomPadding = 40;

        ingredientsGroupsRef.current.style.height = `${windowHeight-ingredientsY-bottomPadding}px`;
      }
    },[]);

    return (
      <>
        <h2 className="text text_type_main-large mt-10">
          Соберите бургер
        </h2>
        <IngredientsTabs />
        <div ref={ingredientsGroupsRef} className={`${styles.types} custom-scroll`}>
          <IngredientsGroup groupName="Булки" group={ingredients.filter((ingredient) => ingredient.type == "bun")} />
          <IngredientsGroup groupName="Соусы" group={ingredients.filter((ingredient) => ingredient.type == "sauce")} />
          <IngredientsGroup groupName="Начинки" group={ingredients.filter((ingredient) => ingredient.type == "main")} />
        </div>
      </>
    );

}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired
}

export default BurgerIngredients;
