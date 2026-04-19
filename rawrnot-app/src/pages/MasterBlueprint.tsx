import React, { useState, useEffect } from 'react';

export default function MasterBlueprint() {
  const [notes, setNotes] = useState("");

  // Cargar notas al montar
  useEffect(() => {
    const savedNotes = localStorage.getItem("rawrnot_master_notes");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Guardar notas automáticamente
  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
    localStorage.setItem("rawrnot_master_notes", e.target.value);
  };

  return (
    <div className="universal-container py-12 md:py-24 animate-fade-in">
      
      {/* Header */}
      <header className="mb-16 border-b border-outline-variant/30 pb-8">
        <div className="flex items-center gap-3 mb-4 text-primary">
          <span className="material-symbols-outlined text-3xl">architecture</span>
          <h1 className="text-4xl md:text-5xl font-headline font-semibold">The Apex Blueprint</h1>
        </div>
        <p className="text-lg text-on-background/70 font-body max-w-3xl">
          El manifiesto central y la fuente de la verdad para Rawrnot. Este documento es privado, dinámico y dictamina el modelo de negocios, la arquitectura técnica y la misión absoluta de la plataforma.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-12">
          
          <section className="liquid-glass rounded-3xl p-8 ambient-shadow">
            <h2 className="text-2xl font-headline mb-4 text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">visibility</span> Misión y Visión
            </h2>
            <div className="space-y-4 font-body text-on-background/80">
              <p>
                <strong className="text-on-background">Identidad:</strong> "The Digital Apex". Una fusión de storytelling cinematográfico y una experiencia transaccional de alto valor.
              </p>
              <p>
                <strong className="text-on-background">Core Objective:</strong> Reemplazar el "scroll" vacío de redes sociales por un <em>Single-Player Hub</em> interactivo. Utilizamos economía conductual y una estética hiper-refinada para educar y convertir visitantes en clientes premium.
              </p>
            </div>
          </section>

          <section className="liquid-glass rounded-3xl p-8 ambient-shadow">
            <h2 className="text-2xl font-headline mb-4 text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">payments</span> Modelo de Negocios
            </h2>
            <div className="space-y-4 font-body text-on-background/80">
              <p>
                <strong>Boutique de Alto Valor (B2B/B2C):</strong> Venta de servicios creativos y de identidad visual (Ej. The Den Shoot, Editorial Core, Nexus Identity). 
              </p>
              <p>
                <strong>Costo Cero / Independencia (Self-Hosted):</strong> La plataforma en sí misma es un acto de rebeldía. Elimina los intermediarios y suscripciones mensuales (Make, DocuSign, Typeform, Shopify) mediante herramientas <em>Open Source</em> conectadas vía el Gateway MCP a Inteligencia Artificial autónoma.
              </p>
              <p>
                <strong>Micro-economía Interna:</strong> Implementación futura del token "rawrs" para fricción cero en compras cruzadas y gamificación de la lealtad.
              </p>
            </div>
          </section>

          <section className="liquid-glass rounded-3xl p-8 ambient-shadow">
            <h2 className="text-2xl font-headline mb-4 text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">widgets</span> Arquitectura & Módulos
            </h2>
            <ul className="space-y-4 font-body text-on-background/80 list-none p-0">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">view_carousel</span>
                <div>
                  <strong className="text-on-background block">1. The Portfolio & Home</strong>
                  Visual-first, minimalista. Grillas inmersivas para exhibir "Raw or Not".
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">assignment</span>
                <div>
                  <strong className="text-on-background block">2. Smart Briefing (CRM)</strong>
                  Formularios inteligentes y E-Signatures internas. El reemplazo de Typeform y DocuSign.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                <div>
                  <strong className="text-on-background block">3. Checkout & SINPE</strong>
                  Módulo de pago directo. Para CR, prioriza SINPE con verificación OCR/Humana; stripe para internacional.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">share</span>
                <div>
                  <strong className="text-on-background block">4. The Echo (Motor Viral)</strong>
                  Ventas grupales ("Team Buy") con enlaces criptográficos, apalancando la Ley de Reed.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">book</span>
                <div>
                  <strong className="text-on-background block">5. The Journal</strong>
                  El cerebro y corazón. Blog editorial rico en multimedia para asentar autoridad intelectual.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary">smart_toy</span>
                <div>
                  <strong className="text-on-background block">6. Nexus MCP (IA Gateway)</strong>
                  El puente entre la plataforma y agentes de IA (Gemini/Claude) que actúan como "empleados gratuitos".
                </div>
              </li>
            </ul>
          </section>
        </div>

        {/* Sidebar: Interactive Scratchpad */}
        <div className="lg:col-span-1">
          <div className="liquid-glass rounded-3xl p-6 ambient-shadow sticky top-24 flex flex-col h-[calc(100vh-8rem)]">
            <h3 className="text-xl font-headline mb-4 text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">edit_note</span> Bloc de Notas del Owner
            </h3>
            <p className="text-sm text-on-background/60 font-body mb-4">
              Apuntes estratégicos encriptados localmente. (Se guardan automáticamente en tu navegador).
            </p>
            <textarea 
              value={notes}
              onChange={handleNotesChange}
              placeholder="Escribe tus ideas, tareas, o flashes de inspiración aquí..."
              className="flex-grow w-full bg-transparent border border-outline/20 rounded-xl p-4 font-body text-sm text-on-background focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all"
            ></textarea>
          </div>
        </div>

      </div>
    </div>
  );
}
