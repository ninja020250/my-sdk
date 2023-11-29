import { useTranslation } from "react-i18next";

export const useLanguageValue = (viValue: any, enValue: any) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.includes("en") ? enValue : viValue;

  return isEn;
};
