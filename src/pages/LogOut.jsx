import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

function LogOut() {
    const navigate = useNavigate();

    useEffect(() => {
        // 1. Hapus token dari localStorage
        localStorage.removeItem("token");

        // 2. Beri jeda sebentar (contoh: 1 detik) agar proses terasa mulus
        const timer = setTimeout(() => {
            navigate('/login');
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-[#07111e] flex flex-col items-center justify-center text-white p-4">
            <div className="flex flex-col items-center gap-4 bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl max-w-sm w-full text-center">
                <Loader2 size={40} className="animate-spin text-[#C5A059]" />
                <div>
                    <h1 className="text-xl font-medium text-white mb-1">Logging Out...</h1>
                    <p className="text-gray-400 text-sm">Sedang mengeluarkan Anda dari sistem...</p>
                </div>
            </div>
        </div>
    );
}

export default LogOut;
