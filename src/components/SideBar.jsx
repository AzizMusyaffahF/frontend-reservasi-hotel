import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }) => 
        isActive
            ? "flex items-center gap-3 py-2.5 px-4 rounded-xl text-sm bg-gradient-to-r from-[#C5A059] to-[#DFC28E] text-[#07111E] font-medium shadow-md" 
            : "flex items-center gap-3 py-2.5 px-4 rounded-xl text-sm text-gray-300 hover:bg-white/5 transition-colors";

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Tombol Hamburger (Hanya muncul di Mobile) */}
            <button 
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#07111e] text-white border border-white/10 shadow-lg"
                aria-label="Toggle Navigation"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Backdrop / Overlay Hitam saat Sidebar Terbuka di Mobile */}
            {isOpen && (
                <div 
                    onClick={toggleSidebar}
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity"
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
                fixed top-0 left-0 h-screen bg-[#07111e] text-white z-40
                w-64 flex flex-col justify-between py-6
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0
            `}>
                <div>
                    {/* Logo Header */}
                    <div className="mb-8 text-center px-4">
                        <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold text-[#07111E]">
                            ✦
                        </div> 
                        <h1 className="text-[11px] tracking-widest font-serif text-[#C5A059]">GRAND NUSANTARA</h1>
                        <p className="text-[9px] tracking-widest text-[#C5A059]">HOTEL ✩✩✩✩✩</p>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="w-full px-3 space-y-1">
                        <NavLink to="/dashboard" onClick={() => setIsOpen(false)} className={navLinkClass}>
                            <LayoutDashboard size={18} /> Dashboard
                        </NavLink>
                        <NavLink to="/rooms" onClick={() => setIsOpen(false)} className={navLinkClass}>
                            <BedDouble size={18} /> Room Management
                        </NavLink>
                        <NavLink to="/guests" onClick={() => setIsOpen(false)} className={navLinkClass}>
                            <Users size={18} /> Guest Directory
                        </NavLink>
                        <NavLink to="/reservations" onClick={() => setIsOpen(false)} className={navLinkClass}>
                            <Calendar size={18} /> Reservations
                        </NavLink>
                        <NavLink to="/check-in" onClick={() => setIsOpen(false)} className={navLinkClass}>
                            <ArrowDownLeft size={18} /> Check-In
                        </NavLink>
                        <NavLink to="/check-out" onClick={() => setIsOpen(false)} className={navLinkClass}>
                            <ArrowUpRight size={18} /> Check-Out
                        </NavLink>
                        <NavLink to="/settings" onClick={() => setIsOpen(false)} className={navLinkClass}>
                            <Settings size={18} /> Settings
                        </NavLink>
                    </nav>
                </div>

                {/* Logout Button */}
                <div className="px-3">
                    <NavLink to="/logout" onClick={() => setIsOpen(false)} className={navLinkClass}> 
                        <LogOut size={18} /> Sign Out
                    </NavLink>
                </div>
            </aside>
        </>
    );
}

export default SideBar;
                    </NavLink>
                    <NavLink to="/rooms" className={navLinkClass}>
                        <BedDouble size={18} /> Room Management
                    </NavLink>
                    <NavLink to="/guests" className={navLinkClass}>
                        <Users size={18} /> Guest Directory
                    </NavLink>
                    <NavLink to="/reservations" className={navLinkClass}>
                        <Calendar size={18} /> Reservations
                    </NavLink>
                    <NavLink to="/check-in" className={navLinkClass}>
                        <ArrowDownLeft size={18} /> Check-In
                    </NavLink>
                    <NavLink to="/check-out" className={navLinkClass}>
                        <ArrowUpRight size={18} /> Check-Out
                    </NavLink>
                    <NavLink to="/settings" className={navLinkClass}>
                        <Settings size={18} /> Settings
                    </NavLink>
                </nav>
            </div>

            {/* Logout Button */}
            <div className="px-3">
                {/* Next Ganti Button open window confirmation Signout */}
                <NavLink to="/logout" className={navLinkClass}> 
                    <LogOut size={18} /> Sign Out
                </NavLink>
            </div>
        </aside>
    );
}

export default SideBar;
