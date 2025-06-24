"use client";

import { createContext, useState } from "react";
import Language from "../components/Q10";

const LanguageSwitcher = createContext(); // create context

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    // wrap
    <LanguageSwitcher.Provider value={{ lang, setLang }}>
      <div>
        <Language />
      </div>
    </LanguageSwitcher.Provider>
  );
}

export { LanguageSwitcher };