import React, { useState } from 'react';

function CheckoutBooking() {
  const [paymentMethod, setPaymentMethod] = useState('sinpe');

  return (
    <main className="pb-24 px-6 md:px-12 max-w-[1200px] mx-auto space-y-16 mt-16">
      
      <section className="text-center space-y-4 max-w-2xl mx-auto border-b border-outline-variant pb-12">
        <p className="font-mono text-xs text-primary uppercase tracking-[0.2em]">Acquisition Protocol</p>
        <h1 className="font-headline text-5xl text-on-background">The Checkout</h1>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Step 1 & 2: Booking and Details */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Reservation */}
          <div className="space-y-6">
            <h2 className="font-headline text-3xl text-on-background flex items-center gap-4">
              <span className="font-headline italic text-primary text-xl">01.</span>
              Reservation
            </h2>
            <div className="bg-surface-container-high p-8 rounded-sm ghost-border">
              <label className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-4">Select Target Date</label>
              <input type="date" className="w-full bg-surface-container-low border border-outline rounded-sm px-4 py-3 font-body text-on-background focus:outline-none focus:border-primary shadow-[inset_0_1px_3px_rgba(0,0,0,0.05)] custom-date-input" />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="space-y-6">
            <h2 className="font-headline text-3xl text-on-background flex items-center gap-4">
              <span className="font-headline italic text-primary text-xl">02.</span>
              Liquidation
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setPaymentMethod('sinpe')}
                className={`p-6 border rounded-sm text-left transition-all ${paymentMethod === 'sinpe' ? 'border-primary bg-primary/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]' : 'border-outline bg-surface-container-high hover:bg-surface-bright ghost-border'}`}
              >
                <h3 className="font-headline text-xl text-on-background">SINPE Móvil</h3>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-2">Zero Fee • Automated</p>
              </button>
              
              <button 
                onClick={() => setPaymentMethod('rawrs')}
                className={`p-6 border rounded-sm text-left transition-all ${paymentMethod === 'rawrs' ? 'border-primary bg-primary/5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]' : 'border-outline bg-surface-container-high hover:bg-surface-bright ghost-border'}`}
              >
                <h3 className="font-headline text-xl text-on-background">Rawrs Treasury</h3>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase mt-2">Internal Token • Fast</p>
              </button>
            </div>

            {/* Dynamic Payment UI */}
            {paymentMethod === 'sinpe' && (
              <div className="bg-surface-container-lowest p-8 border border-outline-variant rounded-sm shadow-inner space-y-6 animate-fade-in">
                <div>
                  <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1">Official Number</p>
                  <p className="font-headline text-3xl text-primary tracking-widest">+506 8888-8888</p>
                </div>
                
                <div className="border-t border-dashed border-outline/30 pt-6">
                  <label className="block font-mono text-xs uppercase tracking-widest text-on-surface-variant mb-2">Upload Receipt (OCR Verification)</label>
                  <div className="border-2 border-dashed border-outline-variant rounded-sm p-8 text-center hover:bg-surface-container-high hover:border-primary transition-colors cursor-pointer group">
                    <span className="material-symbols-outlined text-4xl text-outline group-hover:text-primary transition-colors">cloud_upload</span>
                    <p className="font-body text-sm text-on-surface-variant mt-2">Drag image or click to browse</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary (The Ledger) */}
        <div className="lg:col-span-5">
          <div className="bg-surface-bright p-8 rounded-sm ghost-border sticky top-28 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <div className="border-b-2 border-on-background pb-4 mb-6">
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
              <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">Total Liquidation</p>
              <p className="font-headline text-4xl text-primary">65,000 ₡</p>
            </div>

            <button className="w-full bg-on-background text-background font-headline tracking-wide py-4 px-4 rounded-sm shadow-[inset_0_-2px_0_rgba(0,0,0,0.5)] hover:bg-surface-container-highest active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] active:translate-y-[1px] transition-all">
              Confirm Transaction
            </button>
            <p className="text-center font-mono text-[10px] text-on-surface-variant mt-4 uppercase">Secured via MACH Architecture</p>
          </div>
        </div>

      </section>
    </main>
  );
}

export default CheckoutBooking;
