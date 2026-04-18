import React, { useState, useEffect } from 'react';

const InteractiveBriefing: React.FC = () => {
  const [moniker, setMoniker] = useState('');
  const [narrative, setNarrative] = useState('');
  const [progress, setProgress] = useState(64);
  const [isRefining, setIsRefining] = useState(false);

  useEffect(() => {
    let newProgress = 0;
    if (moniker) newProgress += 20;
    if (narrative) newProgress += 44;
    // Base progress of 64 from design if fields are empty, 
    // but here we calculate based on input for better interactivity
    if (!moniker && !narrative) setProgress(64);
    else setProgress(Math.min(100, 64 + (moniker ? 10 : 0) + (narrative ? 26 : 0)));
  }, [moniker, narrative]);

  const handleRefineAI = () => {
    if (!narrative) return;
    setIsRefining(true);
    // Mock AI refinement
    setTimeout(() => {
      setNarrative(prev => prev + " (Refined by AI for lethal precision: " + prev.length + " chars analyzed)");
      setIsRefining(false);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
      <main className="pt-12 pb-32 px-4 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Column: Asymmetric Briefing Canvas */}
        <div className="lg:col-span-8 space-y-12">
          {/* Hero Title Section */}
          <section className="relative">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-editorial leading-[0.9] text-on-background">
              Unleash the <br />
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent italic">Creative Beast.</span>
            </h1>
            <p className="mt-6 text-on-surface-variant text-lg max-w-lg font-light leading-relaxed">
              Welcome to the Roar Portal. Your vision is the prey; let’s track it down with lethal precision.
            </p>
          </section>

          {/* Interactive Step 1: Liquid Glass Panel */}
          <div className="liquid-glass rounded-xl p-8 md:p-12 ghost-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Phase 01</span>
              <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-3xl text-on-background leading-tight">Define the Core Essence.</h2>
              <div className="grid gap-6">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">Project Moniker</label>
                  <input 
                    className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-on-background py-4 px-6 rounded-sm placeholder:text-neutral-700 transition-all outline-none" 
                    placeholder="e.g. Apex Vanguard Rebrand" 
                    type="text" 
                    value={moniker}
                    onChange={(e) => setMoniker(e.target.value)}
                  />
                </div>
                <div className="group relative">
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-3">The Narrative (AI Enhanced)</label>
                  <div className="relative">
                    <textarea 
                      className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary text-on-background py-4 px-6 rounded-sm placeholder:text-neutral-700 resize-none transition-all outline-none" 
                      placeholder="Describe the soul of this project..." 
                      rows={4} 
                      value={narrative}
                      onChange={(e) => setNarrative(e.target.value)}
                    />
                    <button 
                      onClick={handleRefineAI}
                      disabled={isRefining || !narrative}
                      className="absolute bottom-4 right-4 flex items-center gap-2 bg-surface-bright/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 hover:bg-surface-bright transition-colors disabled:opacity-50"
                    >
                      <span className={`material-symbols-outlined text-[18px] text-primary ${isRefining ? 'animate-spin' : ''}`}>magic_button</span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-on-surface">
                        {isRefining ? 'Refining...' : 'Refine with AI'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Upload Zone: Bento-style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low rounded-xl p-8 ghost-border flex flex-col justify-between min-h-[300px]">
              <div>
                <h3 className="font-headline text-2xl mb-2">Visual DNA</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">Drag and drop textures, colors, or mood images that trigger your instinct.</p>
              </div>
              <div className="mt-8 border-2 border-dashed border-outline-variant/30 rounded-xl p-10 flex flex-col items-center justify-center hover:border-primary/50 transition-colors group cursor-pointer">
                <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary mb-4">cloud_upload</span>
                <span className="text-xs font-bold uppercase tracking-widest text-outline-variant">Inject Reference Files</span>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="bg-primary-container rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group cursor-pointer">
                <div className="relative z-10">
                  <h3 className="font-headline text-xl text-on-primary-container">Target Audience</h3>
                  <p className="text-sm text-on-primary-container/80 mt-1">Who are we hunting for?</p>
                </div>
                <div className="mt-4 flex -space-x-2 relative z-10">
                  <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="audience member"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHd1-ogWEaE4lbUApeqmKye_XfUwclzmbqwsai78XwDgBjFtsz1sMV3VB-mgQ8EQnISkCzMSL88M93CQSEHn3YtKCzoyFTZSebtdYk3jkD_XeWAUpGE5MjHGFfrdpbY_u6S4EVl9WV1eUmkOvw5YMIYwbNGn_x6fDMLQ9zH0iJpmZjPCEvZLv7gQC3fYquU0RNsAGY0Nsjw1UPj7BG02Y3iZ34bPyjamhINGw8NfBKqY7RV9C2m_mZ0wI7CnjkgeSIna2CsuxPSys" 
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="audience member"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEYYxaLP0MVF6Q0D9tKR0G_fV1jTbfSSgYTipURkDINjXqYoe7jhPcqqrbvYxj1p10IfgZOKhVDwk6desONZZjcVLA22AH7CYBjFHL3k7TXYxTiwjWsaZqheL-ALrZqu6bzZrNsRnYkyVNoCxgFdEop0vEKsPOLgPFToWUnN-UpFvSboOasViPgtSs_LaVaix3KiO46eoBXwDx0Mo3P7R_HYLHQ6-k2eKmoOSmx8xnEupaDTUafAaOFWA12CBXDvHQICrHdTVPoxc" 
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-on-primary-container flex items-center justify-center text-primary-container text-xs font-bold">+12</div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                </div>
              </div>

              <div className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-center ghost-border relative overflow-hidden group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-headline text-xl">Sonic Branding</h3>
                    <p className="text-sm text-on-surface-variant">The roar, translated to sound.</p>
                  </div>
                  <span className="material-symbols-outlined text-primary">mic</span>
                </div>
                <div className="mt-4 flex gap-1 items-end h-8">
                  <div className="w-1 bg-primary/40 h-1/2"></div>
                  <div className="w-1 bg-primary/60 h-3/4"></div>
                  <div className="w-1 bg-primary h-full"></div>
                  <div className="w-1 bg-primary h-2/3"></div>
                  <div className="w-1 bg-primary/50 h-1/2"></div>
                  <div className="w-1 bg-primary/80 h-3/4"></div>
                  <div className="w-1 bg-primary h-1/4"></div>
                  <div className="w-1 bg-primary/40 h-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Gamification & Stats */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container-highest rounded-xl p-8 ghost-border sticky top-28">
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">Brief Strength</span>
                <h4 className="font-headline text-2xl">Lion Heart</h4>
              </div>
              <span className="text-3xl font-bold font-headline text-primary">{progress}%</span>
            </div>
            <div className="relative h-4 w-full bg-surface-container-low rounded-full overflow-hidden mb-8">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-tertiary to-on-tertiary-container rounded-full shadow-[0_0_20px_rgba(255,77,129,0.3)] transition-all duration-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-bright/10 border border-white/5">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  <span className="text-on-surface font-bold">Nudge:</span> {progress < 100 ? "Complete all fields to reach 100% clarity and unlock the 'Golden Mane' award." : "Perfection achieved. The hunt is ready."}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-outline">Submission Checklist</h5>
              <ul className="space-y-3">
                <li className={`flex items-center gap-3 text-sm ${moniker ? 'text-on-surface' : 'text-neutral-500'}`}>
                  <span className={`material-symbols-outlined text-sm ${moniker ? 'text-primary' : ''}`} style={{ fontVariationSettings: moniker ? "'FILL' 1" : "" }}>
                    {moniker ? 'check_circle' : 'circle'}
                  </span>
                  Project Identity
                </li>
                <li className={`flex items-center gap-3 text-sm ${narrative ? 'text-on-surface' : 'text-neutral-500'}`}>
                  <span className={`material-symbols-outlined text-sm ${narrative ? 'text-primary' : ''}`} style={{ fontVariationSettings: narrative ? "'FILL' 1" : "" }}>
                    {narrative ? 'check_circle' : 'circle'}
                  </span>
                  Creative Narrative
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-500">
                  <span className="material-symbols-outlined text-sm">circle</span>
                  Visual DNA Injection
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-500">
                  <span className="material-symbols-outlined text-sm">circle</span>
                  Stakeholder Mapping
                </li>
              </ul>
            </div>
            <button 
              disabled={progress < 100}
              className="w-full mt-10 bg-gradient-to-tr from-primary to-primary-container text-on-primary-fixed py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary-container/20 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50"
            >
              Submit Brief
            </button>
          </div>
        </aside>
      </main>

      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-tertiary/5 blur-[100px] rounded-full -z-10"></div>
    </div>
  );
};

export default InteractiveBriefing;
