import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as ptBR from '../locales/pt-BR';

export type LanguageType = 'pt-BR';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: typeof ptBR.ui;
  portfolioData: typeof ptBR.portfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('pt-BR');

  const getTranslations = () => {
    switch (language) {
      case 'pt-BR':
      default:
        return {
          t: ptBR.ui,
          portfolioData: ptBR.portfolioData,
        };
    }
  };

  const { t, portfolioData } = getTranslations();

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, portfolioData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
