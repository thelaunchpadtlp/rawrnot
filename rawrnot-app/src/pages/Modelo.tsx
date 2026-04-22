import { motion } from 'framer-motion';

export default function Modelo() {
  return (
    <main className="min-h-screen bg-background text-on-background p-8 md:p-16 lg:p-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <header className="space-y-4 border-b border-outline-variant/20 pb-12">
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-primary">System Architecture</span>
          </div>
          <h1 className="font-headline text-6xl md:text-7xl text-roar text-primary font-black uppercase tracking-tighter">
            The Master Atlas
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Visualización interactiva de la jerarquía de 4 niveles, el sistema de Threads Polimórficos y la integración B2B/B2C.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Jerarquía Data Model */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="liquid-glass p-8 rounded-3xl border border-white/5 space-y-8"
          >
            <h2 className="font-headline text-3xl font-bold border-b border-white/10 pb-4">Data Hierarchy (4-Levels)</h2>
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">domain</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl text-on-background">1. Agencias / Medios</h3>
                  <p className="font-body text-sm text-on-surface-variant">Entidades corporativas de alto nivel. Agrupan múltiples clientes. (Opcional)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pl-8 border-l-2 border-primary/20 ml-6">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-tertiary">person</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg text-on-background">2. Clientes Finales</h3>
                  <p className="font-body text-sm text-on-surface-variant">El solicitante real. Puede ser independiente o pertenecer a una Agencia.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pl-16 border-l-2 border-primary/20 ml-6">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary-container">folder_special</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg text-on-background">3. Proyectos / Contratos</h3>
                  <p className="font-body text-sm text-on-surface-variant">La unidad de trabajo facturable (ej. "Campaña Verano").</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pl-24 border-l-2 border-primary/20 ml-6 relative">
                <div className="absolute -left-[2px] top-1/2 w-4 h-[2px] bg-primary/20"></div>
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm">inventory_2</span>
                </div>
                <div>
                  <h3 className="font-headline text-md text-on-background font-bold">4. Entregables & Piezas</h3>
                  <p className="font-body text-xs text-on-surface-variant mt-1">Incluye Cotizaciones, Contratos y Arte final. Soporta versionado estricto (v1, v2, v3).</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Sistema de Threads */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest p-8 rounded-3xl border border-primary/20 shadow-[0_0_40px_rgba(255,77,129,0.05)] space-y-8"
          >
            <h2 className="font-headline text-3xl font-bold border-b border-primary/10 pb-4 text-primary">Polymorphic Threads</h2>
            
            <div className="p-6 bg-surface-container-high rounded-2xl border border-outline-variant/10 relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Thread Target</span>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded bg-background text-[10px] text-tertiary font-bold">Agencia</span>
                  <span className="px-2 py-1 rounded bg-background text-[10px] text-primary font-bold">Entregable v2</span>
                </div>
              </div>
              <h3 className="font-headline text-xl mb-2 text-on-background">Chat & Revisiones</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                El cliente puede iniciar un "Thread" a cualquier nivel. Los mensajes soportan adjuntos independientes que no se mezclan con el Entregable base.
              </p>
              
              <div className="mt-6 flex gap-3">
                <span className="flex items-center gap-1 text-xs text-on-surface-variant bg-background px-3 py-1 rounded-full"><span className="material-symbols-outlined text-[14px]">archive</span> Archivar</span>
                <span className="flex items-center gap-1 text-xs text-on-surface-variant bg-background px-3 py-1 rounded-full"><span className="material-symbols-outlined text-[14px]">task_alt</span> Finalizar</span>
                <span className="flex items-center gap-1 text-xs text-on-surface-variant bg-background px-3 py-1 rounded-full"><span className="material-symbols-outlined text-[14px]">sell</span> Etiquetar</span>
              </div>
            </div>

            {/* Shadow Profiles */}
            <div className="p-6 bg-gradient-to-br from-surface-container-high to-surface-container-highest rounded-2xl border border-white/5 relative overflow-hidden">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-white/10">
                   <span className="material-symbols-outlined text-on-surface-variant">group_add</span>
                 </div>
                 <h3 className="font-headline text-xl">Fricción Cero (Shadow Profiles)</h3>
               </div>
               <p className="text-sm text-on-surface-variant">
                 Usuarios no registrados que intentan cotizar o escribir solo necesitan un correo/teléfono. El sistema crea un perfil "sombra" para retargeting e incentiva el registro posterior.
               </p>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
