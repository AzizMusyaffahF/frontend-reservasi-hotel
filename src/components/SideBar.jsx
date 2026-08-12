// /src/components/SideBar.jsx
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    BedDouble,
    Users,
    Calendar,
    ArrowDownLeft,
    ArrowUpRight,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';

// Jika nanti butuh panggil API logout, import instance api kamu:
// import api from '../api/api'; 

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const navigate = useNavigate();

    const navLinkClass = ({ isActive }) => 
        isActive
            ? "flex items-center gap-3 py-2.5 px-4 rounded-xl text-sm bg-gradient-to-r from-[#C5A059] to-[#DFC28E] text-[#07111E] font-medium shadow-md" 
            : "flex items-center gap-3 py-2.5 px-4 rounded-xl text-sm text-gray-300 hover:bg-white/5 transition-colors";

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleLogoutConfirm = async () => {
        // (OPSIONAL): Buka komentar di bawah jika backend punya endpoint '/logout'
        /*
        try {
            await api.post('/logout'); // Memberitahu backend untuk mem-blacklist token
        } catch (error) {
            console.error("Gagal memanggil API logout:", error);
        }
        */

        // 1. Hapus token dari storage (Langkah Wajib Frontend)
        localStorage.removeItem("token");
        
        // 2. Tutup Modal
        setIsLogoutModalOpen(false);
        
        // 3. Arahkan kembali ke halaman login
        navigate('/login');
    };

    return (
        <>
            {/* --- SIDEBAR TOGGLE (Mobile) --- */}
            <button 
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#07111e] text-white border border-white/10 shadow-lg"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Backdrop Sidebar Mobile */}
            {isOpen && (
                <div 
                    onClick={toggleSidebar} 
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity" 
                />
            )}

            {/* --- SIDEBAR CONTENT --- */}
            <aside className={`fixed top-0 left-0 h-screen bg-[#07111e] text-white z-40 w-64 flex flex-col justify-between py-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div>
                    <div className="mb-8 text-center px-4">
                        <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold text-[#07111E]">✦</div> 
                        <h1 className="text-[11px] tracking-widest font-serif text-[#C5A059]">GRAND NUSANTARA</h1>
                        <p className="text-[9px] tracking-widest text-[#C5A059]">HOTEL ✩✩✩✩✩</p>
                    </div>

                    <nav className="w-full px-3 space-y-1">
                        <NavLink to="/dashboard" onClick={() => setIsOpen(false)} className={navLinkClass}><LayoutDashboard size={18} /> Dashboard</NavLink>
                        <NavLink to="/rooms" onClick={() => setIsOpen(false)} className={navLinkClass}><BedDouble size={18} /> Room Management</NavLink>
                        <NavLink to="/guests" onClick={() => setIsOpen(false)} className={navLinkClass}><Users size={18} /> Guest Directory</NavLink>
                        <NavLink to="/reservations" onClick={() => setIsOpen(false)} className={navLinkClass}><Calendar size={18} /> Reservations</NavLink>
                        <NavLink to="/check-in" onClick={() => setIsOpen(false)} className={navLinkClass}><ArrowDownLeft size={18} /> Check-In</NavLink>
                        <NavLink to="/check-out" onClick={() => setIsOpen(false)} className={navLinkClass}><ArrowUpRight size={18} /> Check-Out</NavLink>
                        <NavLink to="/settings" onClick={() => setIsOpen(false)} className={navLinkClass}><Settings size={18} /> Settings</NavLink>
                    </nav>
                </div>

                <div className="px-3">
                    <button 
                        onClick={() => setIsLogoutModalOpen(true)}
                        className="w-full flex items-center gap-3 py-2.5 px-4 rounded-xl text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                    > 
                        <LogOut size={18} /> Sign Out
                    </button>
                </div>
            </aside>

            {/* --- LOGOUT MODAL (Custom) --- */}
            {isLogoutModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsLogoutModalOpen(false)}></div>
                    <div className="relative bg-[#07111e] border border-white/10 p-6 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
                        <h2 className="text-white font-medium text-lg mb-2">Sign Out</h2>
                        <p className="text-gray-400 text-sm mb-6">Are you sure wanna out from the system?</p>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setIsLogoutModalOpen(false)}
                                className="flex-1 py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleLogoutConfirm}
                                className="flex-1 py-2.5 rounded-lg bg-[#C5A059] text-[#07111E] font-semibold hover:bg-[#DFC28E] transition-colors"
                            >
                                Yes, Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SideBar;
