import React, {useState} from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientsTabs() {

  const [current, setCurrent] = useState('buns')

  return (
    <div className="mt-5" style={{ display: 'flex' }}>
      <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === 'mains'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );

}
