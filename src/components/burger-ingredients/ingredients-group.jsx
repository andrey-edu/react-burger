import React from "react";
import PropTypes from "prop-types";

import IngredientsItem from "./ingredients-item";
import styles from "./burger-ingredients.module.css";
import { ingredientsPropTypes } from "../../utils/types";

import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientsGroup ({ groupName, group }) {
  return (
    <div className="mt-10">
      <h3 className="text text_type_main-medium">{groupName}</h3>
      <div className={styles.type}>
        {
          group.map((ingredient) =>
            <IngredientsItem key={ingredient._id} ingredient={ingredient} />
          )
        }
      </div>
    </div>
  );
};

IngredientsGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  group: PropTypes.arrayOf(ingredientsPropTypes).isRequired
}

export default IngredientsGroup;
