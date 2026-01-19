'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Overview from '@/components/views/Overview';
import DataUMKM from '@/components/views/DataUMKM';
import Websites from '@/components/views/Websites';
import Impact from '@/components/views/Impact';
import Reports from '@/components/views/Reports';

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('overview');

  // Render konten berdasarkan menu yang dipilih
  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview />;
      case 'umkm': return <DataUMKM />;
      case 'websites': return <Websites />;
      case 'impact': return <Impact />;
      case 'reports': return <Reports />;
      default: return <Overview />;
    }
  };

  const getTitleFromTab = () => {
    const titles = {
      'overview': 'Dashboard',
      'umkm': 'Data UMKM',
      'websites': 'Website Aktif',
      'impact': 'Indikator Dampak',
      'reports': 'Laporan'
    };
    return titles[activeTab] || 'Dashboard';
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden text-slate-800 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto flex flex-col md:ml-0">
        <header className="hidden md:flex px-6 md:px-8 py-4 md:py-6 bg-white/60 backdrop-blur-xl sticky top-0 z-20 border-b border-slate-200/50 shadow-sm items-center justify-between">
          <div data-aos="fade-down">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{getTitleFromTab()}</h2>
            <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">Rumah BUMN Makassar</p>
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full text-xs font-bold text-slate-700 border border-blue-200">
            {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        {/* Mobile Header */}
        <div className="md:hidden px-4 py-4 bg-white border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">{getTitleFromTab()}</h2>
          <p className="text-xs text-slate-500 mt-1">Rumah BUMN Makassar</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          {/* Efek Fade In saat ganti menu */}
          <div className="animate-fade-in-up">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}