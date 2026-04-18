import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Service {
  id: string;
  name: string;
  price: number;
}

const servicesList: Service[] = [
  { id: 'film', name: 'High-End Film Execution', price: 5000 },
  { id: 'photo', name: 'Editorial Photography', price: 2400 },
  { id: 'ai', name: 'AI Narrative Synth', price: 1500 },
  { id: 'audio', name: 'Spatial Audio Design', price: 3000 },
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
      <main className="pt-12 px-6 max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-grow space-y-12">
          <header className="max-w-2xl mb-16">
            <h1 className="text-6xl font-headline font-extrabold mb-4 text-primary tracking-[-0.04em] leading-[0.9] uppercase">
              {t('quoting.title')}
            </h1>
            <p className="text-lg text-on-surface-variant font-headline italic">
              {t('quoting.desc')}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Film Service */}
            <div className="col-span-1 md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high transition-all duration-500 hover:bg-surface-bright ghost-border min-h-[400px]">
              <div className="aspect-[16/9] w-full relative h-full">
                <img 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${selectedServices.includes('film') ? 'opacity-80 scale-105' : 'opacity-40 grayscale group-hover:grayscale-0'}`} 
                  alt="Film"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGQbk5ZkJFuvQLuva-3wBo12VKRcXHYfVlNQstq9RGShBWsdkX3uzCcbNI3p5KHk6aMKgdC9G2AksLCSrlnxvblD8D1YXm0vxthJ8ahYTGtb1klLt_2AUlR0brFzBmPUK0ohDE7DMeK_wFq0jTPqBRplNQmLS7O-vEIAtpsIzdCS86PUC_uZEFq5NpmiiYVd2uPb1xB2G1IjtUcyHL-u2AvUOsTGziMUbUAd5MaOkUt3nGf1wXE43lB6VpYuWNk3-rj4X0dyJY4jU" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block">Cinematography</span>
                    <h3 className="text-4xl font-headline font-bold text-on-surface mb-2">High-End Film Execution</h3>
                    <p className="text-on-surface-variant max-w-md text-sm">8K Raw capture, color grading, and anamorphic aesthetics for elite visual storytelling.</p>
                  </div>
                  <button 
                    onClick={() => toggleService('film')}
                    className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all whitespace-nowrap text-xs ${selectedServices.includes('film') ? 'bg-primary text-on-primary' : 'bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed hover:opacity-90 active:scale-95'}`}
                  >
                    {selectedServices.includes('film') ? 'Added to Spec' : 'Add to Spec'}
                  </button>
                </div>
              </div>
            </div>

            {/* Photo Service */}
            <div className={`col-span-1 md:col-span-4 group min-h-[400px] flex flex-col justify-between p-8 rounded-xl ghost-border transition-colors cursor-pointer ${selectedServices.includes('photo') ? 'bg-primary/10 border-primary' : 'bg-surface-container-low hover:bg-surface-container-high'}`}
                 onClick={() => toggleService('photo')}>
              <div className="mb-6">
                <span className={`material-symbols-outlined text-4xl mb-4 transition-colors ${selectedServices.includes('photo') ? 'text-primary' : 'text-on-surface-variant'}`} style={{ fontVariationSettings: "'FILL' 1" }}>camera</span>
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Editorial Photography</h3>
                <p className="text-sm text-on-surface-variant">Sharp, precision-focused imagery with high-dynamic range for brand identities.</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary">$2,400 <span className="text-xs text-on-surface-variant font-normal">/day</span></span>
                <div className={`p-2 border rounded-full transition-all ${selectedServices.includes('photo') ? 'bg-primary text-on-primary border-primary' : 'border-outline-variant hover:bg-primary hover:text-on-primary'}`}>
                  <span className="material-symbols-outlined text-sm">{selectedServices.includes('photo') ? 'check' : 'add'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-24 h-fit space-y-6">
          <div className="liquid-glass p-8 rounded-xl border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-headline font-bold">{t('quoting.build_title')}</h2>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {selectedServices.length > 0 ? 'Active' : 'Drafting'}
              </span>
            </div>

            <div className="space-y-10 mb-10">
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  <span>{t('quoting.budget_label')}</span>
                  <span className="text-primary">${budget.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="50000" 
                  step="1000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-surface-container-lowest rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>
              
              <div className="space-y-4 pt-6 border-t border-outline-variant/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Active Services ({selectedServices.length})</span>
                  <span className="text-on-surface font-bold text-lg">${totalPrice.toLocaleString()}.00</span>
                </div>
                <div className="space-y-2">
                  {selectedServices.map(id => {
                    const s = servicesList.find(item => item.id === id);
                    return (
                      <div key={id} className="flex justify-between text-[10px] text-primary uppercase font-bold tracking-tighter">
                        <span>{s?.name}</span>
                        <span>${s?.price.toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
                <button 
                  disabled={selectedServices.length === 0}
                  className="w-full bg-on-surface text-background font-bold py-4 rounded-full hover:scale-[1.02] active:scale-98 transition-all disabled:opacity-50 text-xs uppercase tracking-widest"
                >
                  {t('quoting.generate_cta')}
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Quoting;
