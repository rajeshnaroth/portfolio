import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import React, { ElementType } from "react";

import { initReactI18next } from "react-i18next";
import translations from "../locales";

export const withI18n = (Component: ElementType) => (props: object) => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: translations
    });

  return <Component {...props} />;
};
