import React, { useState } from 'react';

export default function TheArchitect() {
  const [activeTab, setActiveTab] = useState('mcp');

  return (
    <div className="universal-container py-12 md:py-24 animate-fade-in flex flex-col md:flex-row gap-12">
      
      {/* Sidebar Navigation */}
      <aside className="md:w-64 shrink-0 space-y-2">
        <div className="mb-8">
          <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-2">Meta-Console</p>
          <h1 className="font-headline text-3xl">The Architect</h1>
        </div>

        <button 
          onClick={() => setActiveTab('mcp')}
          className={`w-full text-left px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-widest transition-all ${activeTab === 'mcp' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-on-background/60 hover:bg-surface-container-high'}`}
        >
          MCP / AI Gateway
        </button>
        <button 
          onClick={() => setActiveTab('forms')}
          className={`w-full text-left px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-widest transition-all ${activeTab === 'forms' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-on-background/60 hover:bg-surface-container-high'}`}
        >
          Smart Forms Builder
        </button>
        <button 
          onClick={() => setActiveTab('cms')}
          className={`w-full text-left px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-widest transition-all ${activeTab === 'cms' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-on-background/60 hover:bg-surface-container-high'}`}
        >
          CMS Payload Editor
        </button>
        <button 
          onClick={() => setActiveTab('ledger')}
          className={`w-full text-left px-4 py-3 rounded-xl font-mono text-xs uppercase tracking-widest transition-all ${activeTab === 'ledger' ? 'bg-primary/10 text-primary border border-primary/20' : 'text-on-background/60 hover:bg-surface-container-high'}`}
        >
          System Ledger (CRM)
        </button>
      </aside>

      {/* Main Panel Area */}
      <div className="flex-1">
        <div className="liquid-glass rounded-3xl p-8 ambient-shadow min-h-[600px]">
          
          {activeTab === 'mcp' && (
            <div className="space-y-8 animate-fade-in">
              <header className="border-b border-outline-variant/30 pb-6">
                <h2 className="font-headline text-2xl mb-2 text-on-background">Model Context Protocol (MCP) Orchestrator</h2>
                <p className="font-body text-sm text-on-background/70">Gestiona las herramientas auto-alojadas expuestas a tus Agentes de IA.</p>
              </header>

              <div className="grid gap-4">
                <div className="bg-surface-container-low border border-outline/20 p-6 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-headline text-xl text-primary">n8n (Workflows)</h3>
                    <p className="font-mono text-xs text-on-background/50 mt-1">Endpoint: /api/mcp/tools/n8n_trigger_workflow</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 font-mono text-[10px] uppercase tracking-widest">
                    Online
                  </div>
                </div>

                <div className="bg-surface-container-low border border-outline/20 p-6 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-headline text-xl text-primary">Formbricks (Surveys)</h3>
                    <p className="font-mono text-xs text-on-background/50 mt-1">Endpoint: /api/mcp/tools/formbricks_create_survey</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 font-mono text-[10px] uppercase tracking-widest">
                    Online
                  </div>
                </div>

                <div className="bg-surface-container-lowest border border-dashed border-outline/30 p-6 rounded-xl flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                  <p className="font-mono text-sm text-on-background/50 flex items-center gap-2">
                    <span className="material-symbols-outlined">add_circle</span> Añadir Nueva Herramienta MCP
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'forms' && (
            <div className="space-y-8 animate-fade-in">
              <header className="border-b border-outline-variant/30 pb-6">
                <h2 className="font-headline text-2xl mb-2 text-on-background">Smart Forms Builder</h2>
                <p className="font-body text-sm text-on-background/70">Arquitectura de recolección de datos (Reemplazo local de Typeform).</p>
              </header>

              <div className="bg-surface-container border border-outline/20 p-6 rounded-xl space-y-4">
                <h3 className="font-headline text-lg">Initial Inquiry Form</h3>
                <div className="bg-surface-container-lowest p-4 rounded-lg font-mono text-xs text-on-background/70 overflow-x-auto">
                  <pre>
{`[
  { "id": "name", "type": "text", "label": "Full Name", "required": true },
  { "id": "email", "type": "email", "label": "Email Address", "required": true },
  { "id": "interest", "type": "select", "options": ["Cinematic Shoot", "Editorial Core"] }
]`}
                  </pre>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-primary text-on-primary font-mono text-[10px] uppercase tracking-widest rounded shadow">Editar Schema (JSON)</button>
                  <button className="px-4 py-2 bg-surface-bright text-on-background border border-outline/20 font-mono text-[10px] uppercase tracking-widest rounded shadow">Constructor Visual</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ledger' && (
            <div className="space-y-8 animate-fade-in">
              <header className="border-b border-outline-variant/30 pb-6">
                <h2 className="font-headline text-2xl mb-2 text-on-background">System Ledger (CRM & Pagos)</h2>
                <p className="font-body text-sm text-on-background/70">Revisa las pre-aprobaciones hechas por la IA y da el visto bueno humano.</p>
              </header>

              <div className="bg-surface-container border border-outline/20 p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-start border-b border-outline/10 pb-4">
                  <div>
                    <h3 className="font-headline text-lg">Orden #8A4F-92C1</h3>
                    <p className="font-mono text-xs text-on-background/50">Servicio: Editorial Core | Monto: 85,000 ₡</p>
                    <p className="font-mono text-xs text-on-background/50 mt-1">Status OCR (IA): <span className="text-green-500">PRE_APPROVED</span></p>
                  </div>
                  <div className="text-right">
                    <button className="px-6 py-2 bg-primary text-on-primary font-headline text-lg rounded-xl shadow hover:brightness-110 active:scale-95 transition-all mb-2 w-full">
                      Aprobar (Release Portal)
                    </button>
                    <a href="#" className="font-mono text-[10px] text-primary uppercase underline">Ver Comprobante PDF</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cms' && (
             <div className="space-y-8 animate-fade-in">
             <header className="border-b border-outline-variant/30 pb-6">
               <h2 className="font-headline text-2xl mb-2 text-on-background">Headless CMS Editor</h2>
               <p className="font-body text-sm text-on-background/70">Inyecta y modifica los payloads JSON de The Journal y Portfolio.</p>
             </header>
             <p className="font-mono text-sm text-on-background/60 italic text-center mt-12">Select a Component Block to edit its payload...</p>
           </div>
          )}

        </div>
      </div>
    </div>
  );
}
