import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next) // pasa i18n a react-i18next
  .init({
    resources: {
      en: {
        translation: {
          title: "Company's Budget Allocation",
          english: "English",
          spanish: "Spanish",
          allocation: "Allocation",
          chgAllocation: "Change allocation",
          valueCannotExceed: "The value can't exceed remaining funds",
          department: "Department",
          choose: "Choose...",
          Marketing: "Marketing",
          Sales: "Sales",
          Finance: "Finance",
          "Human Resource": "Human Resource",
          IT: "IT",
          admin: "Admin",
          add: "Add",
          reduce: "Reduce",
          save: "Save",
          cannotReduceBelowSpending:
            "You can't reduce the budget value lower than the spending",
          budget: "Budget",
          currencySelection: "Choose a currency:",
          euro: "Euro",
          pound: "Pound",
          rupee: "Rupee",
          cad: "Canadian Dollar",
          allocatedBudget: "Allocated Budget",
          increasedBy10: "Increased by 10",
          decreasedBy10: "Decreased by 10",
          delete: "Delete",
          remaining: "Remaining",
          spentSoFar: "Spent so far",
          cannotIncreaseAllocation: "Cannot increase the allocation! Out of funds"
        },
      },
      es: {
        translation: {
          title: "Asignación Presupuestaria de la Empresa",
          english: "Inglés",
          spanish: "Español",
          allocation: "Asignación",
          chgAllocation: "Cambiar asignación",
          valueCannotExceed: "El valor no puede exceder los fondos restantes",
          department: "Departmento",
          choose: "Elegir...",
          Marketing: "Marketing",
          Sales: "Ventas",
          Finance: "Financiero",
          "Human Resource": "Recursos humanos",
          IT: "IT",
          admin: "Admin",
          add: "Añadir",
          reduce: "Disminuir",
          save: "Guardar",
          cannotReduceBelowSpending:
            "No puedes reducir el valor del presupuesto por debajo del gasto",
          budget: "Presupuesto",
          currencySelection: "Selecciona una moneda:",
          euro: "Euro",
          pound: "Libra",
          rupee: "Rupia",
          cad: "Dólar canadiense",
          allocatedBudget: "Presupuesto Asignado",
          increasedBy10: "Aumentado por 10",
          decreasedBy10: "Disminuído por 10",
          delete: "Borrar",
          remaining: "Restante",
          spentSoFar: "Gastado de momento",
          cannotIncreaseAllocation: "¡No se puede aumentar la asignación! ¡Fondos agotados!"
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVITals(console.log))
// or send to an analytics endpoint. Learn more: https://bIT.ly/CRA-vITals
reportWebVitals();
