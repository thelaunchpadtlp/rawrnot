import React, { useState } from 'react';

interface Field {
  id: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  label: string;
  required?: boolean;
  options?: string[];
}

interface SmartFormProps {
  formId: string;
  name: string;
  schema: string;
}

const SmartForm: React.FC<SmartFormProps> = ({ formId, name, schema }) => {
  const fields: Field[] = JSON.parse(schema);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(`http://localhost:8080/api/forms/submit/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(JSON.stringify(formData)) // Sending data as string as per controller
      });
      if (!response.ok) throw new Error();
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-12 bg-primary/10 border border-primary text-center space-y-4">
        <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
        <h3 className="font-headline text-2xl">Transmission Received</h3>
        <p className="font-body text-on-surface-variant">We have captured your vision. The Nexus will respond shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto p-12 bg-surface-container-low ghost-border">
      <h2 className="font-headline text-3xl mb-8 border-b border-primary pb-4">{name}</h2>
      
      {fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <label className="block font-mono text-[10px] uppercase tracking-widest text-primary">
            {field.label} {field.required && '*'}
          </label>
          
          {field.type === 'textarea' ? (
            <textarea
              required={field.required}
              className="w-full bg-surface-bright border border-outline-variant p-4 focus:border-primary outline-none transition-colors min-h-[120px]"
              onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
            />
          ) : field.type === 'select' ? (
            <select
              required={field.required}
              className="w-full bg-surface-bright border border-outline-variant p-4 focus:border-primary outline-none transition-colors"
              onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
            >
              <option value="">Select option...</option>
              {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          ) : (
            <input
              type={field.type}
              required={field.required}
              className="w-full bg-surface-bright border border-outline-variant p-4 focus:border-primary outline-none transition-colors"
              onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
            />
          )}
        </div>
      ))}

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-primary text-on-primary font-headline py-4 hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {status === 'submitting' ? 'Transmitting...' : 'Initialize Inquiry'}
      </button>
    </form>
  );
};

export default SmartForm;
