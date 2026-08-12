// src/components/TopBar.jsx
import { Search, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-10 w-full h-[72px] bg-slate-50 px-6 box-border flex justify-between items-center">
      
      {/* SearchBar */}
      <div className="relative w-108 ml-12 md:ml-0">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
          <Search size={16} />
        </span>
        <input 
          type="text" 
          placeholder="Cari sesuatu..." 
          className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
        />
      </div>
    </header>
  );
}