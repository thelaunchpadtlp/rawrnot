import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RenderFactory from '../components/RenderFactory';

const DynamicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [page, setPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If no slug, default to "home"
    const targetSlug = slug || 'home';
    
    setLoading(true);
    fetch(`http://localhost:8080/api/pages/${targetSlug}`)
      .then(res => res.json())
      .then(data => {
        setPage(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Page not found:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="font-mono text-primary animate-pulse uppercase tracking-widest text-sm">Synchronizing Data...</span>
    </div>
  );

  if (!page) return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="font-headline text-4xl italic text-on-surface-variant">Page Archive Not Found</h1>
    </div>
  );

  return (
    <main className="pb-24 px-6 md:px-12 max-w-[1400px] mx-auto space-y-24 mt-16 animate-fade-in">
      {page.blocks?.map((block: any) => (
        <RenderFactory key={block.id} type={block.type} payload={block.payload} />
      ))}
    </main>
  );
};

export default DynamicPage;
