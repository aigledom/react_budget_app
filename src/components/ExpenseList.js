import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

//Code to import translations
import { useTranslation } from "react-i18next";

//Define un componente de función llamado ExpenseList
const ExpenseList = (event) => {
  //Constante para las traducciones
  const { t } = useTranslation();
  //Extrae el estado de expenses del contexto
  const { expenses } = useContext(AppContext);

  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">{t("department")}</th>
          <th scope="col">{t("allocatedBudget")}</th>
          <th scope="col">{t("increasedBy10")}</th>
          <th scope="col">{t("decreasedBy10")}</th>
          <th scope="col">{t("delete")}</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
