import React, { useState } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import { LanguageToggle } from './components/LanguageToggle';
import { Hero } from './components/Hero';
import { GratitudeGrid } from './components/GratitudeGrid';
import { FamilyTribute } from './components/FamilyTribute';
import { PersonalLetter } from './components/PersonalLetter';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  const t = TRANSLATIONS[language];

  const scrollToGratitude = () => {
    const el = document.getElementById('gratitude');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-rose-500 selection:text-white overflow-x-hidden font-sans">
      <LanguageToggle currentLang={language} onToggle={setLanguage} />

      <main className="relative">
        <Hero t={t} onScrollDown={scrollToGratitude} />
        <GratitudeGrid t={t} />
        <FamilyTribute t={t} />
        <PersonalLetter t={t} />
      </main>

      <footer className="py-12 bg-black/40 text-center border-t border-stone-800 relative z-10">
        <p className="text-stone-500 font-medium flex items-center justify-center gap-2 tracking-wide">
          {t.footerText} 
          <motion.span 
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-rose-500 text-xl"
          >
            ❤
          </motion.span>
        </p>
      </footer>
    </div>
  );
};

export default App;