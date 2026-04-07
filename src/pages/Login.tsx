import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scale, Lock, User, AlertCircle } from 'lucide-react';

export const Login = () => {
  const [initials, setInitials] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const upperInitials = initials.toUpperCase();
    
    if ((upperInitials === 'GF' || upperInitials === 'GM' || upperInitials === 'LC') && password === '1234') {
      const userData = {
        name: upperInitials === 'LC' ? 'Lienys Carvalho' : (upperInitials === 'GF' ? 'Gabriel Franca' : 'Gisele Miranda'),
        initials: upperInitials,
        role: upperInitials === 'LC' ? 'Administrador' : 'Advogado'
      };
      localStorage.setItem('legal_app_user', JSON.stringify(userData));
      navigate('/');
    } else {
      setError('Iniciais ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 space-y-8 border border-slate-100">
        <div className="text-center space-y-2">
          <div className="bg-brand-blue w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Scale className="text-brand-gold w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Acesso Restrito</h1>
          <p className="text-slate-500">Portal Franca & Miranda Advogados</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Iniciais (GF, GM ou LC)</label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                value={initials}
                onChange={(e) => setInitials(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" 
                placeholder="Ex: LC" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Senha</label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" 
                placeholder="••••" 
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-xl">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}

          <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all">
            Entrar no Sistema
          </button>
        </form>
      </div>
    </div>
  );
};
