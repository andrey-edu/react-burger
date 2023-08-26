import React from "react";
import { useEffect, useState } from "react";

import styles from "./app.module.css";
import { MESSAGES } from "../../utils/messages";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";


function App() {

  const [ingredients, setIngredients] = useState({});

  const ingredientsURL = "https://norma.nomoreparties.space/api/ingredients";

  function getIngredients() {
    setIngredients({...ingredients, isLoading: true});
    fetch(ingredientsURL)
      .then(res => res.json())
      .then(data => setIngredients({...ingredients, data: data.data, isLoading: false, hasError: false}))
      .catch(e => setIngredients({...ingredients, loading: false, hasError: true}));
  }

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className={styles.page}>
      <AppHeader />
      <main className={styles.main}>
        {!ingredients.hasError
          ?
            <>
              {!ingredients.isLoading && ingredients.data
                ?
                  <>
                    <section>
                      <BurgerIngredients ingredients={ingredients.data} />
                    </section>
                    <section>
                      <BurgerConstructor ingredients={ingredients.data} />
                    </section>
                  </>
                :
                  <p>{MESSAGES.loadingData}</p>
              }
            </>
          :
            <p>{MESSAGES.errorRequestData}</p>
        }
      </main>
    </div>
  );
}


export default App;
