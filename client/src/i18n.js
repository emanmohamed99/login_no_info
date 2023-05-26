import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
         "Sign In":"Sign In",
         "Please log in using your email and password!":"Please log in using your email and password!",
         "email":"email",
         "Password":"password",
         "Log In":"Log In",
         "Type to Search...":"Type to Search..."
        }
      },
      ar: {
        translation: {
            "Sign In":"تسجيل الدخول",
            "Please log in using your email and password!":"!الرجاء تسجيل الدخول باستخدام البريد الالكترونى و كلمة المرور",
            "email":"البريد الالكترونى",
            "Password":"كلمة المرور",
            "Log In":"تسجيل الدخول",
            "Type to Search...":"...ابحث"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

