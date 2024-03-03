import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

//Code to import translations
import { useTranslation } from "react-i18next";

//Define un componente de función llamado Budget
const Budget = () => {
  //Constante para las traducciones
  const { t } = useTranslation();
  //Extrae el estado budget, dispatch, expenses y Currency del contexto
  const { budget, dispatch, expenses, Currency } = useContext(AppContext);
  //Declara un estado local newBudget y una función setNewBudget para actualizarlo, inicializado con el valor de budget
  const [newBudget, setNewBudget] = useState(budget);
  //Calcula los gastos totales
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  //Define una función llamada handleBudgetChange que se ejecuta cuando cambia el valor de input
  const handleBudgetChange = (val) => {
    if (val < totalExpenses) {
      setNewBudget(totalExpenses);
      alert(t("cannotReduceBelowSpending"));
    } else if (val > 20000) {
      setNewBudget(20000);
      alert(t("valueCannotExceed") + ` ${Currency}20,000`);
    } else {
      setNewBudget(val);
    }
  };
  //Crea un useEffect para el budget
  useEffect(() => {
    dispatch({ type: "SET_BUDGET", payload: newBudget });
  }, [newBudget, dispatch]);

  return (
    <div className="alert alert-secondary">
      <span>{t("budget")}: {Currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={(event) => handleBudgetChange(event.target.value)}
      />
    </div>
  );
};

export default Budget;
