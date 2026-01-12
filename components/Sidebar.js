'use client';
import { SquaresFour, Storefront, Globe, ChartLineUp, FileText, SignOut, User } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export default function Sidebar({ activeTab, setActiveTab }) {
  const router = useRouter();

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: SquaresFour },
    { id: 'umkm', label: 'Data UMKM', icon: Storefront },
    { id: 'websites', label: 'Website Aktif', icon: Globe },
    { id: 'impact', label: 'Indikator Dampak', icon: ChartLineUp },
    { id: 'reports', label: 'Laporan', icon: FileText },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full flex-shrink-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-blue-600 tracking-tight">DekatLokal</h1>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={clsx(
              'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
              activeTab === item.id 
                ? 'bg-blue-50 text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            )}
          >
            <item.icon size={20} weight={activeTab === item.id ? 'fill' : 'regular'} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <User weight="bold" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-slate-800">Admin R.BUMN</p>
            <p className="text-slate-400">Makassar</p>
          </div>
        </div>
        <button 
            onClick={() => router.push('/')}
            className="w-full flex items-center gap-2 justify-center py-2 text-xs text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <SignOut size={16} /> Keluar
        </button>
      </div>
    </aside>
  );
}