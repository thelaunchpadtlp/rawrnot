import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InteractiveBriefing from './components/InteractiveBriefing';
import Portfolio from './components/Portfolio';
import CrmDashboard from './components/CrmDashboard';
import Quoting from './components/Quoting';
import Blog from './components/Blog';
import AboutServices from './components/AboutServices';
import AnimationLab from './components/AnimationLab';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

type View = 'portfolio' | 'briefing' | 'crm' | 'quoting' | 'blog' | 'about' | 'lab';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('portfolio');
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const views: Record<View, React.ReactNode> = {
    portfolio: <Portfolio />,
    blog: <Blog />,
    about: <AboutServices />,
    quoting: <Quoting />,
    briefing: <InteractiveBriefing />,
    crm: <CrmDashboard />,
    lab: <AnimationLab />,
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 noise-overlay z-[9999]" />

      <header className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 py-4 bg-background/40 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-b border-white/5 transition-colors duration-700">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">menu</span>
          <span className="font-headline tracking-tighter text-2xl font-bold uppercase text-primary italic font-black">RAW'R'NOT</span>
        </motion.div>
        
        <nav className="hidden lg:flex gap-4 items-center">
          {(['portfolio', 'blog', 'about', 'quoting', 'briefing', 'crm', 'lab'] as View[]).map((view) => (
            <button 
              key={view}
              onClick={() => setCurrentView(view)}
              className={`relative px-4 py-2 transition-colors text-[10px] font-bold uppercase tracking-widest ${currentView === view ? 'text-primary' : 'text-on-background/40 hover:text-primary'}`}
            >
              {view === 'lab' ? 'Motion Synth' : t(`nav.${view}`)}
              {currentView === view && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary" />
              )}
            </button>
          ))}

          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleTheme} className="text-primary hover:bg-primary/10 transition-colors p-2 rounded-full">
            <AnimatePresence mode="wait">
              <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="material-symbols-outlined text-xl">
                {theme === 'obsidian' ? 'light_mode' : 'dark_mode'}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} className="text-[10px] font-black uppercase tracking-tighter text-on-background/40 hover:text-primary px-2 py-1 border border-on-background/10 rounded transition-colors">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="w-10 h-10 rounded-full overflow-hidden border border-primary/30 cursor-pointer">
            <img className="w-full h-full object-cover" alt="majestic lion" src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=200&h=200" />
          </motion.div>
        </div>
      </header>

      <main className="relative pt-20">
        <AnimatePresence mode="wait">
          <motion.div key={currentView} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            {views[currentView]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
