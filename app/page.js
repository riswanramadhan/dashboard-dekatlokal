'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulasi delay login

      router.push('/dashboard');
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-slate-100">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">DekatLokal Admin</h1>
        <p className="text-slate-500 mb-8 text-sm">Monitoring Dampak Digitalisasi UMKM</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input type="email" defaultValue="admin@rumahbumn.id" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input type="password" defaultValue="12345678" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          </div>
          <button 
            type="submit" 
            className={`w-full py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all transform active:scale-95 ${loading ? 'opacity-70 cursor-wait' : ''}`}
          >
            {loading ? 'Memuat Dashboard...' : 'Masuk Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}