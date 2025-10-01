"use client";

import { AnimatePresence } from "framer-motion";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import en from "../public/locales/en/common.json";
import zh from "../public/locales/zh/common.json";

type Lang = "zh" | "en";

type Dictionary = Record<string, string>;

type I18nContextValue = {
  lang: Lang;
  t: (key: string) => string;
  setLang: Dispatch<SetStateAction<Lang>>;
};

const dictionaries: Record<Lang, Dictionary> = {
  zh,
  en,
};

const I18nContext = createContext<I18nContextValue>({
  lang: "zh",
  t: (key) => key,
  setLang: () => {
    /* noop */
  },
});

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [lang, setLang] = useState<Lang>("zh");

  const t = useMemo(() => {
    const dict = dictionaries[lang] ?? dictionaries.zh;
    return (key: string) => dict[key] ?? key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
