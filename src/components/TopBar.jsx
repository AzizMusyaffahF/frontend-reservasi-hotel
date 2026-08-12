// src/components/TopBar.jsx
import { Search, Bell } from 'lucide-react';
import hertaProfile from '../assets/herta-0.png';

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-[72px] bg-slate-50/90 backdrop-blur-md px-4 md:px-6 z-20 border-b border-slate-200/80 flex items-center justify-between gap-2 md:gap-4">
      
      {/* SearchBar */}
      <div className="relative flex-1 max-w-xs md:max-w-sm pl-10 md:pl-0">
        <span className="absolute inset-y-0 left-13 md:left-3 flex items-center text-slate-400 pointer-events-none">
          <Search size={16} />
        </span>
        <input 
          type="text" 
          placeholder="Cari sesuatu..." 
          className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
        />
      </div>

      {/* UserBlock */}
      <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
        {/* Tombol Notifikasi */}
        <button className="relative text-slate-600 hover:text-slate-800 p-2 rounded-lg hover:bg-slate-200/50 transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profil Pengguna */}
        <div className="flex items-center space-x-2 md:space-x-3 pl-2 md:pl-4 border-l border-slate-200">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-200 overflow-hidden flex-shrink-0 shadow-sm">
            <img src={hertaProfile} alt="Admin" className="w-full h-full object-cover" />
          </div>
          {/* Teks nama disembunyikan di layar sangat sempit (mobile), muncul di md:block */}
          <div className="text-left hidden md:block">
            <p className="text-xs font-semibold text-slate-800 leading-tight">FO_Dewi</p>
            <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Staff</p>
          </div>
        </div>
      </div>

    </header>
  );
}
              <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Staff</p>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
