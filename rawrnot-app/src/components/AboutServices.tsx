import React from 'react';
import { motion } from 'framer-motion';

const AboutServices: React.FC = () => {
  

  return (
    <div className="bg-background text-on-background font-body min-h-screen pb-32">
      <main className="pt-12 px-6 max-w-7xl mx-auto space-y-32">
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-label text-primary uppercase tracking-[0.4em] text-[10px] font-black mb-8 block"
              >
                The Manifesto
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-7xl md:text-[9rem] font-headline font-black italic tracking-tighter leading-[0.8] uppercase mb-12"
              >
                The <span className="text-primary">Method.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl leading-relaxed font-light italic text-on-background/80 max-w-2xl"
              >
                Rawrnot exists at the intersection of untamed human instinct and surgical digital precision. We don't just create; we engineer visceral resonance.
              </motion.p>
            </div>
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800" 
                  alt="Abstract Method"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 liquid-glass p-8 rounded-2xl border border-white/5 shadow-2xl max-w-xs">
                <h3 className="text-xl font-headline font-black italic text-primary uppercase">The Pride</h3>
                <p className="text-xs text-on-surface-variant mt-4 leading-relaxed font-bold uppercase tracking-widest">
                  An elite collective of decentralized creative specialists.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: '8K Cinematography',
              icon: 'videocam',
              desc: 'High-frequency visual capture using anamorphic optics and elite color science.',
              img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400'
            },
            {
              title: 'AI Integration',
              icon: 'biotech',
              desc: 'Leveraging deep learning for narrative synthesis and predictive trend analysis.',
              img: 'https://images.unsplash.com/photo-1620712943543-bcc4628c71d0?auto=format&fit=crop&q=80&w=400'
            },
            {
              title: 'Spatial Audio',
              icon: 'spatial_audio',
              desc: 'Immersive 3D soundscapes designed for high-end physical and digital exhibitions.',
              img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400'
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group space-y-8"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/5 relative bg-surface-container-high">
                <img src={service.img} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" alt={service.title} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-5xl text-primary drop-shadow-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-headline font-black italic uppercase tracking-tighter">{service.title}</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="bg-primary/5 rounded-[3rem] p-16 md:p-24 border border-primary/20 text-center space-y-12 overflow-hidden relative">
          <div className="absolute inset-0 noise-overlay opacity-10" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-headline font-black italic tracking-tighter uppercase relative z-10"
          >
            Ready for <br />
            <span className="text-primary">The Hunt?</span>
          </motion.h2>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-on-primary px-12 py-6 rounded-full font-black uppercase tracking-[0.4em] text-xs shadow-2xl relative z-10"
          >
            Contact the Pride
          </motion.button>
        </section>
      </main>
    </div>
  );
};

export default AboutServices;
