import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css";

//Code to import translations
import { useTranslation } from "react-i18next";

//Define un componente de función llamado Currency
const Currency = () => {
  //Constante para las traducciones
  const { t } = useTranslation();
  //Extrae el estado dispatch del contexto
  const { dispatch, actualCurrency } = useContext(AppContext);
  // Estado local para almacenar la moneda actual
  const [monedaActual, setMonedaActual] = useState(actualCurrency);
  //Función para controlar cuando se cambia la moneda
  const handleCurrencyChange = (val) => {
    console.log(monedaActual);
    dispatch({
      type: "CHG_CURRENCY",
      payload: {
        antiguoValor: monedaActual,
        nuevoValor: val,
      },
    });
    setMonedaActual(val); // Actualizar el estado local con el nuevo valor de la moneda
  };

  return (
    <div className="currency-container">
      <label htmlFor="currencyDropdown" className="currency-label">
        {t("currencySelection")}
      </label>
      <select
        id="currencyDropdown"
        onChange={(e) => handleCurrencyChange(e.target.value)}
        className="currency-dropdown"
      >
        <option value="€">{t("euro")} (€)</option>
        <option value="£">{t("pound")} (£)</option>
        <option value="₹">{t("rupee")} (₹)</option>
        <option value="CAD">{t("cad")} (CAD)</option>
      </select>
    </div>
  );
};

export default Currency;
