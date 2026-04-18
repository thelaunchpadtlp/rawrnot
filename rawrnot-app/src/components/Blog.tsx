import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-white min-h-screen overflow-x-hidden">
      <main className="pt-12 pb-32 px-4 md:px-12 max-w-[1440px] mx-auto">
        {/* Hero Editorial Header */}
        <section className="mb-24 relative">
          <div className="flex flex-col md:flex-row items-end gap-8">
            <div className="md:w-2/3">
              <span className="font-label text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">The Digital Apex // Issue 04</span>
              <h1 className="font-headline text-5xl md:text-8xl italic font-black leading-tight tracking-tighter shadow-primary/20" style={{ textShadow: '0 0 20px rgba(255, 178, 191, 0.3)' }}>
                Untamed <span className="opacity-50">Instinct,</span><br />
                Elite <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Execution.</span>
              </h1>
            </div>
            <div className="md:w-1/3 text-on-surface-variant font-light leading-relaxed pb-4 text-sm">
              Exploring the friction between the raw human creative pulse and the precision of high-frequency digital synthesis.
            </div>
          </div>
        </section>

        {/* Asymmetric Multimedia Journal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Featured Video Article */}
          <div className="md:col-span-7 group">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-surface-container-high shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen" 
                alt="Video Essay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyocxqgNCh-rQ7DztCnN6B8euLWPNhpq5eQHwzAiN1w7_R9u6uGme0nn-SsyTc6FkuiPgFjeSGl_QNRAZRvoXrY_jIzL3z-Ccccb8Q3_epsoJzvWPbGWXOmY07SkcMDJhsF29ai0_J1K5KgvgE2ptHJAVxINg72sfAoG8x0HB8k-G22yxeqoXcw9KPDUSETTkV-ouo1ZIJYdao4s-ElzbiFU9_iQ9s72EoK3hNhjBP6ynFVFdK8QUjosxw-rQlAFjjpRyTPjJHnyo" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="bg-primary/20 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-primary/30 mb-4">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Video Essay</span>
                </div>
                <h2 className="font-headline text-4xl font-bold mb-4 leading-tight">The Architecture of Silence in a Digital Roar</h2>
                <p className="text-on-surface-variant font-light line-clamp-2 mb-6">How minimal aesthetic constraints can amplify the primal impact of multimedia storytelling.</p>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-on-primary shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
              </div>
            </div>
          </div>

          {/* Side Asymmetric Column */}
          <div className="md:col-span-5 space-y-12">
            {/* Illustration Post */}
            <article className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-primary transition-all hover:bg-surface-container-low shadow-xl">
              <span className="font-label text-pink-300 text-[10px] mb-4 block tracking-widest uppercase font-bold">Digital Illustration</span>
              <h3 className="font-headline text-2xl font-bold mb-3 italic text-on-background">Organic Geometry</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">Redefining the relationship between botanical patterns and parametric design logic.</p>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Illustration"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUxZqgNwHYkpwpq7Gx8aHDHyZXLNWJLKHToYLj1D16zyd0FvCp0uNIFYPAfcUdbAORACejZ5xDaJ2MXnn5kKneMTA1Dc8YcZ8DdGPw7zmwo1t3cbsbxmSfOCKY-2rCgETnHp9C8O1SN81-CQwjUc8XUr1v4sy6Vi9sgxlY0jqvhSW275oDNaKWnWYIxKoE2dHYCv4JoFwjLY656NgAsBbE7sQHdufTenMM6zELw1sX7Rh-jXCOZxLXAMq0o6KQ3zc6LuuaYg9wC0I" 
                />
              </div>
            </article>

            {/* High-Res Portrait Section */}
            <div className="relative group cursor-pointer">
              <div className="liquid-glass p-1 rounded-xl">
                <div className="rounded-lg overflow-hidden aspect-square">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                    alt="Portrait"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx3A4ID5OB-5et6-AnxWVJlN_VjUJw2otNJSSGu-PVZ7KeKUNv2qT6h77AFmpeYj9LhF6o0bBTQWVZ2gZpN8pTkXAyyEUcRMbFLb32HOCEHg_npcGipS55KyH0eRkaHKsjATzwoqGckG5SZ3_vkUvXi4cRVKMOfiTqTttLlgjxxiO1O91Nl_rjKrIcaRPq1wYXEhOmF8nxyO4LKhhz0Vz317hcvK8NvEIJrYH1fjQC87IxAVZDNOdZX5xG12QdkSLB0drD3A-3PVk" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 liquid-glass rounded-xl max-w-[240px] shadow-2xl border border-white/5">
                <span className="font-headline text-lg italic block mb-2">Neon Shadows</span>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">A photography series by Aris Thorne</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Call to Action */}
        <div className="mt-24 relative h-48 rounded-xl overflow-hidden bg-surface-container-lowest flex items-center px-12 group border border-white/5 shadow-2xl">
          <div className="absolute right-0 top-0 w-2/3 h-full overflow-hidden opacity-30">
            <img 
              className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" 
              alt="Mountain Sunset"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmNNQilvwHGqtcfLIEFidmyxF8IT9-3mlltnbMuRf0R6avIGGbENH_ILIdRvRh1zE9NnPYCxM8pFdhBt-oUCzS3CDEdKNEu6yETeo-xVmgI6yixMmjg1t_QKnnQHe-56LLqrtpf4PQYfGTfp-3FCW2Zn10s_gY4_j4Izi1PdqJeIcuHbHrsEK3VNcduYSmf6X8EzFWuyIIw9p6DIjrf_RHa2xlJ4xLAFK-P8wVQn1xJ01uJtQxbquuROIEhLwRx0-z8WQ-chm6D00" 
            />
          </div>
          <div className="relative z-10">
            <h5 className="font-headline text-3xl font-black tracking-tighter">JOIN THE PRIDE.</h5>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-widest mt-1 font-bold">Weekly digital insights delivered to your apex.</p>
            <div className="mt-4 flex gap-2">
              <input 
                className="bg-surface-container-highest border-none text-xs px-4 py-2 w-48 focus:ring-1 focus:ring-primary rounded-sm outline-none" 
                placeholder="email@rawrnot.com" 
                type="email" 
              />
              <button className="bg-primary text-on-primary px-4 py-2 text-[10px] font-bold rounded-full uppercase tracking-widest active:scale-95 transition-transform">Sub</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
