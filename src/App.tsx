import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar, Header } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Processos } from './pages/Processos';
import { Clientes } from './pages/Clientes';
import { Settings } from './pages/Settings';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem('legal_app_user');
  return user ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={
          <PrivateRoute>
            <div className="flex min-h-screen bg-slate-50">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-4 md:p-8">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/processos" element={<Processos />} />
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/contato" element={<Contact />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </div>
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
