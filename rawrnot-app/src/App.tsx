import React, { useState } from 'react';
import InteractiveBriefing from './components/InteractiveBriefing';
import Portfolio from './components/Portfolio';
import CrmDashboard from './components/CrmDashboard';
import Quoting from './components/Quoting';
import Blog from './components/Blog';
import AboutServices from './components/AboutServices';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

type View = 'portfolio' | 'briefing' | 'crm' | 'quoting' | 'blog' | 'about';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('portfolio');
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-neutral-900/40 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(228,189,194,0.1)] border-b border-white/5 transition-colors duration-500">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-pink-300">menu</span>
          <span className="font-headline tracking-tighter text-2xl font-bold uppercase text-pink-400 dark:text-pink-300 italic font-black">RAW'R'NOT</span>
        </div>
        
        <nav className="hidden lg:flex gap-6 items-center">
          <button 
            onClick={() => setCurrentView('portfolio')}
            className={`transition-colors text-[10px] font-bold uppercase tracking-widest ${currentView === 'portfolio' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
          >
            {t('nav.portfolio')}
          </button>
          <button 
            onClick={() => setCurrentView('blog')}
            className={`transition-colors text-[10px] font-bold uppercase tracking-widest ${currentView === 'blog' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
          >
            {t('nav.journal')}
          </button>
          <button 
            onClick={() => setCurrentView('about')}
            className={`transition-colors text-[10px] font-bold uppercase tracking-widest ${currentView === 'about' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => setCurrentView('quoting')}
            className={`transition-colors text-[10px] font-bold uppercase tracking-widest ${currentView === 'quoting' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
          >
            {t('nav.quoting')}
          </button>
          <button 
            onClick={() => setCurrentView('briefing')}
            className={`transition-colors text-[10px] font-bold uppercase tracking-widest ${currentView === 'briefing' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
          >
            {t('nav.briefing')}
          </button>
          <button 
            onClick={() => setCurrentView('crm')}
            className={`transition-colors text-[10px] font-bold uppercase tracking-widest ${currentView === 'crm' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
          >
            {t('nav.dashboard')}
          </button>

          <div className="h-4 w-[1px] bg-white/10 mx-2"></div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="text-pink-300 hover:text-pink-200 transition-colors p-2 rounded-full active:scale-90 duration-300"
            title="Toggle Theme"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === 'obsidian' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Language Toggle */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="text-[10px] font-black uppercase tracking-tighter text-neutral-400 hover:text-pink-300 px-2 py-1 border border-white/10 rounded transition-colors"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/30">
            <img 
              className="w-full h-full object-cover" 
              alt="majestic lion"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHUvIMUur5_DfuxwG5Q0ulH_4vbrHUIUBD8Z6nNrdDekaD8sK5lvYsB0JaJg3yzR5_6ooWWaSI_9qwKV0ZO4LnGy9_JSDC1efdkr0UvpkW4NZ4een0xFPkwtwPcHVVIr1O7E6c-iIgswXBOrmFMaX2ANTLLuZB4rJgaa5UuBdjwH2Rx6JEZoqW8ajRZFPN0Px5ZVhe7yIwQFeMWmn11ekynnKI_blkjSIscQaG9KqE68BqBNQaFzN4o6BKVi20OLKnDL3tmrzNhMk" 
            />
          </div>
        </div>
      </header>

      <div className="pt-20">
        {currentView === 'portfolio' && <Portfolio />}
        {currentView === 'blog' && <Blog />}
        {currentView === 'about' && <AboutServices />}
        {currentView === 'quoting' && <Quoting />}
        {currentView === 'briefing' && <InteractiveBriefing />}
        {currentView === 'crm' && <CrmDashboard />}
      </div>
    </>
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
