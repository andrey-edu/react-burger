import React from "react";

import styles from "./burger-constructor.module.css";

import { ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerConstructor(props) {
  const bun = props.ingredients.filter((ingredient) => ingredient.type == "bun")[1]; // ! taken first element
  const ingredients = props.ingredients.filter((ingredient) => ingredient.type != "bun").slice(0, 8); // ! sliced

  const mainIngredients = React.useRef(null);
  const orderBlock = React.useRef(null);

  React.useEffect(() => {
    if (mainIngredients) {

      const windowHeight = window.innerHeight;
      const mainY = mainIngredients.current.getBoundingClientRect().y;
      const orderHeight = orderBlock.current.getBoundingClientRect().height;
      const padding = 40;
      const ingredientHeight = mainIngredients.current.firstChild.getBoundingClientRect().height;
      const ingredientPadding = parseInt(window.getComputedStyle(mainIngredients.current).getPropertyValue("row-gap"));

      const freeSpace = windowHeight - orderHeight - (padding*2) - mainY - ingredientHeight;
      const ingredientsCount = ~~(freeSpace/(ingredientHeight+ingredientPadding));

      const mainHeight = ingredientsCount * (ingredientHeight+ingredientPadding) - ingredientPadding;

      mainIngredients.current.style.height = `${mainHeight}px`;
    }
  },[]);

  return (
    <>
      <div className={`${styles.burger} mt-25`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
          extraClass="ml-8"
        />
        <div ref={mainIngredients} className={`${styles.ingredients} custom-scroll`}>
          {
            ingredients.map((ingredient, idx) =>
              <div key={idx} className={`${styles.ingredient}`}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </div>
            )
          }
        </div>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
          extraClass="ml-8"
        />
      </div>

      <div ref={orderBlock} className={`${styles.order} mt-10`}>
        <div className={`${styles.total} text text_type_digits-medium`}>
          <span>610</span>
          <CurrencyIcon type="primary" style={{width:36}}/>
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </>
  );
}

