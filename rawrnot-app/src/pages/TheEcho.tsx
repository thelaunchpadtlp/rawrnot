import { useState } from 'react';

export default function TheEcho() {
  const [copied, setCopied] = useState(false);
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://rawrnot.com/echo/tld-core-88x");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="universal-container py-12 md:py-24 animate-fade-in">
      <header className="text-center mb-16 space-y-4">
        <p className="font-mono text-xs text-primary uppercase tracking-[0.2em]">Viral Mechanics</p>
        <h1 className="text-4xl md:text-5xl font-headline font-semibold">The Echo</h1>
        <p className="text-lg text-on-background/70 font-body max-w-2xl mx-auto">
          Desbloquea precios corporativos a través del poder de la red. Invita a 3 empresas más a adquirir "Editorial Core" y todos obtienen un 30% de descuento. (Ley de Reed en acción).
        </p>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="liquid-glass rounded-3xl p-8 ambient-shadow relative overflow-hidden">
          {/* Active Session Indicator */}
          <div className="absolute top-0 right-0 p-6 flex items-center gap-2">
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">Active Node</span>
          </div>

          <h2 className="text-2xl font-headline mb-8 text-on-background">Sesión de Compra Grupal #88X</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-2">Servicio Objetivo</p>
                <p className="font-headline text-2xl">Editorial Core (Magazine Style)</p>
              </div>
              
              <div>
                <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-2">Estado del NODO (2/4)</p>
                <div className="flex gap-2 mb-2">
                  <div className="h-2 flex-1 bg-primary rounded-full shadow-[0_0_10px_rgba(255,178,191,0.5)]"></div>
                  <div className="h-2 flex-1 bg-primary rounded-full shadow-[0_0_10px_rgba(255,178,191,0.5)]"></div>
                  <div className="h-2 flex-1 bg-outline/20 rounded-full"></div>
                  <div className="h-2 flex-1 bg-outline/20 rounded-full"></div>
                </div>
                <p className="font-body text-sm text-on-background/60">Faltan 2 empresas para desbloquear el descuento.</p>
              </div>

              <div>
                <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-2">Tiempo Restante</p>
                <p className="font-mono text-3xl text-on-background">48:12:05</p>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline/10 flex flex-col justify-center">
              <h3 className="font-headline text-lg mb-4 text-on-background">Tu Enlace Criptográfico</h3>
              <p className="font-body text-sm text-on-background/70 mb-6">
                Comparte este enlace con tu red. Cuando alguien reserva a través de tu nodo, el sistema MCP actualiza el contrato de todos automáticamente.
              </p>
              
              <div className="flex gap-2">
                <input 
                  type="text" 
                  readOnly 
                  value="https://rawrnot.com/echo/tld-core-88x"
                  className="flex-1 bg-surface-container border border-outline/30 rounded-xl px-4 py-3 font-mono text-xs text-on-background focus:outline-none"
                />
                <button 
                  onClick={handleCopyLink}
                  className="bg-primary text-on-primary px-6 rounded-xl font-headline tracking-wide hover:brightness-110 transition-all flex items-center justify-center min-w-[100px]"
                >
                  {copied ? 'Copiado' : 'Copiar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
