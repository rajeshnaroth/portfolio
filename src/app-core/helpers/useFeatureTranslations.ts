import { i18n as i18nType } from "i18next";
import { mergeDeepRight } from "ramda";
import { useTranslation } from "react-i18next";

import commonTranslations from "../locales";
import { ITranslations } from "../types";

// Lets you add your namespaced feature translations
export const addFeatureTranslations = (
  i18next: i18nType,
  nameSpace: string,
  localTranslations: ITranslations<object>
) => {
  Object.keys(localTranslations).forEach((language: any) => {
    if (!i18next.getResourceBundle(language, nameSpace)) {
      i18next.addResourceBundle(language, nameSpace, localTranslations[language]);
    }
  });
  return { i18next };
};

// Lets you add namespaced feature translations and then use a transtion key without it.
// const t = useFeatureTranslations("dashboard", translations);
// Now instead of doing t("dashboard:title")you can use the translations like so:
// t("title");
//
// Common strings such as Name, Description etc can be recorded in src/app-core/locales
// These are merged with the feature translations here:
// Features can choose to override these strings
export const useFeatureTranslations = (nameSpace: string, localTranslations: ITranslations<object>) => {
  const { i18n, t } = useTranslation(nameSpace, { useSuspense: false });
  addFeatureTranslations(i18n, nameSpace, mergeDeepRight(commonTranslations, localTranslations));
  return {
    ns: nameSpace,
    i18n,
    t: (key: string) => t(`${nameSpace}:${key}`)
  };
};
