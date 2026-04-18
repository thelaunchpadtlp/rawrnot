import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const InteractiveBriefing: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [moniker, setMoniker] = useState('');
  const [narrative, setNarrative] = useState('');
  const [progress, setProgress] = useState(0);
  const [isRefining, setIsRefining] = useState(false);
  const [isGeneratingVisuals, setIsGeneratingVisuals] = useState(false);
  const [visuals, setVisuals] = useState<string[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let newProgress = 0;
    if (moniker.length >= 3) newProgress += 20;
    if (narrative.length >= 20) newProgress += 40;
    if (visuals.length > 0) newProgress += 40;
    setProgress(newProgress);
  }, [moniker, narrative, visuals]);

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
        body: JSON.stringify({ narrative, language: localStorage.getItem('language') || 'en' })
      });
      addLog("Routing to Llama-3-70B Worker...");
      const data = await response.json();
      setNarrative(data.refinedText);
      addLog("Refinement complete.");
    } catch (error) {
      addLog("Error: AI Gateway unreachable.");
    } finally {
      setIsRefining(false);
    }
  };

  const handleGenerateVisuals = async () => {
    if (narrative.length < 10) return;
    setIsGeneratingVisuals(true);
    addLog("Initializing Visual DNA Engine...");
    try {
      const response = await fetch('http://localhost:3001/api/generate-visual-dna', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: narrative, style: theme })
      });
      addLog(`Synthesizing ${theme.toUpperCase()} concept art...`);
      const data = await response.json();
      setVisuals(data.images);
      addLog("Visual DNA generated and injected.");
    } catch (error) {
      addLog("Error: Visual engine failure.");
    } finally {
      setIsGeneratingVisuals(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen relative">
      {/* Design Reference Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <img src="/assets/stitch/briefing.png" className="w-full h-full object-cover" alt="Briefing Design Reference" />
      </div>

      <main className="pt-12 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

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

          <motion.div layout className="liquid-glass rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden space-y-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32" />
            
            {/* Phase 01: Context */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">{t('briefing.phase')} 01 // Input</span>
                <div className="h-[1px] flex-grow bg-white/10" />
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
                  <textarea 
                    className="w-full bg-surface-container-lowest border border-white/5 focus:border-primary/50 text-on-background py-8 px-8 rounded-xl placeholder:text-on-background/20 resize-none transition-all outline-none text-lg min-h-[250px] font-light leading-relaxed" 
                    placeholder="Describe the soul of this project..." 
                    value={narrative}
                    onChange={(e) => setNarrative(e.target.value)}
                  />
                  <AnimatePresence>
                    {narrative.length >= 10 && (
                      <motion.button 
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                        onClick={handleRefineAI} disabled={isRefining}
                        className="absolute bottom-6 right-6 flex items-center gap-3 bg-primary text-on-primary px-6 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                      >
                        <span className={`material-symbols-outlined text-sm ${isRefining ? 'animate-spin' : ''}`}>magic_button</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">{t('briefing.refine_cta')}</span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Phase 02: Visual DNA */}
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">{t('briefing.phase')} 02 // Visual DNA</span>
                <div className="h-[1px] flex-grow bg-white/10" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {visuals.length === 0 ? (
                    <motion.div 
                      key="empty-visuals"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="col-span-full aspect-video rounded-2xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center space-y-6"
                    >
                      <span className="material-symbols-outlined text-5xl text-on-background/10">add_photo_alternate</span>
                      <button 
                        onClick={handleGenerateVisuals}
                        disabled={isGeneratingVisuals || narrative.length < 10}
                        className="bg-on-background text-background px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-on-primary transition-all disabled:opacity-20"
                      >
                        {isGeneratingVisuals ? 'Generating...' : 'Generate Concept Art'}
                      </button>
                    </motion.div>
                  ) : (
                    visuals.map((src, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 relative group cursor-pointer"
                      >
                        <img src={src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Generated DNA" />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-3xl">fullscreen</span>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* AI Console Logs */}
            <AnimatePresence>
              {logs.length > 0 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  className="bg-black/40 rounded-2xl p-6 font-mono text-[10px] text-primary/70 border border-primary/20"
                >
                  <div className="space-y-1 max-h-[150px] overflow-y-auto custom-scrollbar">
                    {logs.map((log, i) => (
                      <div key={i} className="flex gap-2"><span className="text-primary/30">[{i}]</span><p>{log}</p></div>
                    ))}
                    <div ref={logEndRef} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <motion.div layout className="bg-surface-container-highest rounded-3xl p-10 border border-white/5 sticky top-28 shadow-2xl space-y-10">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary block mb-2">{t('briefing.strength_label')}</span>
                <h4 className="font-headline text-3xl italic uppercase font-black tracking-tighter">Lion Heart</h4>
              </div>
              <motion.span key={progress} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="text-4xl font-black font-headline text-primary">{progress}%</motion.span>
            </div>
            <div className="relative h-3 w-full bg-background rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_20px_rgba(255,77,129,0.5)] transition-all duration-1000" />
            </div>
            <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-on-background/30">{t('briefing.checklist_title')}</h5>
              <ul className="space-y-4">
                {[
                  { label: 'Project Identity', met: moniker.length >= 3 },
                  { label: 'Creative Narrative', met: narrative.length >= 20 },
                  { label: 'Visual DNA Injection', met: visuals.length > 0 },
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
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={progress < 100} className="w-full py-6 rounded-full bg-primary text-on-primary font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl transition-all disabled:opacity-10">
              Submit Brief
            </motion.button>
          </motion.div>
        </aside>
      </main>
    </div>
  );
};

export default InteractiveBriefing;
