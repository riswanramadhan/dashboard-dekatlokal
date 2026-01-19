'use client';
import { SquaresFour, Storefront, Globe, ChartLineUp, FileText, SignOut, User, CaretDown } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: SquaresFour },
    { id: 'umkm', label: 'Data UMKM', icon: Storefront },
    { id: 'websites', label: 'Website Aktif', icon: Globe },
    { id: 'impact', label: 'Indikator Dampak', icon: ChartLineUp },
    { id: 'reports', label: 'Laporan', icon: FileText },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-30 flex items-center justify-between px-4 py-4">
        <h1 className="text-lg font-bold text-blue-600">DekatLokal</h1>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-10"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={clsx(
        'fixed md:relative w-64 bg-white border-r border-slate-200 flex flex-col h-screen md:h-full z-20 transition-transform duration-300 md:translate-x-0',
        isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      )}>
        {/* Logo - Hidden on Mobile, shown via Header */}
        <div className="hidden md:flex p-6 border-b border-slate-200">
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent tracking-tight">DekatLokal</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-bold">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 md:px-4 space-y-1 pt-20 md:pt-0 pb-4 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileOpen(false);
              }}
              className={clsx(
                'w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 group',
                activeTab === item.id 
                  ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-md border border-blue-200' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border border-transparent'
              )}
            >
              <item.icon 
                size={20} 
                weight={activeTab === item.id ? 'fill' : 'regular'}
                className={activeTab === item.id ? 'group-hover:scale-110' : 'group-hover:scale-105'}
              />
              <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-slate-200 bg-gradient-to-t from-slate-50 to-white">
          <div className="flex items-center gap-3 mb-4 px-2 bg-white rounded-lg p-3 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              <User weight="bold" size={18} />
            </div>
            <div className="text-xs flex-1 min-w-0">
              <p className="font-bold text-slate-800 truncate">Admin R.BUMN</p>
              <p className="text-slate-400 text-[10px] truncate">Makassar</p>
            </div>
          </div>
          <button 
            onClick={() => router.push('/')}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-sm text-red-500 font-semibold hover:bg-red-50 rounded-lg transition-all duration-300 border border-red-200 hover:border-red-300"
          >
            <SignOut size={16} weight="bold" /> Keluar
          </button>
        </div>
      </aside>
    </>
  );
}