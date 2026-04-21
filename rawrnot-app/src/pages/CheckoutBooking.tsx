import { useState } from 'react';

function CheckoutBooking() {
  const [paymentMethod, setPaymentMethod] = useState<'sinpe' | 'bank_transfer' | 'rawrs'>('sinpe');
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSimulateUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      // 1. Create Order
      const createRes = await fetch('http://localhost:8080/api/payments/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: '00000000-0000-0000-0000-000000000001', // Mock Order ID
          expectedAmount: 65000,
          paymentMethod: paymentMethod
        })
      });
      const order = await createRes.json();

      // 2. Upload Receipt
      const buffer = await file.arrayBuffer();
      await fetch(`http://localhost:8080/api/payments/${order.id}/upload-receipt`, {
        method: 'POST',
        headers: { 'Content-Type': file.type },
        body: buffer
      });

      setShowSuccess(true);
    } catch (error) {
      console.error('Error uploading receipt:', error);
      alert('Error connecting to backend');
    } finally {
      setIsUploading(false);
    }
  };

  if (showSuccess) {
    return (
      <main className="pb-24 px-6 md:px-12 max-w-[800px] mx-auto space-y-8 mt-24 text-center animate-fade-in">
        <span className="material-symbols-outlined text-6xl text-primary mb-4 animate-bounce">verified</span>
        <h1 className="font-headline text-5xl text-on-background">Comprobante Recibido</h1>
        <div className="liquid-glass p-8 rounded-2xl ambient-shadow space-y-4">
          <p className="font-body text-lg text-on-background/80">
            Nuestra Inteligencia Artificial ha pre-aprobado el documento (OCR ✓). 
          </p>
          <div className="inline-block border border-primary/30 bg-primary/10 rounded-full px-4 py-2 font-mono text-xs text-primary uppercase tracking-widest mt-4">
            Status: Pendiente de Verificación Manual (Owner)
          </div>
          <p className="font-body text-sm text-on-background/60 mt-6 max-w-md mx-auto">
            Para garantizar la máxima seguridad y evitar fraudes, un miembro de la directiva (Joaquín o Anyssa) revisará la transacción y liberará el acceso a "The Portal". Serás notificado vía email en breve.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="pb-24 px-6 md:px-12 max-w-[1200px] mx-auto space-y-16 mt-16">
      
      <section className="text-center space-y-4 max-w-2xl mx-auto border-b border-outline-variant/30 pb-12">
        <p className="font-mono text-xs text-primary uppercase tracking-[0.2em]">Protocolo Transaccional</p>
        <h1 className="font-headline text-5xl text-on-background">The Checkout</h1>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Step 1 & 2: Booking and Details */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Reservation */}
          <div className="space-y-6">
            <h2 className="font-headline text-3xl text-on-background flex items-center gap-4">
              <span className="font-headline italic text-primary text-xl">01.</span>
              Reservación
            </h2>
            <div className="bg-surface-container-high p-8 rounded-2xl ghost-border">
              <label className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-4">Seleccionar Fecha Objetivo</label>
              <input type="date" className="w-full bg-surface-container-low border border-outline/30 rounded-xl px-4 py-3 font-body text-on-background focus:outline-none focus:border-primary shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)]" />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-6">
            <h2 className="font-headline text-3xl text-on-background flex items-center gap-4">
              <span className="font-headline italic text-primary text-xl">02.</span>
              Liquidación (0% Fees)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => setPaymentMethod('sinpe')}
                className={`p-6 border rounded-2xl text-left transition-all ${paymentMethod === 'sinpe' ? 'border-primary bg-primary/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]' : 'border-outline/20 bg-surface-container hover:bg-surface-container-high ghost-border'}`}
              >
                <h3 className="font-headline text-xl text-on-background">SINPE Móvil</h3>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-2">Transferencia Inmediata</p>
              </button>
              
              <button 
                onClick={() => setPaymentMethod('bank_transfer')}
                className={`p-6 border rounded-2xl text-left transition-all ${paymentMethod === 'bank_transfer' ? 'border-primary bg-primary/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]' : 'border-outline/20 bg-surface-container hover:bg-surface-container-high ghost-border'}`}
              >
                <h3 className="font-headline text-xl text-on-background">Cuenta IBAN</h3>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-2">Transferencia Bancaria</p>
              </button>
            </div>

            {/* Dynamic Payment UI */}
            {paymentMethod === 'sinpe' && (
              <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-2xl shadow-inner space-y-6 animate-fade-in">
                <div>
                  <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1">Número Oficial (SINPE)</p>
                  <p className="font-headline text-3xl text-primary tracking-widest">8888-8888</p>
                  <p className="font-body text-sm text-on-background/60 mt-2">A nombre de: The Launch Pad TLP S.A.</p>
                </div>
                
                <div className="border-t border-dashed border-outline/30 pt-6">
                  <label className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-2">Subir Comprobante</label>
                  <label 
                    className="border-2 border-dashed border-outline-variant/50 rounded-xl p-8 text-center hover:bg-surface-container-high hover:border-primary transition-colors cursor-pointer group block">
                    <input type="file" className="hidden" onChange={handleSimulateUpload} accept="image/*,application/pdf" />
                    {isUploading ? (
                      <span className="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-4xl text-outline group-hover:text-primary transition-colors">cloud_upload</span>
                        <p className="font-body text-sm text-on-surface-variant mt-2">Haz clic para subir la captura de pantalla</p>
                      </>
                    )}
                  </label>
                </div>
              </div>
            )}

            {paymentMethod === 'bank_transfer' && (
              <div className="bg-surface-container-lowest p-8 border border-outline-variant/30 rounded-2xl shadow-inner space-y-6 animate-fade-in">
                <div>
                  <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-4">Coordenadas Bancarias</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body text-sm">
                    <div>
                      <p className="text-on-surface-variant text-xs uppercase">Banco</p>
                      <p className="text-on-background font-medium">Banco Nacional de Costa Rica</p>
                    </div>
                    <div>
                      <p className="text-on-surface-variant text-xs uppercase">A Nombre De</p>
                      <p className="text-on-background font-medium">The Launch Pad TLP S.A.</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-on-surface-variant text-xs uppercase">Cuenta IBAN (Colones)</p>
                      <p className="text-primary font-mono text-lg mt-1 tracking-widest">CR12 3456 7890 1234 5678 90</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-on-surface-variant text-xs uppercase">Cédula Jurídica</p>
                      <p className="text-on-background font-mono mt-1">3-101-123456</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-dashed border-outline/30 pt-6 mt-6">
                  <label className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-2">Subir Comprobante</label>
                  <label 
                    className="border-2 border-dashed border-outline-variant/50 rounded-xl p-8 text-center hover:bg-surface-container-high hover:border-primary transition-colors cursor-pointer group block">
                    <input type="file" className="hidden" onChange={handleSimulateUpload} accept="image/*,application/pdf" />
                    {isUploading ? (
                      <span className="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-4xl text-outline group-hover:text-primary transition-colors">cloud_upload</span>
                        <p className="font-body text-sm text-on-surface-variant mt-2">Sube el PDF o captura de transferencia</p>
                      </>
                    )}
                  </label>
                </div>
              </div>
            )}
            
            <div className="bg-surface-container-low p-4 rounded-xl border border-outline/10 flex items-start gap-3 mt-4">
              <span className="material-symbols-outlined text-primary text-xl">security</span>
              <p className="font-body text-xs text-on-background/70 leading-relaxed">
                <strong>Verificación en Dos Pasos Activa:</strong> Su comprobante será pre-analizado por el Gateway de IA de Rawrnot para validación inmediata, seguido por una aprobación final humana (Owner) para liberar los accesos al portal.
              </p>
            </div>

          </div>
        </div>

        {/* Order Summary (The Ledger) */}
        <div className="lg:col-span-5">
          <div className="liquid-glass p-8 rounded-3xl ghost-border sticky top-28 ambient-shadow">
            <div className="border-b border-outline-variant/30 pb-4 mb-6">
              <h3 className="font-headline text-2xl text-on-background">Acquisition Ledger</h3>
            </div>
            
            <div className="space-y-4 border-b border-outline-variant/30 pb-6 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-headline text-lg">The Den Shoot</p>
                  <p className="font-mono text-[10px] text-on-surface-variant uppercase">Cinematic Experience</p>
                </div>
                <p className="font-mono text-on-background">50,000 ₡</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-headline text-lg">Rawrnot Styling</p>
                  <p className="font-mono text-[10px] text-on-surface-variant uppercase">Add-on</p>
                </div>
                <p className="font-mono text-on-background">15,000 ₡</p>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">Liquidación Total</p>
              <p className="font-headline text-4xl text-primary">65,000 ₡</p>
            </div>

            <button className="w-full bg-primary text-on-primary font-headline text-xl tracking-wide py-4 px-4 rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all">
              Confirmar Transacción
            </button>
            <p className="text-center font-mono text-[10px] text-on-surface-variant mt-4 uppercase">Secured via MACH Architecture</p>
          </div>
        </div>

      </section>
    </main>
  );
}

export default CheckoutBooking;
