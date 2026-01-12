import React from 'react';
import { motion } from 'framer-motion';
import { TranslationContent } from '../types';
import { Utensils, Moon, HeartHandshake } from 'lucide-react';

interface GratitudeGridProps {
  t: TranslationContent;
}

const Card: React.FC<{ 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
  imgSrc: string; 
  delay: number 
}> = ({ title, desc, icon, imgSrc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-stone-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-stone-800 hover:border-stone-700 transition-colors duration-300 flex flex-col h-full group shadow-2xl shadow-black/50"
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.2, type: "spring" }}
          className="absolute bottom-4 right-4 p-3 bg-stone-950/80 backdrop-blur-md rounded-full border border-stone-800 text-stone-200"
        >
           {icon}
        </motion.div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-serif font-bold text-stone-100 mb-3 group-hover:text-rose-400 transition-colors">{title}</h3>
        <p className="text-stone-400 leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export const GratitudeGrid: React.FC<GratitudeGridProps> = ({ t }) => {
  return (
    <section id="gratitude" className="py-24 relative overflow-hidden bg-stone-950">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-900/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-900/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-400 text-xs font-semibold mb-6 tracking-[0.2em] uppercase">
            Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-100 font-serif">
            {t.gratitudeTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title={t.gratitude1Title}
            desc={t.gratitude1Desc}
            icon={<Utensils className="w-5 h-5" />}
            imgSrc="https://tse2.mm.bing.net/th/id/OIP.42hE0tB1f5DVDnocPDDG4AHaEN?rs=1&pid=ImgDetMain&o=7&rm=3"
            delay={0.1}
          />
          <Card 
            title={t.gratitude2Title}
            desc={t.gratitude2Desc}
            icon={<Moon className="w-5 h-5" />}
            imgSrc="https://i.imgflip.com/5cqhjo.png?a462530"
            delay={0.2}
          />
          <Card 
            title={t.gratitude3Title}
            desc={t.gratitude3Desc}
            icon={<HeartHandshake className="w-5 h-5" />}
            imgSrc="https://i.pinimg.com/736x/aa/37/13/aa37137c030d47bac3cb44e32e5eb8a0.jpg"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};