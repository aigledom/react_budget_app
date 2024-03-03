import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

//Code to import translations
import { useTranslation } from "react-i18next";

//Define un componente de función llamado Remaining
const Remaining = (event) => {
  //Constante para las traducciones
  const { t } = useTranslation();
  //Extrae el estado expenses, budget y Currency del contexto
  const { expenses, budget, Currency } = useContext(AppContext);
  //Calcula el total de gastos sumando los costos de cada elemento en "expenses"
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  //Determina el tipo de alerta dependiendo de si los gatos totales superan el presupuesto
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>
        {t("remaining")}: {Currency}
        {budget - totalExpenses}
      </span>
    </div>
  );
};

export default Remaining;
