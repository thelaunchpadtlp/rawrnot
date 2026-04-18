import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const servicesList: Service[] = [
  { 
    id: 'film', 
    name: '8K Anamorphic Film', 
    price: 5000, 
    category: 'Cinematography',
    description: 'Elite visual storytelling with anamorphic optics and raw capture.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'photo', 
    name: 'Editorial Photography', 
    price: 2400, 
    category: 'Stills',
    description: 'High-dynamic range imagery for premium brand identities.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'ai', 
    name: 'AI Narrative Synth', 
    price: 1500, 
    category: 'Strategy',
    description: 'Deep-learning script generation to refine creative vision.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: 'audio', 
    name: 'Spatial Audio Design', 
    price: 3000, 
    category: 'Sound',
    description: 'Immersive 3D soundscapes for exhibition environments.',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800'
  },
];

const Quoting: React.FC = () => {
  const { t } = useLanguage();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState(12000);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedServices.reduce((sum, id) => {
    const service = servicesList.find(s => s.id === id);
    return sum + (service?.price || 0);
  }, 0);

  

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen pb-40">
      <main className="pt-12 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-grow space-y-12">
          <header className="max-w-2xl mb-16">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl font-headline font-extrabold mb-4 text-primary tracking-tighter leading-[0.9] uppercase"
            >
              {t('quoting.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-on-surface-variant font-headline italic"
            >
              {t('quoting.desc')}
            </motion.p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {servicesList.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                onClick={() => toggleService(service.id)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer border transition-all duration-500 min-h-[350px] flex flex-col justify-end p-8 ${
                  selectedServices.includes(service.id) 
                  ? 'border-primary shadow-[0_0_40px_rgba(255,77,129,0.2)] bg-primary/5' 
                  : 'border-white/5 bg-surface-container hover:bg-surface-container-high'
                }`}
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    className={`w-full h-full object-cover transition-all duration-700 ${selectedServices.includes(service.id) ? 'opacity-40 scale-110' : 'opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40'}`} 
                    src={service.image} 
                    alt={service.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-2 block">{service.category}</span>
                      <h3 className="text-3xl font-headline font-bold text-on-surface uppercase tracking-tighter">{service.name}</h3>
                    </div>
                    <AnimatePresence>
                      {selectedServices.includes(service.id) && (
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="material-symbols-outlined text-primary"
                        >
                          check_circle
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="text-on-surface-variant text-sm mb-6 max-w-xs font-light">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-headline font-bold text-on-surface">${service.price.toLocaleString()}</span>
                    <button className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      selectedServices.includes(service.id) ? 'bg-primary text-on-primary' : 'border border-outline-variant hover:border-primary text-on-surface'
                    }`}>
                      {selectedServices.includes(service.id) ? 'Selected' : 'Add to Spec'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <aside className="w-full lg:w-[450px] shrink-0 lg:sticky lg:top-24 h-fit">
          <motion.div 
            layout
            className="liquid-glass p-10 rounded-3xl border border-white/5 shadow-2xl space-y-10"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-headline font-black uppercase tracking-tighter italic">{t('quoting.build_title')}</h2>
              <div className="flex gap-2">
                {selectedServices.length > 0 && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse"
                  >
                    Live
                  </motion.span>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                  <span>{t('quoting.budget_label')}</span>
                  <span className="text-primary font-black text-sm">${budget.toLocaleString()}</span>
                </div>
                <div className="relative h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(totalPrice / budget) * 100}%` }}
                    className={`absolute top-0 left-0 h-full transition-colors duration-500 ${totalPrice > budget ? 'bg-error' : 'bg-primary'}`}
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="30000" 
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-1.5 opacity-0 absolute cursor-pointer"
                />
              </div>

              <div className="pt-8 border-t border-white/5 space-y-6">
                <AnimatePresence mode="popLayout">
                  {selectedServices.length === 0 ? (
                    <motion.p 
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-on-surface-variant text-sm italic text-center py-8"
                    >
                      No services added to the hunt yet.
                    </motion.p>
                  ) : (
                    <div className="space-y-4">
                      {selectedServices.map(id => {
                        const s = servicesList.find(item => item.id === id);
                        return (
                          <motion.div 
                            key={id}
                            layout
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex justify-between items-center group"
                          >
                            <div className="flex flex-col">
                              <span className="text-[10px] text-primary uppercase font-black tracking-widest">{s?.category}</span>
                              <span className="text-sm font-bold uppercase tracking-tight">{s?.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-sm font-black">${s?.price.toLocaleString()}</span>
                              <button 
                                onClick={() => toggleService(id)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity text-error"
                              >
                                <span className="material-symbols-outlined text-sm">close</span>
                              </button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </AnimatePresence>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex justify-between items-end mb-8">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Total Spec Investment</span>
                      <motion.span 
                        key={totalPrice}
                        initial={{ scale: 1.1, color: '#ff4d81' }}
                        animate={{ scale: 1, color: totalPrice > budget ? '#ffb4ab' : '#f0f0f0' }}
                        className="text-4xl font-headline font-black italic tracking-tighter"
                      >
                        ${totalPrice.toLocaleString()}.00
                      </motion.span>
                    </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={selectedServices.length === 0}
                    className={`w-full py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-2xl transition-all ${
                      totalPrice > budget 
                      ? 'bg-error text-on-error' 
                      : 'bg-on-surface text-background hover:bg-primary hover:text-on-primary'
                    } disabled:opacity-20`}
                  >
                    {totalPrice > budget ? 'Budget Exceeded' : t('quoting.generate_cta')}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-6 bg-surface-container-lowest/50 rounded-2xl border border-white/5 flex gap-4 items-start"
          >
            <span className="material-symbols-outlined text-primary text-sm">info</span>
            <p className="text-[10px] text-on-surface-variant leading-relaxed uppercase font-bold tracking-widest">
              Quotes generated in The Vault are valid for 7 days. Elite execution depends on talent availability within the pride.
            </p>
          </motion.div>
        </aside>
      </main>
    </div>
  );
};

export default Quoting;
