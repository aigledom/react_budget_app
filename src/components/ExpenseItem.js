import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { FaTimesCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

//Code to import translations
import { useTranslation } from "react-i18next";

//Define un componente de función llamado ExpenseItem
const ExpenseItem = (props) => {
  //Constante para las traducciones
  const { t } = useTranslation();
  //Extrae el estado dispatch y Currency del contexto
  const { dispatch, Currency } = useContext(AppContext);
  //Define una función llamada handleDeleteExpense cuando se borra un item
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  //Define una función llamada increaseAllocation para cuando se aumentan los gastos
  const increaseAllocation = (name, cost) => {
    const expense = {
      name: name,
      cost: cost,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  //Define una función llamada decreaseAllocation para cuando se reducen los gastos
  const decreaseAllocation = (name, cost) => {
    const expense = {
      name: name,
      cost: cost,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{t(props.name)}</td>
      <td>
        {Currency}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle
          size="2.2em"
          color="green"
          onClick={(event) => increaseAllocation(props.name, 10)}
        />
      </td>
      <td>
        <FaTimesCircle
          size="2.2em"
          color="red"
          onClick={(event) => decreaseAllocation(props.name, 10)}
        />
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
