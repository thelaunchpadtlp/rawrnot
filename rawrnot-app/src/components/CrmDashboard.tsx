import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

interface Submission {
  id: string;
  form: { name: string };
  data: string;
  status: string;
  createdAt: string;
}

interface Contract {
  id: string;
  title: string;
  clientEmail: string;
  status: string;
  signedAt?: string;
}

const CrmDashboard: React.FC = () => {
  const { token } = useAuth();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [activeTab, setActiveTab] = useState<'pulse' | 'transmissions' | 'contracts'>('pulse');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

  useEffect(() => {
    if (token) {
      fetchSubmissions();
      fetchContracts();
    }
  }, [token]);

  const fetchSubmissions = async () => {
    try {
      const res = await fetch(`${API_URL}/api/forms/submissions`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) setSubmissions(await res.json());
    } catch (e) { console.error(e); }
  };

  const fetchContracts = async () => {
    try {
      const res = await fetch(`${API_URL}/api/contracts`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) setContracts(await res.json());
    } catch (e) { console.error(e); }
  };

  const projects = [
    { name: 'Golden Mane Rebrand', progress: 84, status: 'Active', color: '#ff4d81' },
    { name: 'Apex Commerce Engine', progress: 32, status: 'Review', color: '#c084fc' },
    { name: 'Nocturnal Synthesis', progress: 100, status: 'Complete', color: '#4ade80' }
  ];

  return (
    <div className="bg-background text-on-background font-body min-h-screen pb-32 relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <img src="/assets/stitch/dashboard.png" className="w-full h-full object-cover" alt="Design Reference" />
      </div>

      <main className="pt-12 px-6 max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl font-headline font-black uppercase tracking-tighter italic text-primary"
            >
              Obsidian Prime
            </motion.h2>
            <div className="flex space-x-6 mt-4">
              {['pulse', 'transmissions', 'contracts'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] pb-2 transition-all ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-on-primary font-black uppercase tracking-widest px-8 py-4 rounded-full text-[10px] shadow-2xl shadow-primary/20"
          >
            Launch New Spec
          </motion.button>
        </div>

        {activeTab === 'pulse' && (
          <div className="grid grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 lg:col-span-8 liquid-glass p-10 rounded-3xl space-y-12"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-headline font-black uppercase italic tracking-tighter">Live Pulse</h3>
                <div className="flexStat -space-x-4">
                  {/* ... (avatars) */}
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
                        className="h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_15px_rgba(255,77,129,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
              <div className="bg-surface-container-high p-8 rounded-3xl border border-white/5 space-y-4">
                <h4 className="font-headline text-xl uppercase italic">Quick Stats</h4>
                <div className="space-y-6">
                   <div>
                     <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Active Leads</p>
                     <p className="text-4xl font-headline font-black text-primary italic">{submissions.length}</p>
                   </div>
                   <div>
                     <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Pending Signatures</p>
                     <p className="text-4xl font-headline font-black text-tertiary italic">{contracts.filter(c => c.status !== 'signed').length}</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'transmissions' && (
          <div className="space-y-6">
            {submissions.map((sub) => (
              <motion.div 
                key={sub.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-surface-container-low p-8 rounded-2xl ghost-border flex justify-between items-center"
              >
                <div>
                  <h4 className="font-headline text-2xl uppercase italic">{sub.form.name}</h4>
                  <p className="font-mono text-xs text-on-surface-variant mt-2">{sub.data}</p>
                </div>
                <div className="text-right">
                   <span className="px-3 py-1 bg-primary/10 text-primary font-mono text-[10px] uppercase rounded-full">{sub.status}</span>
                   <p className="text-[10px] text-on-surface-variant mt-2 uppercase tracking-widest">{new Date(sub.createdAt).toLocaleDateString()}</p>
                </div>
              </motion.div>
            ))}
            {submissions.length === 0 && <div className="p-20 text-center text-on-surface-variant font-mono">No active transmissions in buffer.</div>}
          </div>
        )}

        {activeTab === 'contracts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contracts.map((contract) => (
              <motion.div 
                key={contract.id}
                whileHover={{ y: -5 }}
                className="bg-surface-container-high p-8 rounded-3xl border border-white/5 space-y-6"
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <span className={`font-mono text-[10px] uppercase px-2 py-1 rounded ${contract.status === 'signed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    {contract.status}
                  </span>
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-black uppercase italic tracking-tighter leading-tight">{contract.title}</h4>
                  <p className="text-on-surface-variant text-xs mt-2">{contract.clientEmail}</p>
                </div>
                {contract.signedAt && (
                   <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest pt-4 border-t border-white/5">
                     Authenticated: {new Date(contract.signedAt).toLocaleDateString()}
                   </p>
                )}
              </motion.div>
            ))}
            {contracts.length === 0 && <div className="col-span-full p-20 text-center text-on-surface-variant font-mono">Vault archive empty.</div>}
          </div>
        )}
      </main>
    </div>
  );
};

export default CrmDashboard;
