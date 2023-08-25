import React from "react";

import IngredientsItem from "./ingredients-item";
import styles from "./burger-ingredients.module.css";

export default function IngredientsGroup (props) {
  return (
    <div className="mt-10">
      <h3 className="text text_type_main-medium">{props.groupName}</h3>
      <div className={styles.type}>
        {
          props.group.map((ingredient) =>
            <IngredientsItem key={ingredient._id} ingredient={ingredient} />
          )
        }
      </div>
    </div>
  );
};


