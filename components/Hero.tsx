import React from 'react';
import { motion } from 'framer-motion';
import { TranslationContent } from '../types';
import { Heart, Stars } from 'lucide-react';

interface HeroProps {
  t: TranslationContent;
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onScrollDown }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Dynamic Dark Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900 via-stone-950 to-black"></div>
      
      {/* Floating Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full mix-blend-screen filter blur-3xl opacity-20 ${
              i % 2 === 0 ? 'bg-rose-900' : 'bg-amber-900'
            }`}
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 60 - 30, 0],
              y: [0, Math.random() * 60 - 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-rose-500/10 blur-[100px] rounded-full -z-10"></div>
          
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8 gap-6"
          >
             <div className="p-4 bg-stone-900/50 backdrop-blur-md border border-stone-800 text-rose-500 rounded-2xl shadow-2xl shadow-rose-900/20 rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                <Heart className="w-8 h-8 fill-rose-500/20" />
             </div>
             <div className="p-4 bg-stone-900/50 backdrop-blur-md border border-stone-800 text-amber-400 rounded-2xl shadow-2xl shadow-amber-900/20 rotate-[6deg] hover:rotate-0 transition-transform duration-500">
                <Stars className="w-8 h-8 fill-amber-400/20" />
             </div>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-stone-200 to-stone-500 mb-8 font-serif drop-shadow-2xl">
            {t.heroTitle}
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            {t.heroSubtitle}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(244, 63, 94, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onScrollDown}
            className="px-10 py-4 bg-stone-100 text-stone-900 rounded-full text-lg font-bold shadow-lg shadow-stone-900/50 hover:bg-white transition-all duration-300 tracking-wide"
          >
            {t.heroButton}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};