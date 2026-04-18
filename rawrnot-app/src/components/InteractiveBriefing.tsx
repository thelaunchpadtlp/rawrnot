import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const InteractiveBriefing: React.FC = () => {
  const { t } = useLanguage();
  const [moniker, setMoniker] = useState('');
  const [narrative, setNarrative] = useState('');
  const [progress, setProgress] = useState(0);
  const [isRefining, setIsRefining] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let newProgress = 0;
    if (moniker.length >= 3) newProgress += 30;
    if (narrative.length >= 20) newProgress += 70;
    setProgress(newProgress);
  }, [moniker, narrative]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `> ${new Date().toLocaleTimeString()}: ${msg}`]);
  };

  const handleRefineAI = async () => {
    if (narrative.length < 10) return;
    
    setIsRefining(true);
    setLogs([]);
    addLog("Connecting to Rawrnot AI Gateway...");
    
    try {
      const response = await fetch('http://localhost:3001/api/refine-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          narrative, 
          language: localStorage.getItem('language') || 'en' 
        })
      });
      
      addLog("Routing to Llama-3-70B Worker...");
      addLog("Synthesizing creative intent...");
      
      const data = await response.json();
      
      setTimeout(() => {
        addLog("Refinement complete.");
        setNarrative(data.refinedText);
        setIsRefining(false);
      }, 1000);
    } catch (error) {
      addLog("Error: AI Gateway unreachable.");
      setIsRefining(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
      <main className="pt-12 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-8 space-y-12">
          <section className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-6xl md:text-8xl font-bold leading-[0.85] text-on-background uppercase italic font-black tracking-tighter"
            >
              {t('briefing.title_1')} <br />
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">{t('briefing.title_2')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-on-surface-variant text-xl max-w-lg font-light leading-relaxed italic"
            >
              {t('briefing.desc')}
            </motion.p>
          </section>

          <motion.div 
            layout
            className="liquid-glass rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10 space-y-12">
              <div className="flex items-center gap-4">
                <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">{t('briefing.phase')} 01</span>
                <div className="h-[1px] flex-grow bg-white/10" />
                <span className="material-symbols-outlined text-primary animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              
              <div className="grid gap-12">
                <div className="space-y-4">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-primary">{t('briefing.moniker_label')}</label>
                  <input 
                    className="w-full bg-surface-container-lowest border border-white/5 focus:border-primary/50 text-on-background py-6 px-8 rounded-xl placeholder:text-on-background/20 transition-all outline-none text-lg font-bold" 
                    placeholder="e.g. Apex Vanguard Rebrand" 
                    value={moniker}
                    onChange={(e) => setMoniker(e.target.value)}
                  />
                </div>
                
                <div className="space-y-4 relative">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-primary">{t('briefing.narrative_label')}</label>
                  <div className="relative">
                    <textarea 
                      className="w-full bg-surface-container-lowest border border-white/5 focus:border-primary/50 text-on-background py-8 px-8 rounded-xl placeholder:text-on-background/20 resize-none transition-all outline-none text-lg min-h-[250px] font-light leading-relaxed" 
                      placeholder="Describe the soul of this project..." 
                      value={narrative}
                      onChange={(e) => setNarrative(e.target.value)}
                    />
                    
                    <AnimatePresence>
                      {narrative.length >= 10 && (
                        <motion.button 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          onClick={handleRefineAI}
                          disabled={isRefining}
                          className="absolute bottom-6 right-6 flex items-center gap-3 bg-primary text-on-primary px-6 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                        >
                          <span className={`material-symbols-outlined text-sm ${isRefining ? 'animate-spin' : ''}`}>magic_button</span>
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            {isRefining ? 'Synthesizing...' : t('briefing.refine_cta')}
                          </span>
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <AnimatePresence>
                  {logs.length > 0 && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-black/40 rounded-2xl p-6 font-mono text-[10px] text-primary/70 overflow-hidden border border-primary/20"
                    >
                      <div className="space-y-1 max-h-[150px] overflow-y-auto custom-scrollbar">
                        {logs.map((log, i) => (
                          <div key={i} className="flex gap-2">
                            <span className="text-primary/30">[{i}]</span>
                            <p>{log}</p>
                          </div>
                        ))}
                        <div ref={logEndRef} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <motion.div 
            layout
            className="bg-surface-container-highest rounded-3xl p-10 border border-white/5 sticky top-28 shadow-2xl space-y-10"
          >
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block mb-2">{t('briefing.strength_label')}</span>
                <h4 className="font-headline text-3xl italic uppercase font-black tracking-tighter">Lion Heart</h4>
              </div>
              <motion.span 
                key={progress}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="text-4xl font-black font-headline text-primary"
              >
                {progress}%
              </motion.span>
            </div>
            
            <div className="relative h-3 w-full bg-background rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_20px_rgba(255,77,129,0.5)] transition-all duration-1000"
              />
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-on-background/30">{t('briefing.checklist_title')}</h5>
              <ul className="space-y-4">
                {[
                  { label: 'Project Identity', met: moniker.length >= 3 },
                  { label: 'Creative Narrative', met: narrative.length >= 20 },
                  { label: 'Visual DNA Injection', met: false },
                  { label: 'Stakeholder Mapping', met: false }
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-4 text-[10px] font-black uppercase tracking-widest ${item.met ? 'text-on-background' : 'text-on-background/20'}`}>
                    <span className={`material-symbols-outlined text-lg ${item.met ? 'text-primary' : ''}`} style={{ fontVariationSettings: item.met ? "'FILL' 1" : "" }}>
                      {item.met ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={progress < 100}
              className="w-full py-6 rounded-full bg-primary text-on-primary font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl transition-all disabled:opacity-10"
            >
              Submit Brief
            </motion.button>
          </motion.div>
        </aside>
      </main>
    </div>
  );
};

export default InteractiveBriefing;
