import React from 'react';

const Quoting: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen pb-40">
      <main className="pt-12 px-6 max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left: Service Marketplace (Asymmetric Bento Grid) */}
        <div className="flex-grow space-y-12">
          <header className="max-w-2xl mb-16">
            <h1 className="text-6xl font-headline font-extrabold mb-4 text-primary tracking-[-0.04em] leading-[0.9]">The Vault</h1>
            <p className="text-lg text-on-surface-variant font-headline italic">Access elite technical execution for your most raw creative instincts. Select services to begin your spec.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Service: Film (Featured Large) */}
            <div className="col-span-1 md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high transition-all duration-500 hover:bg-surface-bright ghost-border min-h-[400px]">
              <div className="aspect-[16/9] w-full relative h-full">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  alt="Film Service"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGQbk5ZkJFuvQLuva-3wBo12VKRcXHYfVlNQstq9RGShBWsdkX3uzCcbNI3p5KHk6aMKgdC9G2AksLCSrlnxvblD8D1YXm0vxthJ8ahYTGtb1klLt_2AUlR0brFzBmPUK0ohDE7DMeK_wFq0jTPqBRplNQmLS7O-vEIAtpsIzdCS86PUC_uZEFq5NpmiiYVd2uPb1xB2G1IjtUcyHL-u2AvUOsTGziMUbUAd5MaOkUt3nGf1wXE43lB6VpYuWNk3-rj4X0dyJY4jU" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-primary font-bold mb-2 block">Cinematography</span>
                    <h3 className="text-4xl font-headline font-bold text-on-surface mb-2">High-End Film Execution</h3>
                    <p className="text-on-surface-variant max-w-md">8K Raw capture, color grading, and anamorphic aesthetics for elite visual storytelling.</p>
                  </div>
                  <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 active:scale-95 transition-all whitespace-nowrap">
                    Add to Spec
                  </button>
                </div>
              </div>
            </div>

            {/* Service: Photo (Small) */}
            <div className="col-span-1 md:col-span-4 group min-h-[400px] flex flex-col justify-between p-8 rounded-xl bg-surface-container-low ghost-border hover:bg-surface-container-high transition-colors">
              <div className="mb-6">
                <span className="material-symbols-outlined text-primary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>camera</span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Editorial Photography</h3>
                <p className="text-sm text-on-surface-variant">Sharp, precision-focused imagery with high-dynamic range for brand identities.</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">$2,400 <span className="text-xs text-on-surface-variant font-normal">/day</span></span>
                <button className="p-2 border border-outline-variant rounded-full hover:bg-primary hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>

            {/* Service: AI Narrative (Medium) */}
            <div className="col-span-1 md:col-span-5 group relative p-8 rounded-xl bg-surface-container-highest ghost-border overflow-hidden min-h-[250px]">
              <div className="relative z-10">
                <h3 className="text-3xl font-headline font-bold text-on-surface mb-4">AI Narrative Synth</h3>
                <p className="text-on-surface-variant mb-8">Deep-learning script generation and narrative analysis to refine creative vision.</p>
                <div className="flex gap-4">
                  <div className="w-1/2 h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-gradient-to-r from-tertiary to-on-tertiary-container"></div>
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl opacity-5 text-on-surface">psychology</span>
            </div>

            {/* Service: Sound Design (Medium) */}
            <div className="col-span-1 md:col-span-7 bg-surface-container-high rounded-xl p-8 ghost-border flex flex-col md:flex-row items-center gap-8 min-h-[250px]">
              <div className="w-32 h-32 rounded-lg overflow-hidden shrink-0">
                <img 
                  className="w-full h-full object-cover grayscale" 
                  alt="Sound Design"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0CMPsrEMS32bXvfllbxH9BnaZiAlT8ShieoHKMcWk3XKhAP90FWe9Zdim-Bzc8fwCKgs7j8u1ewE3oTNpHCJODX4zSHCTWOp6pYLSMtUa8oUyZfASmB_dEmUe4jEre2znq9PFf34VSDUir615Ofh3liL-6H7t20mdcPuFzDCIa6sxULRdEkjxZUhuqnL0t-Qwdd6OWf1fQ_7Au3yaLZ6RVMRtz0mYEpiLRotDdVLPQlgMyqLDbl5Je-avl0nWJ4IKArnJBL0u_6A" 
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Spatial Audio Design</h3>
                <p className="text-on-surface-variant mb-4">Immersive 3D soundscapes engineered for premium exhibition environments.</p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary-container border-2 border-background"></div>
                    <div className="w-8 h-8 rounded-full bg-secondary-container border-2 border-background"></div>
                    <div className="w-8 h-8 rounded-full bg-tertiary-container border-2 border-background"></div>
                  </div>
                  <span className="text-xs text-on-surface-variant font-label">Trusted by 14 Prides</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Build Your Spec (Side Panel) */}
        <aside className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-24 h-fit space-y-6">
          <div className="liquid-glass p-8 rounded-xl border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-headline font-bold">Build Your Spec</h2>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Drafting</span>
            </div>

            {/* Skeuomorphic Controls */}
            <div className="space-y-10 mb-10">
              <div className="flex items-center justify-between">
                <span className="font-label text-sm text-on-surface-variant uppercase tracking-tighter">Raw Authenticity</span>
                <div className="flex gap-1 p-1 bg-surface-container-lowest rounded-lg border border-outline-variant/20">
                  <button className="w-10 h-10 bg-gradient-to-b from-[#2a2a2a] to-[#131313] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.05)] rounded flex items-center justify-center text-primary border-t border-white/10">
                    <span className="material-symbols-outlined text-xs">power_settings_new</span>
                  </button>
                  <button className="w-10 h-10 bg-transparent rounded flex items-center justify-center text-on-surface-variant/40">
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-label text-sm text-on-surface-variant uppercase tracking-tighter">Technical Precision</span>
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-white/5 relative flex items-center justify-center cursor-pointer shadow-[2px_4px_8px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]" style={{ background: 'radial-gradient(circle at 30% 30%, #393939, #131313)' }}>
                    <div className="w-1 h-4 bg-primary absolute top-1 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-label text-on-surface-variant">
                  <span>BUDGET PARAMETER</span>
                  <span className="text-primary font-bold">$12,000</span>
                </div>
                <div className="h-2 bg-surface-container-lowest rounded-full overflow-hidden p-0.5">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-primary-container rounded-full shadow-[0_0_12px_rgba(255,77,129,0.4)]"></div>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-outline-variant/10">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Active Services (2)</span>
                <span className="text-on-surface font-bold">+$3,400.00</span>
              </div>
              <button className="w-full bg-on-surface text-background font-bold py-4 rounded-full hover:scale-[1.02] active:scale-95 transition-all">
                Generate Quote
              </button>
            </div>
          </div>

          <div className="p-6 bg-surface-container-lowest/50 rounded-xl border border-white/5 flex gap-4 items-start">
            <span className="material-symbols-outlined text-tertiary">info</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">Quotes generated in The Vault are valid for 7 days. Elite execution depends on talent availability within The Pride.</p>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Quoting;
