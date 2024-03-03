import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

//Code to import translations
import { useTranslation } from "react-i18next";

//Define un componente de función llamado AllocationForm
const AllocationForm = (props) => {
  //Constante para las traducciones
  const { t } = useTranslation();
  //Extrae el estado dispatch, remaining y Currency del contexto
  const { dispatch, remaining, Currency } = useContext(AppContext);
  //Declara unos estados locales y unas funciones set para actualizarlo, inicializando los valores
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");
  //Define una función llamada submitEvent cuando se envía el nuevo coste
  const submitEvent = () => {
    //Comprueba el coste no puede ser mayor que el dinero restante
    if (cost > remaining) {
      alert(t("valueCannotExceed") + { Currency } + remaining);
      setCost("");
      return;
    }
    const expense = {
      name: name,
      cost: parseInt(cost),
    };
    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              {t("department")}
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>{t("choose")}</option>
            <option value="Marketing" name="marketing">
              {t("Marketing")}
            </option>
            <option value="Sales" name="sales">
              {t("Sales")}
            </option>
            <option value="Finance" name="finance">
              {t("Finance")}
            </option>
            <option value="HR" name="hr">
              {t("Human Resource")}
            </option>
            <option value="IT" name="it">
              {t("IT")}
            </option>
            <option value="Admin" name="admin">
              {t("admin")}
            </option>
          </select>
          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              {t("allocation")}
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              {t("add")}
            </option>
            <option value="Reduce" name="Reduce">
              {t("reduce")}
            </option>
          </select>
          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text">{Currency}</label>
          </div>
          <input
            className="ms-0"
            required="required"
            type="number"
            id="cost"
            value={cost}
            style={{ marginLeft: "2rem", size: 10 }}
            onChange={(event) => setCost(event.target.value)}
          ></input>
          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            {t("save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
