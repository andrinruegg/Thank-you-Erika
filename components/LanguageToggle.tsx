import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <div className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md rounded-full p-1 shadow-lg border border-stone-200 flex items-center">
      <button
        onClick={() => onToggle('en')}
        className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
          currentLang === 'en' ? 'text-white' : 'text-stone-600 hover:text-stone-900'
        }`}
      >
        {currentLang === 'en' && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 bg-stone-800 rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">English</span>
      </button>
      <button
        onClick={() => onToggle('ro')}
        className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
          currentLang === 'ro' ? 'text-white' : 'text-stone-600 hover:text-stone-900'
        }`}
      >
        {currentLang === 'ro' && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 bg-rose-600 rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">Română</span>
      </button>
    </div>
  );
};