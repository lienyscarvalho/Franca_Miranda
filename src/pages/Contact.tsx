import React from 'react';
import { Mail, Phone, MapPin, Camera } from 'lucide-react';

export const Contact = () => (
  <div className="max-w-4xl mx-auto space-y-8">
    <h2 className="text-3xl font-serif font-bold">Contato</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-brand-blue p-8 rounded-3xl text-white space-y-6">
        <div className="flex items-center gap-4"><MapPin className="text-brand-gold" /> <span>Niterói - RJ</span></div>
        <div className="flex items-center gap-4"><Phone className="text-brand-gold" /> <span>(21) 3333-4444</span></div>
        <div className="flex items-center gap-4"><Camera className="text-brand-gold" /> <span>@francaemiranda.adv</span></div>
      </div>
      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <p className="text-slate-500">Formulário de contato em manutenção. Por favor, utilize o WhatsApp ou E-mail.</p>
      </div>
    </div>
  </div>
);
