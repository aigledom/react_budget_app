import React from "react";

import "bootstrap/dist/css/bootstrap.css";

//Code to import components
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import AllocationForm from "./components/AllocationForm";
import ExpenseList from "./components/ExpenseList";
import Currency from "./components/Currency";

//Code to import context
import { AppProvider } from "./context/AppContext";

//Code to import translations
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const App = () => {
  //Constante para las traducciones
  const { t } = useTranslation();
  //Se tiene en cuenta cuando se cambia la traducción
  const setLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppProvider>
      <div id="navbar-main">
        <div className="navbar navbar-inverse navbar-fixed-top bg-dark">
          <div className="container">
            <div className="navbar-header text-light">
              <h1 className="m-3">{t('title')}</h1>
            </div>
            <select
              id="idiomaActual"
              className="p-2 rounded bg-white"
              data-width="fit"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">{t('english')}</option>
              <option value="es">{t('spanish')}</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          {/* Add Budget component here */}
          <div className="col-sm">
            <Budget />
          </div>
          {/* Add Remaining component here*/}
          <div className="col-sm">
            <Remaining />
          </div>
          {/* Add ExpenseTotal component here */}
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          {/* Add Location component here */}
          <div className="col-sm">
            <Currency />
          </div>
        </div>
        <h3 className="mt-3">{t('allocation')}</h3>
        <div className="row">
          <div className="col-sm">
            {/* Add ExpenseList component here */}
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">{t('chgAllocation')}</h3>
        <div className="row mt-3">
          <div className="col-sm">
            {/* Add AllocationForm component here under */}
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
