import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Prototype() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, title: "Agencia Alpha", type: "AGENCY" },
    { id: 2, title: "Cliente Beta", type: "CLIENT" },
    { id: 3, title: "Campaña Summer", type: "PROJECT" },
    { id: 4, title: "Video Master v1", type: "DELIVERABLE" },
  ];

  return (
    <main className="min-h-screen bg-background text-on-background p-8 md:p-16 lg:p-24">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <header className="text-center space-y-4">
          <h1 className="font-headline text-5xl text-primary font-black uppercase tracking-tighter">
            Dynamic Prototype
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
            Prototipo interactivo del flujo de revisión y aprobación.
          </p>
        </header>

        <div className="liquid-glass p-8 rounded-3xl border border-white/5 relative overflow-hidden min-h-[600px] flex items-center justify-center">
          
          <div className="absolute inset-0 z-0 opacity-20">
             {/* Decorative grid */}
             <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(var(--color-outline-variant) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>

          <div className="relative z-10 flex gap-8">
            {nodes.map((node) => (
              <motion.div 
                key={node.id}
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                className={`w-48 h-48 rounded-2xl border cursor-pointer flex flex-col items-center justify-center p-6 text-center transition-colors ${
                  activeNode === node.id 
                    ? 'bg-primary/20 border-primary shadow-[0_0_30px_rgba(255,77,129,0.3)]' 
                    : 'bg-surface-container-high border-outline/20 hover:border-outline'
                }`}
              >
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-4">{node.type}</span>
                <span className="font-headline text-lg font-bold">{node.title}</span>
                
                {activeNode === node.id && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span className="material-symbols-outlined text-sm text-on-primary">forum</span>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </main>
  );
}
