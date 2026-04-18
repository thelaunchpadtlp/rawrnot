import React, { useRef, useState, useEffect } from 'react';

interface ESignatureProps {
  contractId: string;
  onSigned?: () => void;
}

const ESignature: React.FC<ESignatureProps> = ({ contractId, onSigned }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);
  const [status, setStatus] = useState<'idle' | 'signing' | 'success'>('idle');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = '#E4BDC2'; // Primary Color
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current?.getContext('2d');
    ctx?.beginPath();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ('touches' in e ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.moveTo(x, y);
    setHasSigned(true);
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHasSigned(false);
    }
  };

  const submitSignature = async () => {
    if (!hasSigned) return;
    setStatus('signing');
    const dataUrl = canvasRef.current?.toDataURL();
    
    try {
      const response = await fetch(`http://localhost:8080/api/contracts/${contractId}/sign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signatureData: dataUrl })
      });
      if (!response.ok) throw new Error();
      setStatus('success');
      onSigned?.();
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-primary/10 border border-primary text-center">
        <p className="font-headline text-xl text-primary italic">Contract Legally Bound</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-surface-container-high border border-outline-variant relative h-48 cursor-crosshair">
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className="w-full h-full"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
        {!hasSigned && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Sign with Precision</span>
          </div>
        )}
      </div>
      
      <div className="flex justify-between">
        <button onClick={clear} className="font-mono text-[10px] text-on-surface-variant hover:text-primary uppercase tracking-widest">Clear Pad</button>
        <button 
          onClick={submitSignature}
          disabled={!hasSigned || status === 'signing'}
          className="bg-primary text-on-primary px-8 py-2 font-headline italic text-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {status === 'signing' ? 'Binding...' : 'Authorize Contract'}
        </button>
      </div>
    </div>
  );
};

export default ESignature;
