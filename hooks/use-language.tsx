import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

import type { Lang } from '@/data/figures';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('sn'); // Shona is the default
  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'sn' : 'en')), []);
  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, toggle]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
