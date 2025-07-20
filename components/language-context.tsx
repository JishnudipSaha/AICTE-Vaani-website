"use client"
// This file must be a client component because it uses React context and hooks
import { createContext, useContext, useState, ReactNode } from "react";

const LanguageContext = createContext({
  language: "en",
  setLanguage: (lang: string) => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
