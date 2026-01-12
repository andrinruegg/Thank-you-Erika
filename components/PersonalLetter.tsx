import React from 'react';
import { motion } from 'framer-motion';
import { TranslationContent } from '../types';
import { Feather } from 'lucide-react';

interface PersonalLetterProps {
  t: TranslationContent;
}

export const PersonalLetter: React.FC<PersonalLetterProps> = ({ t }) => {
  return (
    <section className="py-32 relative overflow-hidden bg-stone-950">
        <div className="absolute inset-0 bg-stone-950">
            {/* Subtle grid pattern for texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-[#1c1917] p-8 md:p-16 rounded-sm shadow-2xl border-t border-white/5"
        >
          {/* Top Tape */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-rose-500/20 rotate-1 backdrop-blur-sm border-l border-r border-white/10"></div>

          <div className="relative">
            <div className="text-center mb-12 mt-4">
                <div className="inline-block p-4 rounded-full mb-6 bg-stone-900 border border-stone-800 shadow-inner">
                    <Feather className="w-6 h-6 text-stone-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-200 font-bold tracking-tight">{t.letterTitle}</h2>
            </div>

            {/* Letter Body */}
            <div className="prose prose-invert prose-xl mx-auto font-handwriting text-stone-300 leading-[2.5rem] whitespace-pre-wrap tracking-wide text-2xl md:text-3xl opacity-90">
                {t.letterBody}
            </div>

            <div className="mt-16 text-right">
                <p className="font-serif text-stone-500 italic text-lg mb-4">{t.letterSign}</p>
                <div className="font-handwriting text-5xl text-rose-500 transform -rotate-2 inline-block drop-shadow-lg">
                Andrin
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};