import React from "react";
import { useState } from "react";

import styles from "./ingredient-details.module.css";
import { MESSAGES } from "../../utils/messages";
import { ingredientsPropTypes } from "../../utils/types";

import Loader from "../loader/loader";

import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientDetails({ ingredient }) {

  const [imageLoading, setImageLoaded] = useState(true);

  function onImageLoad() {
    setImageLoaded(false);
  }

  return (
    <>
      <div className={styles.image}>
        <img src={ingredient.image_large} onLoad={onImageLoad} />
        {imageLoading && <Loader>{MESSAGES.loadingImage}</Loader>
        }
      </div>
      <h3 className={`${styles.name} text text_type_main-medium mt-4`}>{ingredient.name}</h3>
      <div className={`${styles.details} text_color_inactive`}>
        <div className={`${styles.detail} mt-8`}>
          <span className="text text_type_main-default">Калории,ккал</span>
          <span className="text text_type_digits-default mt-2">{ingredient.calories}</span>
        </div>
        <div className={`${styles.detail} mt-8`}>
          <span className="text text_type_main-default">Белки, г</span>
          <span className="text text_type_digits-default mt-2">{ingredient.proteins}</span>
        </div>
        <div className={`${styles.detail} mt-8`}>
          <span className="text text_type_main-default">Жиры, г</span>
          <span className="text text_type_digits-default mt-2">{ingredient.fat}</span>
        </div>
        <div className={`${styles.detail} mt-8`}>
          <span className="text text_type_main-default">Углеводы, г</span>
          <span className="text text_type_digits-default mt-2">{ingredient.carbohydrates}</span>
        </div>
      </div>
    </>
  );
}

IngredientDetails.propTypes = {
  ingredient: ingredientsPropTypes.isRequired
}

export default IngredientDetails;
