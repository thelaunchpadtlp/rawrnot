import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Blog: React.FC = () => {
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      tag: 'Video Essay',
      title: 'The Architecture of Silence',
      desc: 'How minimal aesthetic constraints can amplify the primal impact of multimedia storytelling.',
      image: 'https://images.unsplash.com/photo-1492691523567-307305eee541?auto=format&fit=crop&q=80&w=1200',
      size: 'large'
    },
    {
      id: 2,
      tag: 'Digital Art',
      title: 'Organic Geometry',
      desc: 'Redefining the relationship between botanical patterns and parametric design logic.',
      image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800',
      size: 'small'
    },
    {
      id: 3,
      tag: 'Photography',
      title: 'Neon Shadows',
      desc: 'A visceral exploration of high-contrast nocturnal urbanism.',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=800',
      size: 'medium'
    }
  ];

  return (
    <div className="bg-background text-on-background font-body min-h-screen overflow-x-hidden">
      <main className="pt-12 pb-32 px-6 max-w-7xl mx-auto">
        <section className="mb-32 relative">
          <div className="flex flex-col lg:flex-row items-end gap-12">
            <div className="lg:w-2/3">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-label text-primary uppercase tracking-[0.4em] text-[10px] font-black mb-6 block"
              >
                The Digital Apex // Journal 04
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-headline text-7xl md:text-9xl italic font-black leading-[0.85] tracking-tighter uppercase"
              >
                Untamed <span className="text-primary">Instinct,</span><br />
                Elite <span className="opacity-20">Execution.</span>
              </motion.h1>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="lg:w-1/3 text-on-surface-variant font-light leading-relaxed text-lg italic border-l border-white/10 pl-8"
            >
              Exploring the friction between the raw human creative pulse and the precision of high-frequency digital synthesis.
            </motion.div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {articles.map((article, i) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`${article.size === 'large' ? 'md:col-span-8' : article.size === 'medium' ? 'md:col-span-7' : 'md:col-span-4'} group cursor-pointer`}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-surface-container-high shadow-2xl transition-all duration-700 group-hover:scale-[1.01]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000" 
                  src={article.image} 
                  alt={article.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-4">{article.tag}</span>
                  <h2 className="font-headline text-4xl md:text-5xl font-black mb-4 leading-tight uppercase tracking-tighter italic">{article.title}</h2>
                  <p className="text-on-surface-variant font-light text-sm line-clamp-2 max-w-sm mb-8">{article.desc}</p>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-2xl shadow-primary/30"
                  >
                    <span className="material-symbols-outlined font-black">arrow_forward</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:col-span-5 flex flex-col justify-center p-12 bg-primary/5 rounded-3xl border border-primary/20 space-y-8"
          >
            <span className="material-symbols-outlined text-primary text-5xl">auto_awesome</span>
            <h3 className="font-headline text-4xl font-black italic uppercase tracking-tighter">Synthetic Soul</h3>
            <p className="text-on-surface-variant font-light leading-relaxed">
              Can an AI truly replicate the 'flaws' that make artisan craft feel human? We dive into the uncanny valley of digital textiles.
            </p>
            <button className="text-[10px] font-black uppercase tracking-[0.4em] text-primary flex items-center gap-4 group">
              Read More
              <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
