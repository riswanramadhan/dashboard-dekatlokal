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

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-800 font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-y-auto">
        <header className="px-8 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-20 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold capitalize">{activeTab.replace('-', ' ')}</h2>
            <p className="text-xs text-slate-500 mt-1">Rumah BUMN Makassar</p>
          </div>
          <div className="px-4 py-2 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
            {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}
          </div>
        </header>

        <div className="p-8">
          {/* Efek Fade In saat ganti menu */}
          <div className="animate-fade-in-up">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}