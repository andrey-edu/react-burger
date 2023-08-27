import React from "react";
import { useEffect, useState } from "react";

import styles from "./app.module.css";
import { MESSAGES } from "../../utils/messages";
import { getIngredients } from "../../utils/burder-api";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Status from "../status/status";

function App() {

  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    setIngredients({...ingredients, isLoading: true});
    getIngredients()
      .then(data => setIngredients({...ingredients, data: data.data, isLoading: false, hasError: false}))
      .catch(e => setIngredients({...ingredients, loading: false, hasError: true}));
  }, []);

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        {ingredients.data &&
          <>
            <section>
              <BurgerIngredients ingredients={ingredients.data} />
            </section>
            <section>
              <BurgerConstructor ingredients={ingredients.data} />
            </section>
          </>
        }
        {ingredients.isLoading &&
          <Status type="loading">{MESSAGES.loadingData}</Status>
        }
        {ingredients.hasError &&
          <Status type="error">{MESSAGES.errorRequestData}</Status>
        }
      </main>
    </div>
  );
}


export default App;
