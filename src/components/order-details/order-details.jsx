import React from "react";

import styles from "./order-details.module.css";
import doneImagePath from "../../images/done.svg";

import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";

function OrderDetails() {

  return (
    <>
      <h2 className={`text text_type_digits-large mt-4 ${styles.order}`}>034536</h2>
      <h3 className={`text text_type_main-medium mt-8 ${styles.title}`}>идентификатор заказа</h3>
      <div className={`${styles.image} mt-15`}>
        <img src={doneImagePath} alt="Заказ принят" />
      </div>
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-15">Дождитесь готовности на орбитальной станции</p>
    </>
  );
}

export default OrderDetails;
