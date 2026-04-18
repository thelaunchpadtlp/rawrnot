import React from 'react';
import { GlassCard, LiquidCard, BentoGrid, PrimaryButton, SecondaryButton } from '../components/MolecularComponents';

const NexusHub: React.FC = () => {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto space-y-24">
      {/* Hero Section: Editorial Tension */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
        <div className="lg:col-span-5 z-10 space-y-6">
          <p className="font-body text-primary tracking-widest uppercase text-sm font-semibold">Command Center</p>
          <h1 className="font-headline text-5xl md:text-[3.5rem] leading-tight text-on-background">
            The Definitive <br/><span className="text-gradient-primary italic font-light">Nexus Hub</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-md">
            Orchestrate raw power. Elite technical execution meets untamed creative instinct. Welcome to the Apex.
          </p>
          <div className="pt-4">
            <PrimaryButton>
              <span>Initialize Protocol</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </PrimaryButton>
          </div>
        </div>
        <div className="lg:col-span-8 lg:-ml-12 relative">
          <LiquidCard className="p-4 overflow-hidden aspect-[16/9]">
            <img 
              alt="Abstract tech visualization" 
              className="w-full h-full object-cover rounded-xl opacity-80 mix-blend-screen" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxw7TrxGBLiH61QlxoXy04gtIstnZj6i0sbPuMexEDS0L5mQ7f7WD9RRdAJCpSuITzcsKIS5gWiqvopwI9XUEX8DAheLIspAaq5h4Ingq0wS1gsSVpOHsp7JX0jRhhczRZvE1CDo6NE_VwAyAJ4yWCvDjd4SZHHMKVWpjbwEWXQl0XBijFZ6Zz0gBz9gCHSikgrDxr8EoZ0bWGplMIja9FK0QAC97pHkrPIVLwMSFCF15J_E7FW_psAHoRbvxjj_EzRZCy6yHYK3w" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
          </LiquidCard>
        </div>
      </section>

      {/* Bento Grid: Microservices & Systems */}
      <section className="space-y-8 relative z-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-headline text-[1.75rem] text-on-background">System Diagnostics</h2>
            <p className="font-body text-on-surface-variant text-sm mt-1">Real-time microservices status</p>
          </div>
          <span className="material-symbols-outlined text-primary cursor-pointer hover:text-primary-container transition-colors">info</span>
        </div>
        
        <BentoGrid>
          {/* Status Card 1: Large */}
          <GlassCard className="md:col-span-2 lg:col-span-2">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">database</span>
            </div>
            <div className="flex items-center space-x-3 mb-6 relative z-10">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <h3 className="font-body text-xl font-semibold text-on-surface">Core Processing</h3>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-on-surface-variant">Latency</span>
                <span className="font-mono text-primary">12ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-on-surface-variant">Throughput</span>
                <span className="font-mono text-primary">8.4k req/s</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mt-4">
                <div className="h-full w-[85%] bg-gradient-primary rounded-full"></div>
              </div>
            </div>
          </GlassCard>

          {/* Status Card 2: Small */}
          <GlassCard className="flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-surface-container-lowest rounded-xl text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">memory</span>
              </div>
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded ghost-border">Stable</span>
            </div>
            <div>
              <h3 className="font-body text-lg font-medium text-on-surface">Neural Engine</h3>
              <p className="font-body text-xs text-on-surface-variant mt-1">Active node cluster</p>
            </div>
          </GlassCard>

          {/* Status Card 3: Small */}
          <GlassCard className="flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-surface-container-lowest rounded-xl text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">security</span>
              </div>
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded ghost-border">Secured</span>
            </div>
            <div>
              <h3 className="font-body text-lg font-medium text-on-surface">Firewall Protocols</h3>
              <p className="font-body text-xs text-on-surface-variant mt-1">Zero breaches detected</p>
            </div>
          </GlassCard>

          {/* Module Access: Asymmetric Wide Card */}
          <LiquidCard className="md:col-span-3 lg:col-span-4 flex flex-col md:flex-row items-center justify-between gap-6 border border-outline-variant/10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-surface-container-lowest to-surface-container-high flex items-center justify-center ghost-border shadow-inner">
                <span className="material-symbols-outlined text-3xl text-primary">dashboard_customize</span>
              </div>
              <div>
                <h3 className="font-headline text-2xl text-on-background">Module Synthesis</h3>
                <p className="font-body text-sm text-on-surface-variant">Access sub-routines and marketplace extensions.</p>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none py-2 px-6 rounded-full border border-outline-variant text-primary font-body text-sm hover:bg-surface-container-high transition-colors">
                Configure
              </button>
              <SecondaryButton className="flex-1 md:flex-none">
                Launch
              </SecondaryButton>
            </div>
          </LiquidCard>
        </BentoGrid>
      </section>

      {/* Architecture Panel & Feed */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12">
        <div className="lg:col-span-4 bg-surface-container-low rounded-[1.5rem] p-8 ghost-border">
          <h2 className="font-headline text-[1.75rem] text-on-background mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">account_tree</span>
            Architecture
          </h2>
          <ul className="space-y-4 font-body text-sm">
            <li className="flex items-center gap-3 text-primary group cursor-pointer">
              <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">home</span>
              <span className="font-semibold border-b border-primary/30 pb-0.5">Nexus Root</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer pl-6">
              <span className="material-symbols-outlined text-lg">arrow_right</span>
              <span>Identity Access Management</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer pl-6">
              <span className="material-symbols-outlined text-lg">arrow_right</span>
              <span>Data Lake Topology</span>
            </li>
          </ul>
        </div>
        
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-[1.5rem] p-2 relative overflow-hidden ghost-border">
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent z-10 w-1/2"></div>
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <img 
              alt="Liquid Glass interface texture" 
              className="w-full h-full object-cover opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVgFWHRjDWU_TGZRZ0El2FsZDfY8CVQMBeLP4X8xd24Bj0GSx_Mh4LmIB9PyfcZ7lmsllQYolYSRW637uRIKeQEw28iU9Mn0uTHvWMQwqErZC8PMHmA24FD8P-j1pUOPYErV4aCC3SPZnHq-GzTM0kEO6TFNI2s5qOyaPBkRzRVyH6Co53K0AShlpbQ70QBbOdU4luTYbqaOmoGe2OP38b4IBukD2uZ2ndOLopNQKjGRsH6DnLR9BgniNckZONYGe2SgebI0XM-e8" 
            />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full md:w-2/3">
              <span className="inline-block px-3 py-1 bg-surface-variant/60 backdrop-blur-md rounded-full text-xs font-label text-primary mb-3 ghost-border">Active Feed</span>
              <h3 className="font-headline text-2xl text-on-background mb-2">Echo Monitoring</h3>
              <p className="font-body text-sm text-on-surface-variant mb-6 line-clamp-2">Real-time telemetry from external marketplace integrations.</p>
              <button className="bg-transparent border border-outline/20 text-primary rounded-full px-6 py-2 font-body text-sm hover:bg-surface-variant/40 backdrop-blur-md transition-all flex items-center gap-2">
                <span>Open Console</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NexusHub;
