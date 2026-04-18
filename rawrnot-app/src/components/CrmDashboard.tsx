import React from 'react';

const CrmDashboard: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 min-h-screen pb-32">
      <main className="pt-12 px-6 max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl font-headline font-bold tracking-tighter text-on-background mb-2">Obsidian Prime</h2>
            <p className="text-on-surface-variant font-light tracking-wide uppercase text-sm">Active Project Portfolio • Q4 2024</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gradient-to-tr from-primary to-primary-container text-on-primary-fixed font-medium px-8 py-3 rounded-full shadow-lg shadow-primary/10 hover:scale-105 active:scale-95 duration-300">
              New Initiative
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Project Status Tracking (Large) */}
          <div className="col-span-12 md:col-span-8 liquid-glass p-8 rounded-xl min-h-[400px] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-headline font-semibold italic text-primary">Live Pulse</h3>
                <div className="flex -space-x-3">
                  <img 
                    className="w-8 h-8 rounded-full border-2 border-surface" 
                    alt="team member"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBimQe3KVP0_-Sl4ibiQf0vzk9kQaPxhjIHQWBy8rC3HVTOTrfH49dS2VLaEnZ2yMovNlIz9UnDvpiACu70ScVMhUAUB73E7m8pcIk490DawXwHfV_V4KMJ6VF8DeBbdQkRp80Fvc5-mxkJfNcpGVBiHai182mcVt7f2RdLUNUv2VMQlaWyFK22ougpZFqO01eZd1YvTcAEycIX1gP9RAgffdlyFr8jKgMfCbWD3StfJlkKjhMn2OHAQDpOofQeg0mCOOvj5ra_jTI" 
                  />
                  <img 
                    className="w-8 h-8 rounded-full border-2 border-surface" 
                    alt="team member"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO4TPnuAlHFhxubVy3jLeXj3wLo-W5EGF_ohEMpfdWyzhsyoB9a_USj33bTWEeQ_7TNYhVuOGVSAWpzWxIrO4kSpt0_kIQa1ruAEZdf0wfAGs4QiB892Rp04V-ZIKmyyboANXFxbcAaY9MLmA8s-_F5noVFW9raH4OQ6SWj6H-30TW4hD91DQZC1ev17p2x_qywl6aZOPXDSSOX1yxFfkeB4vzEK3lAH4bLS_AmOvdU1NXYkpDKeA6Kjo4FdwBkUxYhusdSHDbHSk" 
                  />
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center text-[10px] text-on-surface-variant">+4</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-headline italic text-xl">Project: Golden Mane Rebrand</span>
                    <span className="text-primary text-sm font-medium">84% Complete</span>
                  </div>
                  <div className="h-[2px] w-full bg-surface-container-highest overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-tertiary w-[84%] transition-all duration-1000"></div>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-headline italic text-xl">Apex Commerce Engine</span>
                    <span className="text-on-surface-variant text-sm font-medium">32% Complete</span>
                  </div>
                  <div className="h-[2px] w-full bg-surface-container-highest overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-tertiary w-[32%] transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Total Assets</span>
                <span className="text-2xl font-headline font-bold">1,204</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Open Tickets</span>
                <span className="text-2xl font-headline font-bold text-error">12</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Client Health</span>
                <span className="text-2xl font-headline font-bold text-primary">Elite</span>
              </div>
            </div>
          </div>

          {/* Lion Status Icons / Quick Actions (Vertical) */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
            <div className="liquid-glass p-6 rounded-xl flex-1 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
              <h4 className="text-lg font-headline italic">The Pride Network</h4>
              <p className="text-sm text-on-surface-variant px-4">Instant communication with elite contributors.</p>
            </div>
            <div className="liquid-glass p-6 rounded-xl flex-1 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-4xl text-tertiary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              <h4 className="text-lg font-headline italic">Secure Vault</h4>
              <p className="text-sm text-on-surface-variant px-4">Tier-1 encrypted asset storage and delivery.</p>
            </div>
          </div>

          {/* Document Storage / Content Snare (Horizontal Wide) */}
          <div className="col-span-12 lg:col-span-7 bg-surface-container-low rounded-xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-headline font-semibold">Document Pipeline</h3>
                  <p className="text-sm text-on-surface-variant font-light">Awaiting client signature for 3 modules</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">folder_open</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-5 rounded-lg border-l-4 border-primary flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-container">description</span>
                    <div>
                      <p className="text-sm font-medium">Brand Guidelines.pdf</p>
                      <p className="text-xs text-on-surface-variant">Due in 2 days</p>
                    </div>
                  </div>
                  <button className="text-xs text-primary uppercase font-bold tracking-tighter">Sign</button>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg border-l-4 border-tertiary-container flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-tertiary">inventory_2</span>
                    <div>
                      <p className="text-sm font-medium">Style Tile #04</p>
                      <p className="text-xs text-on-surface-variant">Review Required</p>
                    </div>
                  </div>
                  <button className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">View</button>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
          </div>

          {/* Upcoming Milestones */}
          <div className="col-span-12 lg:col-span-5 liquid-glass p-8 rounded-xl">
            <h3 className="text-xl font-headline font-semibold mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
              Timeline Apex
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div className="w-[1px] h-full bg-outline-variant mt-2"></div>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Oct 24</p>
                  <h5 className="text-md font-headline italic text-lg">Web Infrastructure Handover</h5>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-tertiary mt-2"></div>
                  <div className="w-[1px] h-full bg-outline-variant mt-2"></div>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Oct 28</p>
                  <h5 className="text-md font-headline italic text-lg">Global PR Launch Event</h5>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-surface-container-highest mt-2"></div>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Nov 02</p>
                  <h5 className="text-md font-headline italic text-lg text-on-surface-variant">Q4 Review & Scaling</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CrmDashboard;
