import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 relative min-h-screen w-full overflow-x-hidden">
      {/* Hero: Full-bleed background visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background z-10"></div>
        <div className="w-full h-full bg-neutral-900 overflow-hidden">
          <img 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrsVVW8qEegmvTGpGiyAInL05LS8aDjbJVC2qgtlDfQPoW4YHWg82OnLJhaXfIOtafNVHmaqj5kGWURCzAoIApCZw9kecmLwi114pCKOYab_XeLHPAExDNg7V1LinIS69VK787_0YpArgWNbkwomInwxsLLCiFowCF7IJRlwBy_UdkRituMOP6syw6znjD9hJQJG7etE9IRwxlDvkYQV390xJdKYBuvadjHt-GIjKQCRAUl95OhDxNr0dQxj1Ulurk0gAQqCN0FaA" 
          />
        </div>
      </div>

      {/* Hero Content */}
      <section className="relative z-20 pt-24 pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-surface-tint/10 border border-surface-tint/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-label-md font-bold tracking-widest uppercase text-primary text-xs">Now Live: Genesis Collection</span>
          </div>
          <h2 className="font-headline text-6xl leading-[0.95] tracking-tighter text-on-background lg:text-[5rem]">
            UNTAMED <br />
            <span className="text-primary italic">PRECISION</span>
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-md leading-relaxed">
            The Digital Apex of creative agency work. We bridge the gap between visceral instinct and elite technical execution.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-primary to-primary-container px-8 py-4 rounded-full text-on-primary-fixed font-bold flex items-center gap-2 group hover:shadow-[0_0_30px_rgba(255,77,129,0.4)] transition-all">
              UNLEASH PROJECT
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button className="px-8 py-4 rounded-full border border-outline-variant hover:bg-white/5 transition-all text-on-surface font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
              THE ROAR
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Floating Glassmorphic Card */}
          <div className="liquid-glass p-6 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(228,189,194,0.1)] border border-white/5 space-y-4 lg:translate-y-[-20%] lg:translate-x-[-10%]">
            <div className="aspect-video rounded-lg overflow-hidden relative">
              <img 
                alt="Featured Work" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJTsVptYqiKkStMdK_td28-NPy2juB_u-48bombWyFYE1s584lzcyOyUOfEZA4E0dDKczTE6N8p4yTFU9Dfxr8OZbd9LfZ_e6Hq68Jh8NmLCsjVcTNbK4Keeb1t7Qq_tpZEM9vnj0gKqLt7mXVvXFMaKQPqb3WyZ5NSruTjlpWpNHcOKeJD1qcgCv6D0HJR1MHJhegtk5c03Kbvr-UIvDRZANdj2yAG6fOf_UHpl1kGWHHlYZlMijrYgwRCwLhlyNnl78MpWhGbRc" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-[10px] font-bold text-white bg-primary-container px-3 py-1 rounded-full">AWARD WINNING</span>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-2xl text-on-surface">Neon Monolith</h3>
              <p className="font-body text-sm text-on-surface-variant">Brand Identity & Immersive Spatial Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section (Featured Projects) */}
      <section className="relative z-20 px-6 py-24 max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <span className="font-label text-primary font-bold uppercase tracking-[0.2em] text-xs">The Vault</span>
            <h2 className="font-headline text-4xl">Featured Fragments</h2>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 text-sm">
            View All Projects
            <span className="material-symbols-outlined text-sm">north_east</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high transition-all hover:bg-surface-bright min-h-[300px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp-Pu3hUz8nFjogkfeOyPYxUXukzqdBnq6Qnyk8KPjApZkfto8OwyQobCSVTH7YPuWDFj2Q0BN9oPTjntoYH-Acx74QUaGmj6Stcpy4Fk0mBxZS2b8XzQOsasnSHZEFzNQmB2fSN82itn-ICYkL8W5AnkXlg3ZmlPNsxRGGfatn5zdcfqNRCUSETEo1gW0dTMJgWwyIQQmNYJTmC1ya7pO6bZ6XV_jOFRDoCAKRt8AFU3P3EskY4ufXcYMKrHAeZSZM5irnZzYLF0" 
              alt="Crimson Flow"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
              <h4 className="font-headline text-3xl mb-2">Crimson Flow</h4>
              <p className="max-w-sm text-on-surface-variant">Exploring the boundary between digital physics and human emotion in motion graphics.</p>
            </div>
          </div>
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high transition-all hover:bg-surface-bright min-h-[300px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvk7IC89RN0rV6RYDOBCJgfMA4M2V3PBadUdW-BqzvVq-OVB78TNqE5zIVm56rrSK7bPGmrfgdZgu2FwDS_Y1pbk9vjoUV_UN8f8j9meWRg1ieF_6BRZk7O4nCLI4tODEi8H2nMTkjG0gF_HeLpz8AJDFCgK__zJ-3Gqa_h8XhA07LCvWnILXNfn0alYcU2wCC4Xer1VVxvKdyoa4Q55Qxvy_oXAdnI1bqpvU6cK9wuuMf9HiTzJ40O2uh0nisikY04_eZWrTlenE" 
              alt="Apex UI"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background to-transparent">
              <h4 className="font-headline text-3xl mb-2">Apex UI</h4>
              <p className="text-on-surface-variant">The interface of the next decade.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacer for bottom nav */}
      <div className="h-32"></div>
    </div>
  );
};

export default Portfolio;
