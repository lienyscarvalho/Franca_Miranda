import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => (
  <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-all">
    <Sun className="w-5 h-5 block dark:hidden" />
    <Moon className="w-5 h-5 hidden dark:block" />
  </button>
);
