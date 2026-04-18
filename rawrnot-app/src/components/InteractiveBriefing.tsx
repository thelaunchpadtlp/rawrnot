import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const InteractiveBriefing: React.FC = () => {
  const { t } = useLanguage();
  const [moniker, setMoniker] = useState('');
  const [narrative, setNarrative] = useState('');
  const [progress, setProgress] = useState(0);
  const [isRefining, setIsRefining] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    let newProgress = 0;
    if (moniker.length >= 3) newProgress += 30;
    if (narrative.length >= 20) newProgress += 70;
    setProgress(newProgress);
  }, [moniker, narrative]);

  const handleRefineAI = () => {
    if (narrative.length < 10) {
      setErrors(['Narrative too short for AI analysis. Need at least 10 characters.']);
      return;
    }
    setErrors([]);
    setIsRefining(true);
    setTimeout(() => {
      setNarrative(prev => prev + " (Refined by AI: Enhanced for tactical clarity and aesthetic resonance)");
      setIsRefining(false);
    }, 1500);
  };

  const handleSubmit = () => {
    if (progress < 100) {
      setErrors(['Please complete all required fields to reach 100% strength.']);
      return;
    }
    alert('Brief submitted to the Pride.');
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
      <main className="pt-12 pb-32 px-4 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

        <div className="lg:col-span-8 space-y-12">
          <section className="relative">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-editorial leading-[0.9] text-on-background uppercase italic">
              {t('briefing.title_1')} <br />
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">{t('briefing.title_2')}</span>
            </h1>
            <p className="mt-6 text-on-surface-variant text-lg max-w-lg font-light leading-relaxed">
              {t('briefing.desc')}
            </p>
          </section>

          <div className="liquid-glass rounded-xl p-8 md:p-12 ghost-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">{t('briefing.phase')} 01</span>
              <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            
            <div className="space-y-8">
              <h2 className="font-headline text-3xl text-on-background leading-tight italic uppercase">Define the Core Essence.</h2>
              <div className="grid gap-6">
                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-3">{t('briefing.moniker_label')}</label>
                  <input 
                    className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-on-background py-4 px-6 rounded-sm placeholder:text-neutral-700 transition-all outline-none text-sm" 
                    placeholder="e.g. Apex Vanguard Rebrand" 
                    type="text" 
                    value={moniker}
                    onChange={(e) => setMoniker(e.target.value)}
                  />
                  {moniker.length > 0 && moniker.length < 3 && <p className="text-error text-[10px] mt-2 font-bold uppercase tracking-tighter">Too short</p>}
                </div>
                
                <div className="group relative">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-3">{t('briefing.narrative_label')}</label>
                  <div className="relative">
                    <textarea 
                      className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-on-background py-4 px-6 rounded-sm placeholder:text-neutral-700 resize-none transition-all outline-none text-sm" 
                      placeholder="Describe the soul of this project..." 
                      rows={4} 
                      value={narrative}
                      onChange={(e) => setNarrative(e.target.value)}
                    />
                    <button 
                      onClick={handleRefineAI}
                      disabled={isRefining || narrative.length < 10}
                      className="absolute bottom-4 right-4 flex items-center gap-2 bg-surface-bright/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 hover:bg-surface-bright transition-colors disabled:opacity-50"
                    >
                      <span className={`material-symbols-outlined text-[18px] text-primary ${isRefining ? 'animate-spin' : ''}`}>magic_button</span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface">
                        {isRefining ? 'Refining...' : t('briefing.refine_cta')}
                      </span>
                    </button>
                  </div>
                  {narrative.length > 0 && narrative.length < 20 && <p className="text-error text-[10px] mt-2 font-bold uppercase tracking-tighter">Need {20 - narrative.length} more characters</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container-highest rounded-xl p-8 ghost-border sticky top-28 shadow-2xl">
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">{t('briefing.strength_label')}</span>
                <h4 className="font-headline text-2xl italic uppercase font-black tracking-tighter">Lion Heart</h4>
              </div>
              <span className="text-3xl font-bold font-headline text-primary">{progress}%</span>
            </div>
            
            <div className="relative h-4 w-full bg-surface-container-low rounded-full overflow-hidden mb-8">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-container rounded-full shadow-[0_0_20px_rgba(255,77,129,0.3)] transition-all duration-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {errors.map((err, i) => (
              <p key={i} className="text-error text-[10px] font-bold uppercase tracking-tighter mb-4">{err}</p>
            ))}

            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-outline">{t('briefing.checklist_title')}</h5>
              <ul className="space-y-3">
                <li className={`flex items-center gap-3 text-sm ${moniker.length >= 3 ? 'text-on-surface' : 'text-neutral-500'}`}>
                  <span className={`material-symbols-outlined text-sm ${moniker.length >= 3 ? 'text-primary' : ''}`} style={{ fontVariationSettings: moniker.length >= 3 ? "'FILL' 1" : "" }}>
                    {moniker.length >= 3 ? 'check_circle' : 'circle'}
                  </span>
                  Project Identity
                </li>
                <li className={`flex items-center gap-3 text-sm ${narrative.length >= 20 ? 'text-on-surface' : 'text-neutral-500'}`}>
                  <span className={`material-symbols-outlined text-sm ${narrative.length >= 20 ? 'text-primary' : ''}`} style={{ fontVariationSettings: narrative.length >= 20 ? "'FILL' 1" : "" }}>
                    {narrative.length >= 20 ? 'check_circle' : 'circle'}
                  </span>
                  Creative Narrative
                </li>
              </ul>
            </div>
            
            <button 
              onClick={handleSubmit}
              disabled={progress < 100}
              className="w-full mt-10 bg-gradient-to-tr from-primary to-primary-container text-on-primary-fixed py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-primary-container/20 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50"
            >
              Submit Brief
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default InteractiveBriefing;
