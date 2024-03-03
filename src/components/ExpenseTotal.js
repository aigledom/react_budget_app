import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

//Code to import translations
import { useTranslation } from "react-i18next";

//Define un componente de función llamado ExpenseTotal
const ExpenseTotal = (event) => {
    //Constante para las traducciones
  const { t } = useTranslation();
    //Extrae el estado expenses y Currency del contexto
    const {expenses, Currency} = useContext(AppContext);
    //Calcula el total de gastos sumando los costos de cada elemento en "expenses"
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className="alert alert-primary">
            <span>{t("spentSoFar")}: {Currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
