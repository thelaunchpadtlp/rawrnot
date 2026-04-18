import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 relative min-h-screen w-full overflow-x-hidden">
      {/* Hero: Full-bleed background visual */}
      <div className="absolute inset-0 z-0 h-[100vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background z-10"></div>
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full bg-neutral-900 overflow-hidden"
        >
          <img 
            alt="Hero Background" 
            className="w-full h-full object-cover" 
            src="/assets/stitch/portfolio.png" 
          />
        </motion.div>
      </div>

      {/* Hero Content */}
      <section className="relative z-20 pt-24 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end min-h-[80vh]">
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-label-md font-bold tracking-widest uppercase text-primary text-[10px]">{t('portfolio.hero_tag')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-headline text-7xl leading-[0.95] tracking-tighter text-on-background lg:text-[7rem] uppercase font-black"
          >
            {t('portfolio.hero_title_1')} <br />
            <span className="text-primary italic">{t('portfolio.hero_title_2')}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed"
          >
            {t('portfolio.hero_desc')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 77, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold flex items-center gap-2 transition-all text-xs uppercase tracking-[0.2em]"
            >
              {t('portfolio.cta_project')}
              <span className="material-symbols-outlined transition-transform">arrow_forward</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-full border border-outline-variant text-on-surface font-semibold flex items-center gap-2 text-xs uppercase tracking-[0.2em]"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
              {t('portfolio.cta_roar')}
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Floating Glassmorphic Card */}
          <div className="liquid-glass p-6 rounded-xl shadow-2xl border border-white/5 space-y-4 lg:translate-y-[-10%]">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
              <img 
                alt="Featured Work" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-[10px] font-bold text-white bg-primary px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">Award Winning</span>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-3xl text-on-surface uppercase font-bold tracking-tighter">Neon Monolith</h3>
              <p className="font-body text-xs text-on-surface-variant uppercase tracking-widest mt-1 opacity-60">Brand Identity & Immersive Spatial Design</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Section (Featured Projects) */}
      <section className="relative z-20 px-6 py-32 max-w-7xl mx-auto space-y-16">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-label text-primary font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              {t('portfolio.vault_tag')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-headline text-5xl font-black uppercase tracking-tighter italic"
            >
              {t('portfolio.vault_title')}
            </motion.h2>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-xs uppercase font-bold tracking-widest group">
            View All Projects
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-high transition-all border border-white/5 shadow-xl min-h-[500px]"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" 
              src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=1200" 
              alt="Crimson Flow"
            />
            <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
              <span className="text-[10px] text-primary font-bold uppercase tracking-[0.3em] mb-4">Motion Graphics</span>
              <h4 className="font-headline text-4xl mb-4 uppercase font-black italic tracking-tighter">Crimson Flow</h4>
              <p className="max-w-md text-on-surface-variant text-sm leading-relaxed font-light">
                Exploring the boundary between digital physics and human emotion in high-frequency motion graphics.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-surface-container-high transition-all border border-white/5 shadow-xl min-h-[500px]"
          >
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" 
              src="https://images.unsplash.com/photo-1614850523296-e8c041de83a4?auto=format&fit=crop&q=80&w=800" 
              alt="Apex UI"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
              <span className="text-[10px] text-primary font-bold uppercase tracking-[0.3em] mb-4">Interface Design</span>
              <h4 className="font-headline text-4xl mb-4 uppercase font-black italic tracking-tighter">Apex UI</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                The interface of the next decade. Raw accessibility meets lethal precision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Dynamic Background Decoration */}
      <div className="fixed top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-tertiary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="h-32"></div>
    </div>
  );
};

export default Portfolio;
