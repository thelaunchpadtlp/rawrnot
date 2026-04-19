import { useState } from 'react';

export default function TheArchitect() {
  const [activeTab, setActiveTab] = useState('mcp');

  return (
    <div className="universal-container py-12 md:py-24 animate-fade-in flex flex-col md:flex-row gap-12">
      
      {/* Sidebar Navigation */}
      <aside className="md:w-64 shrink-0 space-y-2">
        <div className="mb-8">
          <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-2">Meta-Console</p>
          <h1 className="font-headline text-3xl text-on-background">The Architect</h1>
        </div>

        <button 
          onClick={() => setActiveTab('mcp')}
          className={`w-full text-left px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-widest transition-all ${activeTab === 'mcp' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-on-background/60 hover:bg-surface-container-high'}`}
        >
          IA & Storage Gateway
        </button>
        <button 
          onClick={() => setActiveTab('forms')}
          className={`w-full text-left px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-widest transition-all ${activeTab === 'forms' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-on-background/60 hover:bg-surface-container-high'}`}
        >
          Formularios Apex
        </button>
        <button 
          onClick={() => setActiveTab('ledger')}
          className={`w-full text-left px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-widest transition-all ${activeTab === 'ledger' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-on-background/60 hover:bg-surface-container-high'}`}
        >
          Ventas & OCR (SINPE)
        </button>
      </aside>

      {/* Main Panel Area */}
      <div className="flex-1">
        <div className="liquid-glass rounded-3xl p-8 ambient-shadow min-h-[600px]">
          
          {activeTab === 'mcp' && (
            <div className="space-y-8 animate-fade-in">
              <header className="border-b border-outline-variant/30 pb-6">
                <h2 className="font-headline text-2xl mb-2 text-on-background">Protocolo de Integración Híbrida</h2>
                <p className="font-body text-sm text-on-background/70">Estado de los motores de IA y Almacenamiento en Google Cloud.</p>
              </header>

              <div className="grid gap-6">
                <div className="bg-surface-container-low border border-outline/20 p-6 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                    <div>
                      <h3 className="font-headline text-xl text-on-background">Google Gemini 1.5 Flash</h3>
                      <p className="font-mono text-[10px] text-on-background/50 uppercase tracking-widest">IA Cognitiva de Respaldo (OCR & Análisis)</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono text-[10px] uppercase tracking-widest">
                    Listo para Token
                  </div>
                </div>

                <div className="bg-surface-container-low border border-outline/20 p-6 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">cloud_queue</span>
                    <div>
                      <h3 className="font-headline text-xl text-on-background">Google Drive API (v3)</h3>
                      <p className="font-mono text-[10px] text-on-background/50 uppercase tracking-widest">Almacenamiento de Contratos & Recibos</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono text-[10px] uppercase tracking-widest">
                    Integración Activa
                  </div>
                </div>

                <div className="bg-surface-container-low border border-outline/20 p-6 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
                    <div>
                      <h3 className="font-headline text-xl text-on-background">Tesseract OCR (Local)</h3>
                      <p className="font-mono text-[10px] text-on-background/50 uppercase tracking-widest">Motor de Visión Interno (Costo $0)</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 font-mono text-[10px] uppercase tracking-widest">
                    Online
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'forms' && (
            <div className="space-y-8 animate-fade-in">
              <header className="border-b border-outline-variant/30 pb-6">
                <h2 className="font-headline text-2xl mb-2 text-on-background">Refinamiento de Formularios</h2>
                <p className="font-body text-sm text-on-background/70">Diseño de campos para la toma de requerimientos B2B.</p>
              </header>

              <div className="space-y-6">
                <div className="bg-surface-container-high p-6 rounded-2xl border border-primary/10">
                  <h3 className="font-headline text-lg mb-4 text-primary">Initial Inquiry (Lead Intake)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline/10">
                      <p className="text-xs font-mono text-on-background/50 uppercase mb-1">Campo 1</p>
                      <p className="font-body text-sm">Nombre de la Marca / Empresa</p>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline/10">
                      <p className="text-xs font-mono text-on-background/50 uppercase mb-1">Campo 2</p>
                      <p className="font-body text-sm">Email de Decisor (CEO/Director)</p>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline/10">
                      <p className="text-xs font-mono text-on-background/50 uppercase mb-1">Campo 3</p>
                      <p className="font-body text-sm">Visión Cinematográfica (Textarea)</p>
                    </div>
                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline/10">
                      <p className="text-xs font-mono text-on-background/50 uppercase mb-1">Campo 4</p>
                      <p className="font-body text-sm">Presupuesto Objetivo ($)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ledger' && (
            <div className="space-y-8 animate-fade-in">
              <header className="border-b border-outline-variant/30 pb-6">
                <h2 className="font-headline text-2xl mb-2 text-on-background">Libro Mayor de Transacciones</h2>
                <p className="font-body text-sm text-on-background/70">Aprobación humana de procesos asistidos por IA.</p>
              </header>

              <div className="bg-surface-container-low border border-outline/10 p-6 rounded-2xl">
                 <div className="flex justify-between items-center opacity-50 italic font-body text-sm">
                    Esperando transacciones de SINPE o Transferencias Bancarias...
                 </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
