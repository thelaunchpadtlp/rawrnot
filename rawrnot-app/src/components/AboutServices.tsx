import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutServices: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 min-h-screen pb-32">
      <main className="pt-12 px-6 max-w-7xl mx-auto">
        <section className="mb-24">
          <h1 className="text-6xl md:text-8xl font-headline font-black italic tracking-tighter mb-8">
            The <span className="text-primary">Methodology.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <p className="text-xl leading-relaxed font-light">
              Rawrnot exists at the intersection of raw human instinct and surgical digital precision. We don't just create content; we engineer visceral experiences that resonate at a frequency others can't reach.
            </p>
            <div className="liquid-glass p-8 rounded-xl border border-white/5 space-y-6">
              <h3 className="text-2xl font-headline italic text-primary">The Pride</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                A collective of elite creators, developers, and strategists. We operate as a decentralized agency model, bringing the exact right talent to every specific hunt.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="surface-container-high p-10 rounded-xl border border-white/5 hover:border-primary/30 transition-all group">
            <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>videocam</span>
            <h3 className="text-3xl font-headline font-bold mb-4">8K Cinematography</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">High-frequency visual capture using anamorphic optics and elite color science.</p>
          </div>
          <div className="surface-container-high p-10 rounded-xl border border-white/5 hover:border-primary/30 transition-all group">
            <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
            <h3 className="text-3xl font-headline font-bold mb-4">AI Integration</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Leveraging deep learning for narrative synthesis and predictive visual trends.</p>
          </div>
          <div className="surface-container-high p-10 rounded-xl border border-white/5 hover:border-primary/30 transition-all group">
            <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>spatial_audio</span>
            <h3 className="text-3xl font-headline font-bold mb-4">Spatial Audio</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Immersive 3D soundscapes designed for physical and digital apex environments.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutServices;
