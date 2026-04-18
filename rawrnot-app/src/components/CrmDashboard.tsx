import React from 'react';
import { motion } from 'framer-motion';

const CrmDashboard: React.FC = () => {
  

  const projects = [
    { name: 'Golden Mane Rebrand', progress: 84, status: 'Active', color: '#ff4d81' },
    { name: 'Apex Commerce Engine', progress: 32, status: 'Review', color: '#c084fc' },
    { name: 'Nocturnal Synthesis', progress: 100, status: 'Complete', color: '#4ade80' }
  ];

  return (
    <div className="bg-background text-on-background font-body min-h-screen pb-32">
      <main className="pt-12 px-6 max-w-7xl mx-auto space-y-12">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl font-headline font-black uppercase tracking-tighter italic text-primary"
            >
              Obsidian Prime
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-on-surface-variant font-black tracking-[0.3em] uppercase text-[10px] mt-2"
            >
              Command Center // Active Spec Tracking
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-on-primary font-black uppercase tracking-widest px-8 py-4 rounded-full text-[10px] shadow-2xl shadow-primary/20"
          >
            Launch New Spec
          </motion.button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Main Pulse Tracker */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-span-8 liquid-glass p-10 rounded-3xl space-y-12"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-headline font-black uppercase italic tracking-tighter">Live Pulse</h3>
              <div className="flex -space-x-4">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
                ].map((src, i) => (
                  <motion.img 
                    key={i}
                    whileHover={{ y: -5, zIndex: 10 }}
                    src={src} 
                    className="w-10 h-10 rounded-full border-2 border-background object-cover cursor-pointer"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-background flex items-center justify-center text-[10px] font-black">+4</div>
              </div>
            </div>

            <div className="space-y-10">
              {projects.map((project, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-headline text-2xl uppercase font-black italic tracking-tighter">{project.name}</span>
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest">{project.progress}% Complete</span>
                  </div>
                  <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_15px_rgba(255,77,129,0.3)]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
              {[
                { label: 'Total Assets', value: '1,204' },
                { label: 'Open Tickets', value: '12', color: 'text-error' },
                { label: 'Hunt Health', value: 'Elite', color: 'text-primary' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">{stat.label}</span>
                  <span className={`text-4xl font-headline font-black italic tracking-tighter ${stat.color || 'text-on-surface'}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex-1 bg-surface-container-high p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center space-y-6"
            >
              <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
              <h4 className="text-2xl font-headline font-black uppercase italic tracking-tighter">The Pride Network</h4>
              <p className="text-on-surface-variant text-sm font-light">Instant communication with elite contributors.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex-1 bg-surface-container-high p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center space-y-6"
            >
              <span className="material-symbols-outlined text-5xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              <h4 className="text-2xl font-headline font-black uppercase italic tracking-tighter">Secure Vault</h4>
              <p className="text-on-surface-variant text-sm font-light">Tier-1 encrypted asset delivery.</p>
            </motion.div>
          </div>

          {/* Document Pipeline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="col-span-12 bg-surface-container-low p-10 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            <div className="relative z-10 space-y-10">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-3xl font-headline font-black uppercase italic tracking-tighter">Document Pipeline</h3>
                  <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest mt-2">Awaiting client signature for 3 modules</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">folder_special</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Brand Guidelines.pdf', status: 'Due in 2 days', tag: 'High' },
                  { name: 'Style Tile #04', status: 'Review Required', tag: 'Spec' },
                  { name: 'Motion Logic', status: 'Signature Pending', tag: 'Core' }
                ].map((doc, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-background/40 p-6 rounded-2xl border border-white/5 flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined text-sm">description</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-tight">{doc.name}</p>
                        <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mt-1">{doc.status}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CrmDashboard;
