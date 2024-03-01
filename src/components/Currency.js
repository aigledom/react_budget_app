import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

//Define un componente de función llamado Currency
const Currency = () => {
  //Extrae el estado dispatch del contexto
  const { dispatch } = useContext(AppContext);
  //Función para controlar cuando se cambia la moneda
  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-success">
      Currency{" "}
      {
        <select
          name="Currency"
          id="Currency"
          onChange={(event) => changeCurrency(event.target.value)}
        >
          <option value="€">Europe(€)</option>
          <option value="£">Uk(£)</option>
          <option value="₹">India(₹)</option>
          <option value="CAD">Canada(CAD)</option>
        </select>
      }
    </div>
  );
};

export default Currency;
