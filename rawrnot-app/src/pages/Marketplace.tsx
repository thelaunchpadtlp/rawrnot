import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  priceUSD: number;
  featured?: boolean;
  imageAlt?: string;
  icon?: string;
  trustedBy?: number;
  aiPowered?: boolean;
}

const SERVICES: Service[] = [
  {
    id: 'film',
    title: 'High-End Film Execution',
    category: 'Cinematography',
    description: '8K Raw capture, color grading, and anamorphic aesthetics for elite visual storytelling.',
    priceUSD: 8500,
    featured: true,
    imageAlt: 'Professional film camera lens with anamorphic flares in a moody studio',
  },
  {
    id: 'photo',
    title: 'Editorial Photography',
    category: 'Photography',
    description: 'Sharp, precision-focused imagery with high-dynamic range for brand identities.',
    priceUSD: 2400,
    icon: 'camera',
  },
  {
    id: 'ai_narrative',
    title: 'AI Narrative Synth',
    category: 'AI Production',
    description: 'Deep-learning script generation and narrative analysis to refine creative vision.',
    priceUSD: 1500,
    aiPowered: true,
    icon: 'psychology',
  },
  {
    id: 'spatial_audio',
    title: 'Spatial Audio Design',
    category: 'Sound',
    description: 'Immersive 3D soundscapes engineered for premium exhibition environments.',
    priceUSD: 3200,
    trustedBy: 14,
    icon: 'graphic_eq',
  },
];

export default function Marketplace() {
  const [specItems, setSpecItems] = useState<string[]>([]);
  const [budget, setBudget] = useState(12000);
  const [rawAuthenticity, setRawAuthenticity] = useState(true);
  const [shadowDismissed, setShadowDismissed] = useState(false);

  const toggleService = (id: string) => {
    setSpecItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const specTotal = SERVICES
    .filter(s => specItems.includes(s.id))
    .reduce((sum, s) => sum + s.priceUSD, 0);

  const featuredService = SERVICES.find(s => s.featured)!;
  const sideServices = SERVICES.filter(s => !s.featured);

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 liquid-glass shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(228,189,194,0.05)]">
        <div className="flex justify-between items-center px-8 h-18 w-full max-w-[1920px] mx-auto">
          <div className="font-headline text-2xl tracking-tight text-primary">raw'r'not</div>
          <div className="hidden md:flex gap-8 items-center">
            {['The Vault', 'The Territory', 'The Pride', 'The Echo'].map((item) => (
              <a
                key={item}
                href="#"
                className={`font-headline tracking-tight transition-colors duration-300 text-sm ${
                  item === 'The Vault'
                    ? 'text-primary border-b border-primary pb-0.5'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Notifications">
              <span className="material-symbols-outlined text-xl">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors" aria-label="Account">
              <span className="material-symbols-outlined text-xl">account_circle</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <main className="pt-24 md:pt-28 pb-36 px-4 md:px-8 max-w-[1920px] mx-auto flex flex-col xl:flex-row gap-8 xl:gap-12 items-start">

        {/* Left: Service Grid */}
        <div className="flex-grow w-full min-w-0 space-y-10">
          <header className="max-w-2xl">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-extrabold text-roar text-primary mb-4">
              The Vault
            </h1>
            <p className="font-headline text-base sm:text-lg italic text-on-surface-variant">
              Access elite technical execution for your most raw creative instincts.
              Select services to begin your spec.
            </p>
          </header>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-4 sm:gap-5">

            {/* Featured Service (8 cols) */}
            <div
              className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high transition-all duration-500 hover:bg-surface-bright ghost-border cursor-pointer min-h-[300px]"
              onClick={() => toggleService(featuredService.id)}
            >
              <div className="aspect-video w-full relative">
                <img
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7d3?auto=format&fit=crop&q=80&w=1200"
                  alt={featuredService.imageAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-5 sm:p-7 w-full">
                <div className="flex justify-between items-end flex-wrap gap-4">
                  <div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-primary font-bold mb-2 block">
                      {featuredService.category}
                    </span>
                    <h3 className="font-headline text-3xl sm:text-4xl font-bold text-on-background mb-2">
                      {featuredService.title}
                    </h3>
                    <p className="text-on-surface-variant max-w-md text-xs sm:text-sm">
                      {featuredService.description}
                    </p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleService(featuredService.id); }}
                    className={`px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-bold shadow-lg transition-all text-xs sm:text-sm ${
                      specItems.includes(featuredService.id)
                        ? 'bg-primary text-on-primary'
                        : 'bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed hover:opacity-90 active:scale-95'
                    }`}
                  >
                    {specItems.includes(featuredService.id) ? '✓ In Spec' : 'Add to Spec'}
                  </button>
                </div>
              </div>
              {specItems.includes(featuredService.id) && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm text-on-primary">check</span>
                </div>
              )}
            </div>

            {/* Editorial Photography (4 cols) */}
            <div
              className="col-span-12 lg:col-span-4 flex flex-col justify-between p-5 sm:p-7 rounded-xl bg-surface-container-low ghost-border hover:bg-surface-container-high transition-colors cursor-pointer group"
              onClick={() => toggleService(sideServices[0].id)}
            >
              <div className="mb-5">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-4 block">
                  {sideServices[0].icon}
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-background mb-2 group-hover:italic transition-all">
                  {sideServices[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant">{sideServices[0].description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-headline text-xl font-bold text-primary">
                  ${sideServices[0].priceUSD.toLocaleString()}
                  <span className="text-[10px] sm:text-xs text-on-surface-variant font-normal font-body ml-1">/day</span>
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleService(sideServices[0].id); }}
                  className={`w-10 h-10 border rounded-full hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center ${
                    specItems.includes(sideServices[0].id)
                      ? 'bg-primary text-on-primary border-primary'
                      : 'border-outline-variant'
                  }`}
                  aria-label="Add to spec"
                >
                  <span className="material-symbols-outlined text-sm">
                    {specItems.includes(sideServices[0].id) ? 'check' : 'add'}
                  </span>
                </button>
              </div>
            </div>

            {/* AI Narrative (5 cols) */}
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-5 relative p-5 sm:p-7 rounded-xl bg-surface-container-highest ghost-border overflow-hidden cursor-pointer hover:bg-surface-bright transition-colors"
              onClick={() => toggleService(sideServices[1].id)}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-headline text-2xl font-bold text-on-background">
                    {sideServices[1].title}
                  </h3>
                  {specItems.includes(sideServices[1].id) && (
                    <span className="material-symbols-outlined text-primary ml-2">check_circle</span>
                  )}
                </div>
                <p className="text-on-surface-variant mb-6 text-xs sm:text-sm">{sideServices[1].description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded-full">
                    AI-Powered
                  </span>
                  <span className="font-headline text-lg font-bold text-primary">
                    ${sideServices[1].priceUSD.toLocaleString()}
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-5 text-on-surface">
                psychology
              </span>
            </div>

            {/* Spatial Audio (7 cols) */}
            <div
              className="col-span-12 sm:col-span-6 lg:col-span-7 bg-surface-container-high rounded-xl p-5 sm:p-7 ghost-border flex items-center gap-6 cursor-pointer hover:bg-surface-bright transition-colors"
              onClick={() => toggleService(sideServices[2].id)}
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-lg overflow-hidden shrink-0 hide-on-watch">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=400"
                  alt="Professional audio soundboard in dark recording booth"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-headline text-2xl font-bold text-on-background mb-1">
                  {sideServices[2].title}
                </h3>
                <p className="text-on-surface-variant mb-3 text-xs sm:text-sm">{sideServices[2].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-primary-container border-2 border-background opacity-80" />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs text-on-surface-variant">
                      Trusted by {sideServices[2].trustedBy} Prides
                    </span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleService(sideServices[2].id); }}
                    className={`w-10 h-10 border rounded-full flex items-center justify-center transition-all ${
                      specItems.includes(sideServices[2].id)
                        ? 'bg-primary text-on-primary border-primary'
                        : 'border-outline-variant hover:bg-primary hover:text-on-primary'
                    }`}
                    aria-label="Add to spec"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {specItems.includes(sideServices[2].id) ? 'check' : 'add'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Build Your Spec Panel */}
        <aside className="w-full xl:w-[380px] xl:max-w-xs shrink-0 xl:sticky xl:top-28 space-y-5">
          <div className="liquid-glass p-7 rounded-xl border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between mb-7">
              <h2 className="font-headline text-2xl font-bold text-on-background">Build Your Spec</h2>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {specItems.length === 0 ? 'Empty' : 'Drafting'}
              </span>
            </div>

            {/* Skeuomorphic Controls */}
            <div className="space-y-8 mb-8">
              {/* Raw Authenticity Toggle */}
              <div className="flex items-center justify-between">
                <span className="font-body text-xs text-on-surface-variant uppercase tracking-widest">
                  Raw Authenticity
                </span>
                <div className="flex gap-1 p-1 bg-surface-container-lowest rounded-lg border border-outline-variant/20">
                  <button
                    onClick={() => setRawAuthenticity(true)}
                    className={`w-10 h-10 skeuo-switch rounded-md flex items-center justify-center transition-all ${
                      rawAuthenticity ? 'text-primary' : 'text-on-surface-variant/40'
                    }`}
                    aria-label="Enable raw authenticity"
                  >
                    <span className="material-symbols-outlined text-sm">power_settings_new</span>
                  </button>
                  <button
                    onClick={() => setRawAuthenticity(false)}
                    className={`w-10 h-10 rounded-md flex items-center justify-center transition-all ${
                      !rawAuthenticity ? 'text-primary skeuo-switch' : 'text-on-surface-variant/40'
                    }`}
                    aria-label="Disable raw authenticity"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
              </div>

              {/* Technical Precision Dial */}
              <div className="flex items-center justify-between">
                <span className="font-body text-xs text-on-surface-variant uppercase tracking-widest">
                  Technical Precision
                </span>
                <div className="w-14 h-14 skeuo-dial rounded-full border border-white/5 flex items-center justify-center cursor-pointer hover:rotate-45 transition-transform">
                  <div className="w-1 h-4 bg-primary rounded-full" />
                </div>
              </div>

              {/* Budget Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-body text-xs text-on-surface-variant uppercase tracking-widest">
                    Budget Parameter
                  </span>
                  <span className="font-headline text-primary font-bold">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={50000}
                  step={500}
                  value={budget}
                  onChange={e => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container-lowest rounded-full appearance-none cursor-pointer accent-primary"
                  aria-label="Budget parameter"
                />
              </div>
            </div>

            {/* Selected Services */}
            {specItems.length > 0 && (
              <div className="space-y-2 mb-6 pt-5 border-t border-outline-variant/10">
                {SERVICES.filter(s => specItems.includes(s.id)).map(s => (
                  <div key={s.id} className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant truncate mr-2">{s.title}</span>
                    <span className="text-on-background font-bold shrink-0">${s.priceUSD.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-4 pt-5 border-t border-outline-variant/10">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant text-sm">
                  Active Services ({specItems.length})
                </span>
                <span className="text-on-background font-bold font-headline text-lg">
                  +${specTotal.toLocaleString()}
                </span>
              </div>
              <button
                disabled={specItems.length === 0}
                className="w-full bg-on-background text-background font-headline font-bold py-4 rounded-full hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Generate Quote →
              </button>
            </div>
          </div>

          {/* Info card */}
          <div className="p-5 bg-surface-container-lowest/50 rounded-xl border border-outline-variant/10 flex gap-3 items-start">
            <span className="material-symbols-outlined text-tertiary text-lg shrink-0">info</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Quotes generated in The Vault are valid for 7 days.
              Elite execution depends on talent availability within The Pride.
            </p>
          </div>
        </aside>
      </main>

      {/* Shadow Profile Sticky Nudge */}
      {!shadowDismissed && (
        <div className="fixed bottom-0 left-0 w-full z-50 px-6 pb-6 pointer-events-none">
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="liquid-glass p-1 rounded-full border border-primary/20 shadow-2xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 pl-5">
                <div className="relative flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg">cloud_sync</span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-bold text-on-background">Shadow Profile Active</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-body">
                    Guest progress is being cached locally
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pr-1">
                <div className="hidden lg:flex flex-col items-end mr-2">
                  <span className="text-[10px] font-bold text-primary-container mb-0.5 uppercase">Unsecured Data</span>
                  <div className="w-20 h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-primary-container rounded-full" />
                  </div>
                </div>
                <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed px-6 py-3 rounded-full text-sm font-black shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 whitespace-nowrap">
                  Claim Your Profile
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button
                  onClick={() => setShadowDismissed(true)}
                  className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-on-background transition-colors rounded-full"
                  aria-label="Dismiss"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
