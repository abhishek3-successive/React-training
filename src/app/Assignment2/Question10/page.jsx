"use client";

import { createContext, useState } from "react";
import Language from "./Q10";

const LanguageSwitcher = createContext(); // create context

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <LanguageSwitcher.Provider value={{ lang, setLang }}>
      <div>
        <Language />
      </div>
    </LanguageSwitcher.Provider>
  );
}

export { LanguageSwitcher };