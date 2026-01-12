import React from 'react';
import { motion } from 'framer-motion';
import { TranslationContent } from '../types';
import { Heart, Star, Sparkles, Smile } from 'lucide-react';

interface FamilyTributeProps {
  t: TranslationContent;
}

export const FamilyTribute: React.FC<FamilyTributeProps> = ({ t }) => {
  return (
    <section className="py-32 relative bg-stone-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500/20 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-100 font-serif mb-6">{t.familyTitle}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Alexia - Special Highlight */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-pink-600 rounded-[2.5rem] opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
            <div className="relative bg-stone-900/90 backdrop-blur-xl rounded-[2.5rem] p-10 h-full flex flex-col items-center text-center border border-stone-800">
                <div className="absolute -top-6 -right-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-900/50 animate-float">
                        <Star className="w-8 h-8 text-white fill-current" />
                    </div>
                </div>

                <div className="w-32 h-32 mb-8 rounded-full overflow-hidden border-2 border-rose-500/30 shadow-2xl shadow-rose-500/10 bg-stone-800 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-rose-500" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-100 mb-6">{t.alexiaTitle}</h3>
                <p className="text-lg text-stone-400 leading-relaxed font-light italic">
                "{t.alexiaDesc}"
                </p>
                <div className="mt-8 flex gap-3 text-rose-500/50">
                    <Heart className="w-5 h-5 fill-current" />
                    <Heart className="w-5 h-5 fill-current" />
                    <Heart className="w-5 h-5 fill-current" />
                </div>
            </div>
          </motion.div>

          {/* Didi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group h-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[2.5rem] opacity-20 group-hover:opacity-50 blur transition duration-500"></div>
            <div className="relative bg-stone-900/90 backdrop-blur-xl rounded-[2.5rem] p-10 h-full flex flex-col items-center text-center justify-center border border-stone-800">
                <div className="w-24 h-24 bg-stone-800 rounded-full flex items-center justify-center mb-6 text-amber-500 shadow-inner border border-stone-700/50">
                    <Smile className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-100 mb-6">{t.didiTitle}</h3>
                <p className="text-lg text-stone-400 leading-relaxed italic">
                "{t.didiDesc}"
                </p>
                <Sparkles className="w-6 h-6 text-amber-500 mt-6 opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};