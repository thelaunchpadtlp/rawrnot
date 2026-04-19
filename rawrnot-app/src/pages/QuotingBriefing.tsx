
function QuotingBriefing() {
  return (
    <main className="pb-24 px-6 md:px-12 max-w-[1200px] mx-auto space-y-16 mt-16">
      
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5 sticky top-28 space-y-6">
          <div className="inline-block border border-outline px-3 py-1 rounded-sm shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] bg-surface-container-high">
            <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Intake Protocol</span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl leading-tight text-on-background">
            Craft the <span className="text-gradient-primary italic font-light">Vision</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed">
            Standard forms yield standard results. Fill this ledger to construct a bespoke quote and briefing for your project.
          </p>
        </div>

        <div className="md:col-span-7 bg-surface-container-high p-8 md:p-12 rounded-sm ghost-border shadow-md">
          <form className="space-y-10">
            
            {/* Brand Identity */}
            <div className="space-y-6 border-b border-outline-variant/30 pb-10">
              <h3 className="font-headline text-2xl text-on-background flex items-center gap-3">
                <span className="w-4 h-4 bg-primary rounded-full"></span>
                Entity Designation
              </h3>
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-2">Brand / Individual Name</label>
                <input type="text" className="w-full bg-surface-bright border border-outline rounded-sm px-4 py-3 font-body text-on-background focus:outline-none focus:border-primary shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)]" placeholder="E.g., The Midnight Society" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-2">Industry Sector</label>
                  <input type="text" className="w-full bg-surface-bright border border-outline rounded-sm px-4 py-3 font-body text-on-background focus:outline-none focus:border-primary shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)]" />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-2">Target Date (Opt)</label>
                  <input type="date" className="w-full bg-surface-bright border border-outline rounded-sm px-4 py-3 font-body text-on-background focus:outline-none focus:border-primary shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)]" />
                </div>
              </div>
            </div>

            {/* Scope of Work */}
            <div className="space-y-6 border-b border-outline-variant/30 pb-10">
              <h3 className="font-headline text-2xl text-on-background flex items-center gap-3">
                <span className="w-4 h-4 bg-outline-variant rounded-full"></span>
                Scope Parameters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Brand Identity', 'Cinematic Photography', 'Web Architecture', 'Social Resonance'].map((item) => (
                  <label key={item} className="flex items-center p-4 border border-outline rounded-sm hover:bg-surface-bright cursor-pointer transition-colors group">
                    <div className="w-5 h-5 border border-outline rounded-sm bg-surface-container-lowest group-hover:border-primary flex items-center justify-center"></div>
                    <span className="ml-3 font-body text-sm text-on-background">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Raw Input */}
            <div className="space-y-6">
              <h3 className="font-headline text-2xl text-on-background flex items-center gap-3">
                <span className="w-4 h-4 bg-outline-variant rounded-full"></span>
                The Raw Concept
              </h3>
              <div>
                <label className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-2">Describe the tension or goal</label>
                <textarea rows={5} className="w-full bg-surface-bright border border-outline rounded-sm px-4 py-3 font-body text-on-background focus:outline-none focus:border-primary shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] resize-none" placeholder="We are trying to achieve..."></textarea>
              </div>
            </div>

            <button className="w-full bg-gradient-primary text-on-primary font-headline text-xl py-4 rounded-sm shadow-lg hover:opacity-90 transition-opacity mt-8">
              Generate Quote Estimate
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}

export default QuotingBriefing;
