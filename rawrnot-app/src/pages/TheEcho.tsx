import React from 'react';

function TheEcho() {
  return (
    <main className="pb-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-16 mt-16">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-block border-2 border-primary text-primary px-4 py-1 rounded-full text-xs font-mono uppercase tracking-[0.2em] animate-pulse">
            Viral Engine Active
          </div>
          <h1 className="font-headline text-6xl md:text-8xl leading-[0.85] text-on-background">
            The <br/><span className="text-gradient-primary italic font-light">Echo</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed">
            Reed's Law in motion. Multiply the resonance. Create a Team Buy session and lower the barrier for the collective.
          </p>
        </div>

        <div className="lg:col-span-6 bg-surface-container-high p-8 rounded-sm ghost-border relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <span className="material-symbols-outlined text-[12rem]" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
          </div>
          
          <div className="relative z-10 space-y-8">
            <div className="border-b-2 border-on-background pb-4">
              <h2 className="font-headline text-3xl">Active Hunt Sessions</h2>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-sm border border-outline-variant flex justify-between items-center shadow-inner">
              <div>
                <h4 className="font-headline text-xl italic">Editorial Campaign #822</h4>
                <p className="font-mono text-[10px] text-primary mt-1">2 / 5 Participants Joined</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono text-on-surface-variant uppercase">Time Left</p>
                <p className="font-headline text-2xl text-on-background">14:22:05</p>
              </div>
            </div>

            <button className="w-full bg-gradient-primary text-on-primary font-headline text-xl py-4 rounded-sm shadow-lg hover:opacity-90 transition-opacity">
              Launch New Team Buy
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TheEcho;
