import React from 'react';

function Marketplace() {
  const services = [
    { id: 1, title: 'The Den Shoot', type: 'Cinematic', price: '50,000', desc: 'Full day immersive brand photography.' },
    { id: 2, title: 'Editorial Core', type: 'Fashion', price: '85,000', desc: 'High-fidelity magazine style campaign.' },
    { id: 3, title: 'Nexus Identity', type: 'Branding', price: '120,000', desc: 'Complete visual DNA and MCP integration.' }
  ];

  return (
    <main className="pb-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-16 mt-16">
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="font-headline text-5xl md:text-7xl leading-tight text-on-background">
          The <span className="italic font-light text-primary">Primal</span> Marketplace
        </h1>
        <p className="font-body text-on-surface-variant text-lg">
          Exclusive access to Rawrnot visual storytelling packages.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-surface-container-high rounded-sm p-10 ghost-border relative overflow-hidden flex flex-col justify-between min-h-[450px] group hover:shadow-xl transition-all">
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-primary border-b border-outline-variant pb-1">{service.type}</span>
              <h3 className="font-headline text-4xl text-on-background group-hover:italic transition-all">{service.title}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{service.description}</p>
            </div>
            
            <div className="relative z-10 pt-12 flex justify-between items-end border-t border-dashed border-outline-variant mt-8">
              <div>
                <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider mb-1">Investment</p>
                <p className="font-headline text-3xl text-on-background">{service.price} <span className="text-sm font-body italic opacity-60">₡</span></p>
              </div>
              <button 
                onClick={() => {
                  console.log("Capturing interest...");
                  // Lógica Shadow Profile: se dispararía al intentar comprar sin cuenta
                }}
                className="bg-on-background text-background font-headline py-2 px-6 rounded-sm shadow-[inset_0_-2px_0_rgba(0,0,0,0.5)] hover:bg-surface-container-highest transition-all active:translate-y-px"
              >
                Acquire
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Marketplace;
