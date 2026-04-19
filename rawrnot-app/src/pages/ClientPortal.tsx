
function ClientPortal() {
  return (
    <main className="pb-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-16 mt-16">
      
      {/* Header & Identity */}
      <section className="flex flex-col md:flex-row justify-between items-end border-b-2 border-on-background pb-8 gap-6">
        <div>
          <div className="inline-block border border-outline px-3 py-1 rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] bg-surface-container-high mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">B2B Partner</span>
          </div>
          <h1 className="font-headline text-5xl text-on-background">The Vault</h1>
          <p className="font-mono text-sm text-on-surface-variant uppercase tracking-widest mt-2">ID: CL-8842-AX</p>
        </div>
        
        {/* Treasury: Rawrs & Balance */}
        <div className="bg-surface-bright p-6 rounded-sm ghost-border flex items-center gap-8 shadow-inner">
          <div>
            <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider mb-1">Treasury Balance</p>
            <p className="font-headline text-3xl text-primary">120 <span className="text-sm font-body italic opacity-60">Rawrs</span></p>
          </div>
          <button className="bg-on-background text-background font-headline py-2 px-6 rounded-sm shadow-[inset_0_-2px_0_rgba(0,0,0,0.5)] hover:bg-surface-container-highest transition-all active:translate-y-px">
            Acquire Tokens
          </button>
        </div>
      </section>

      {/* Active Projects & Briefs */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Active Ledger */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-headline text-3xl text-on-background flex items-center gap-4">
            <span className="w-6 h-px bg-outline-variant"></span>
            Active Ledger
          </h2>
          
          {/* Project Item */}
          <div className="bg-surface-container-high p-6 rounded-sm ghost-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary mb-1 block">In Production</span>
              <h3 className="font-headline text-2xl text-on-background">Autumn Campaign '26</h3>
              <p className="font-body text-sm text-on-surface-variant mt-2">Awaiting final color grade review.</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none border border-outline text-on-surface py-2 px-6 rounded-sm font-body text-sm hover:bg-surface-bright transition-colors">
                View Brief
              </button>
              <button className="flex-1 md:flex-none bg-primary text-on-primary py-2 px-6 rounded-sm font-body text-sm hover:opacity-90 transition-opacity">
                Review Assets
              </button>
            </div>
          </div>

        </div>

        {/* Financial & Document History */}
        <div className="space-y-6">
           <h2 className="font-headline text-3xl text-on-background flex items-center gap-4">
            <span className="w-6 h-px bg-outline-variant"></span>
            Archives
          </h2>
          <div className="bg-surface-container-low p-6 rounded-sm border border-outline-variant shadow-inner space-y-4">
            {/* Invoice Item */}
            <div className="flex justify-between items-center border-b border-outline/30 pb-3">
              <div>
                <p className="font-headline text-lg">Invoice #INV-042</p>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase">SINPE • Validated</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">download</span>
            </div>
            {/* Invoice Item */}
            <div className="flex justify-between items-center pt-1">
              <div>
                <p className="font-headline text-lg">Contract #CNT-011</p>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase">Signed • Aug 14</p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">download</span>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}

export default ClientPortal;
