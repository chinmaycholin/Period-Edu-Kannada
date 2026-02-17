import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", kn: "ಮುಖಪುಟ" },
  "nav.body": { en: "Your Body", kn: "ನಿಮ್ಮ ದೇಹ" },
  "nav.hygiene": { en: "Hygiene", kn: "ನೈರ್ಮಲ್ಯ" },
  "nav.myths": { en: "Myths", kn: "ಅಪನಂಬಿಕೆಗಳು" },
  "nav.ask": { en: "Ask", kn: "ಕೇಳಿ" },

  // Home
  "hero.title": { en: "Growing Up with Confidence", kn: "ಆತ್ಮವಿಶ್ವಾಸದೊಂದಿಗೆ ಬೆಳೆಯಿರಿ" },
  "hero.subtitle": { en: "A friendly guide to understanding your body and changes.", kn: "ನಿಮ್ಮ ದೇಹ ಮತ್ತು ಬದಲಾವಣೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸ್ನೇಹಪರ ಮಾರ್ಗದರ್ಶಿ." },
  "hero.cta": { en: "Start Learning", kn: "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ" },

  // Body
  "body.title": { en: "Understanding Your Cycle", kn: "ನಿಮ್ಮ ಚಕ್ರವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು" },
  "body.intro": { en: "Puberty is a natural part of growing up. It's when your body changes from being a child to an adult.", kn: "ಪ್ರೌಢಾವಸ್ಥೆಯು ಬೆಳೆಯುವ ಒಂದು ಸಹಜ ಭಾಗವಾಗಿದೆ. ಇದು ನಿಮ್ಮ ದೇಹವು ಮಗುವಿನಿಂದ ವಯಸ್ಕರ ಹಂತಕ್ಕೆ ಬದಲಾಗುವ ಸಮಯ." },
  
  // Hygiene
  "hygiene.title": { en: "Taking Care of Yourself", kn: "ನಿಮ್ಮನ್ನು ನೋಡಿಕೊಳ್ಳುವುದು" },
  "hygiene.intro": { en: "Staying clean and comfortable is important during your period.", kn: "ಮುಟ್ಟಿನ ಸಮಯದಲ್ಲಿ ಸ್ವಚ್ಛವಾಗಿ ಮತ್ತು ಆರಾಮದಾಯಕವಾಗಿರುವುದು ಮುಖ್ಯ." },

  // Myths
  "myths.title": { en: "Fact vs. Myth", kn: "ಸತ್ಯ ಮತ್ತು ಸುಳ್ಳು" },
  
  // Ask
  "ask.title": { en: "Have a Question?", kn: "ಪ್ರಶ್ನೆ ಇದೆಯೇ?" },
  "ask.subtitle": { en: "It's okay to have questions. Ask anonymously here.", kn: "ಪ್ರಶ್ನೆಗಳನ್ನು ಹೊಂದುವುದು ಸಹಜ. ಇಲ್ಲಿ ಅನಾಮಧೇಯವಾಗಿ ಕೇಳಿ." },
  "ask.placeholder": { en: "Type your question here...", kn: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ..." },
  "ask.submit": { en: "Send Question", kn: "ಪ್ರಶ್ನೆ ಕಳುಹಿಸಿ" },
  "ask.success": { en: "Question sent! We'll answer it soon.", kn: "ಪ್ರಶ್ನೆ ಕಳುಹಿಸಲಾಗಿದೆ! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಉತ್ತರಿಸುತ್ತೇವೆ." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div lang={language} className="min-h-screen">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
