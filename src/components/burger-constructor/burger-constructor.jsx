import React from "react";
import { useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import styles from "./burger-constructor.module.css";
import { ingredientsPropTypes } from "../../utils/types";

import { ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor({ ingredients }) {
  const bun = useMemo(() => ingredients.filter((ingredient) => ingredient.type === "bun")[1], [ingredients]); // ! taken first element
  const filling = useMemo(() => ingredients.filter((ingredient) => ingredient.type !== "bun").slice(0, 8) ,[ingredients]); // ! sliced

  const mainIngredientsRef = useRef(null);
  const orderBlockRef = useRef(null);

  function resizeFillingGroup () {
    const windowHeight = window.innerHeight;
    const mainY = mainIngredientsRef.current.getBoundingClientRect().y;
    const orderHeight = orderBlockRef.current.getBoundingClientRect().height;
    const padding = 40;
    const ingredientHeight = mainIngredientsRef.current.firstChild.getBoundingClientRect().height;
    const ingredientPadding = parseInt(window.getComputedStyle(mainIngredientsRef.current).getPropertyValue("row-gap"));

    const freeSpace = windowHeight - orderHeight - (padding*2) - mainY - ingredientHeight;
    const ingredientsCount = ~~(freeSpace/(ingredientHeight+ingredientPadding));

    const mainHeight = ingredientsCount * (ingredientHeight+ingredientPadding) - ingredientPadding;

    mainIngredientsRef.current.style.height = `${mainHeight}px`;
  }

  useEffect(() => {
    if (mainIngredientsRef) {
      resizeFillingGroup();
      window.addEventListener("resize", resizeFillingGroup);
    }

    return () => {
      window.removeEventListener("resize", resizeFillingGroup);
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
        <div ref={mainIngredientsRef} className={`${styles.ingredients} custom-scroll`}>
          {
            filling.map((ingredient, idx) =>
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

      <div ref={orderBlockRef} className={`${styles.order} mt-10`}>
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

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired
}

export default BurgerConstructor;
