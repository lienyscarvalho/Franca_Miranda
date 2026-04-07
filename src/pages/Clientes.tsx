import React from 'react';
import { Users, Search, Plus, Mail, Phone } from 'lucide-react';

export const Clientes = () => {
  const clientes = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', telefone: '(21) 9999-8888', status: 'Ativo' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com', telefone: '(21) 7777-6666', status: 'Ativo' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-serif font-bold text-slate-900">Clientes</h2>
        <button className="btn-primary flex items-center gap-2"><Plus className="w-5 h-5" /> Novo Cliente</button>
      </div>
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-4 font-bold text-slate-700">Nome</th>
              <th className="p-4 font-bold text-slate-700">Contato</th>
              <th className="p-4 font-bold text-slate-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-medium text-slate-900">{cliente.nome}</td>
                <td className="p-4">
                  <div className="text-sm text-slate-500 flex flex-col">
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {cliente.email}</span>
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {cliente.telefone}</span>
                  </div>
                </td>
                <td className="p-4"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">{cliente.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
