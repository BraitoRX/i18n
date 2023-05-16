import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessagesEn from "./locales/en.json";
import localeEsMessagesEs from "./locales/es.json";
import JobsList from "./components/jobslist";

const locale = "en"; // Cambiar el valor de `locale` según sea necesario

const messages = locale === "en" ? localeEsMessagesEn : localeEsMessagesEs;

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
