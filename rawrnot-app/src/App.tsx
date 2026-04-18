import React, { useState } from 'react';
import InteractiveBriefing from './components/InteractiveBriefing';
import Portfolio from './components/Portfolio';
import CrmDashboard from './components/CrmDashboard';
import Quoting from './components/Quoting';

type View = 'portfolio' | 'briefing' | 'crm' | 'quoting';

function App() {
  const [currentView, setCurrentView] = useState<View>('portfolio');

  return (
    <>
      {/* Top Navigation Shell */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-neutral-900/40 backdrop-blur-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(228,189,194,0.1)] border-b border-white/5">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-pink-300">menu</span>
          <span className="font-headline tracking-tighter text-2xl font-bold uppercase text-pink-400 dark:text-pink-300 italic font-black">RAW'R'NOT</span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <button 
              onClick={() => setCurrentView('portfolio')}
              className={`transition-colors text-sm font-medium uppercase tracking-widest ${currentView === 'portfolio' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => setCurrentView('crm')}
              className={`transition-colors text-sm font-medium uppercase tracking-widest ${currentView === 'crm' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setCurrentView('briefing')}
              className={`transition-colors text-sm font-medium uppercase tracking-widest ${currentView === 'briefing' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
            >
              Briefing
            </button>
            <button 
              onClick={() => setCurrentView('quoting')}
              className={`transition-colors text-sm font-medium uppercase tracking-widest ${currentView === 'quoting' ? 'text-pink-300' : 'text-neutral-400 hover:text-pink-300'}`}
            >
              Quoting
            </button>
          </nav>
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
        {currentView === 'crm' && <CrmDashboard />}
        {currentView === 'briefing' && <InteractiveBriefing />}
        {currentView === 'quoting' && <Quoting />}
      </div>
    </>
  );
}

export default App;


