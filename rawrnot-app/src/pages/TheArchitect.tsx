import React, { useState, useEffect } from 'react';

function TheArchitect() {
  const [pages, setPages] = useState<any[]>([]);
  const [selectedPage, setSelectedPage] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/pages')
      .then(res => res.json())
      .then(setPages);
  }, []);

  return (
    <main className="pb-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-16 mt-16">
      <section className="flex justify-between items-end border-b-2 border-primary pb-8">
        <div>
          <h1 className="font-headline text-5xl text-on-background">The Architect</h1>
          <p className="font-body text-on-surface-variant text-lg">Omnipotent Site Engine — Administration Mode.</p>
        </div>
        <button className="bg-primary text-on-primary font-headline py-3 px-8 rounded-sm shadow-lg">
          + Create New Page
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Page List (Obsidian/Lightcraft compatible Sidebar) */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="font-headline text-2xl mb-6">Site Index</h3>
          {pages.map(page => (
            <div 
              key={page.id} 
              onClick={() => setSelectedPage(page)}
              className={`p-6 border rounded-sm cursor-pointer transition-all ${selectedPage?.id === page.id ? 'border-primary bg-primary/5' : 'border-outline hover:bg-surface-container-high ghost-border'}`}
            >
              <h4 className="font-headline text-xl">{page.title}</h4>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-1">/{page.slug}</p>
            </div>
          ))}
        </div>

        {/* Editor Area (Visual Builder Placeholder) */}
        <div className="md:col-span-8 bg-surface-container-high p-12 rounded-sm ghost-border shadow-inner flex flex-col items-center justify-center min-h-[500px]">
          {selectedPage ? (
            <div className="w-full space-y-8">
              <div className="flex justify-between items-center border-b border-outline-variant/30 pb-4">
                <h2 className="font-headline text-3xl">Editing: {selectedPage.title}</h2>
                <span className="text-xs font-mono text-primary uppercase">Published</span>
              </div>
              <div className="border-2 border-dashed border-outline-variant p-20 text-center rounded-sm hover:border-primary transition-colors cursor-pointer">
                 <span className="material-symbols-outlined text-4xl text-outline mb-2">add_circle</span>
                 <p className="font-headline text-xl">Insert New Block</p>
              </div>
            </div>
          ) : (
            <>
              <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">architecture</span>
              <p className="font-headline text-2xl italic text-on-surface-variant">Select a page to begin orchestration.</p>
            </>
          )}
        </div>

      </section>
    </main>
  );
}

export default TheArchitect;
