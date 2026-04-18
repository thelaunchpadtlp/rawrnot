import React from 'react';
import { GlassCard, LiquidCard, BentoGrid, PrimaryButton } from './MolecularComponents';
import SmartForm from './SmartForm';
import ESignature from './ESignature';

// Common interface for all dynamic blocks
interface BlockProps {
  data: any;
}

const HeroBlock: React.FC<BlockProps> = ({ data }) => (
  <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative py-20">
    <div className="lg:col-span-5 z-10 space-y-6">
      {data.tag && <p className="font-body text-primary tracking-widest uppercase text-sm font-semibold">{data.tag}</p>}
      <h1 className="font-headline text-5xl md:text-[3.5rem] leading-tight text-on-background">
        {data.title} <br/><span className="text-gradient-primary italic font-light">{data.subtitle}</span>
      </h1>
      <p className="font-body text-on-surface-variant text-lg max-w-md">
        {data.description}
      </p>
      <div className="pt-4">
        <PrimaryButton>
          <span>{data.cta || 'Initialize Protocol'}</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </PrimaryButton>
      </div>
    </div>
    <div className="lg:col-span-8 lg:-ml-12 relative">
      <LiquidCard className="p-4 overflow-hidden aspect-[16/9]">
        <img 
          alt="Visual" 
          className="w-full h-full object-cover rounded-xl opacity-80 mix-blend-screen" 
          src={data.imageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuBxw7TrxGBLiH61QlxoXy04gtIstnZj6i0sbPuMexEDS0L5mQ7f7WD9RRdAJCpSuITzcsKIS5gWiqvopwI9XUEX8DAheLIspAaq5h4Ingq0wS1gsSVpOHsp7JX0jRhhczRZvE1CDo6NE_VwAyAJ4yWCvDjd4SZHHMKVWpjbwEWXQl0XBijFZ6Zz0gBz9gCHSikgrDxr8EoZ0bWGplMIja9FK0QAC97pHkrPIVLwMSFCF15J_E7FW_psAHoRbvxjj_EzRZCy6yHYK3w"} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
      </LiquidCard>
    </div>
  </section>
);

const BentoStatusGridBlock: React.FC<BlockProps> = ({ data }) => (
  <section className="space-y-8 py-10">
    <div className="flex items-end justify-between">
      <div>
        <h2 className="font-headline text-[1.75rem] text-on-background">{data.title}</h2>
        <p className="font-body text-on-surface-variant text-sm mt-1">{data.subtitle}</p>
      </div>
    </div>
    <BentoGrid>
      {data.cards?.map((card: any, i: number) => (
        <GlassCard key={i} className={card.large ? "md:col-span-2 lg:col-span-2" : "flex flex-col justify-between"}>
           <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-surface-container-lowest rounded-xl text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{card.icon || 'star'}</span>
              </div>
              {card.status && <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded ghost-border">{card.status}</span>}
            </div>
            <div>
              <h3 className="font-body text-lg font-medium text-on-surface">{card.title}</h3>
              <p className="font-body text-xs text-on-surface-variant mt-1">{card.description}</p>
            </div>
            {card.metric && (
               <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-center font-mono text-xs text-primary">
                    <span>{card.metricLabel}</span>
                    <span>{card.metric}</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary rounded-full" style={{ width: card.percent || '50%' }}></div>
                  </div>
               </div>
            )}
        </GlassCard>
      ))}
    </BentoGrid>
  </section>
);

const SmartFormBlock: React.FC<BlockProps> = ({ data }) => (
  <section className="py-12">
    <SmartForm formId={data.formId} name={data.name} schema={data.schema} />
  </section>
);

const ContractBlock: React.FC<BlockProps> = ({ data }) => (
  <section className="bg-surface-container-low p-12 ghost-border max-w-4xl mx-auto space-y-8 my-20">
    <h2 className="font-headline text-4xl border-b border-primary pb-6 italic">{data.title}</h2>
    <div className="font-body text-on-surface-variant leading-relaxed text-lg whitespace-pre-wrap">
       {data.content}
    </div>
    <div className="pt-12 border-t border-outline-variant">
      <h4 className="font-mono text-[10px] uppercase tracking-widest text-primary mb-6">Execution & Authorization</h4>
      <ESignature contractId={data.contractId} />
    </div>
  </section>
);

// The Factory: Maps block names to components
const RenderFactory: React.FC<{ type: string; payload: string }> = ({ type, payload }) => {
  const data = JSON.parse(payload);
  switch (type) {
    case 'Hero': return <HeroBlock data={data} />;
    case 'BentoStatusGrid': return <BentoStatusGridBlock data={data} />;
    case 'SmartForm': return <SmartFormBlock data={data} />;
    case 'Contract': return <ContractBlock data={data} />;
    default: return <div className="p-4 border border-dashed border-outline">Unknown Block: {type}</div>;
  }
};

export default RenderFactory;
