import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const AnimationLab: React.FC = () => {
  const { theme } = useTheme();
  const [currentAnim, setCurrentAnim] = useState<any>(null);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const synthesizeMotion = async (concept: string) => {
    setIsSynthesizing(true);
    try {
      const response = await fetch('http://localhost:3001/api/generate-animation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ concept, style: theme })
      });
      const data = await response.json();
      setCurrentAnim(data.animation);
    } catch (error) {
      console.error("Motion synthesis failed");
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen p-12">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="text-center space-y-4">
          <h2 className="text-5xl font-headline font-black uppercase italic tracking-tighter text-primary">Motion Synth Lab</h2>
          <p className="text-on-surface-variant uppercase tracking-[0.3em] text-[10px] font-black">AI-Generated Animation Logic Engine</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="space-y-8">
            <div className="liquid-glass p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary">Synthesis Parameters</h3>
              <div className="grid grid-cols-1 gap-4">
                {['Fluid', 'Mechanical', 'Loop', 'Aggressive'].map((concept) => (
                  <button 
                    key={concept}
                    onClick={() => synthesizeMotion(concept.toLowerCase())}
                    disabled={isSynthesizing}
                    className="w-full py-4 rounded-xl border border-white/10 hover:border-primary/50 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-primary/5 disabled:opacity-20"
                  >
                    {concept}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Canvas */}
          <div className="aspect-square bg-surface-container rounded-[3rem] border border-white/5 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 noise-overlay opacity-20" />
            
            <AnimatePresence mode="wait">
              {isSynthesizing ? (
                <motion.div 
                  key="loader"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="text-[10px] font-black uppercase tracking-widest animate-pulse">Calculating Vectors...</span>
                </motion.div>
              ) : (
                <motion.div
                  key="target"
                  {...(currentAnim || {
                    initial: { opacity: 0, scale: 0.5 },
                    animate: { opacity: 1, scale: 1 }
                  })}
                  className="w-48 h-48 bg-gradient-to-tr from-primary to-primary-container rounded-3xl shadow-2xl flex items-center justify-center cursor-pointer"
                >
                  <span className="material-symbols-outlined text-on-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {theme === 'obsidian' ? 'bolt' : 'auto_awesome'}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            
            {currentAnim && (
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <pre className="text-[8px] font-mono text-primary/70 overflow-hidden">
                  {JSON.stringify(currentAnim, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationLab;
