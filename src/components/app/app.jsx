import React from "react";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import { data } from "../../utils/data";

export default function App() {

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        <section>
          <BurgerIngredients ingredients={data} />
        </section>
        <section>
          <BurgerConstructor ingredients={data} />
        </section>
      </main>
    </div>
  );
}

