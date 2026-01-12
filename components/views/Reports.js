'use client';
import { FilePdf, FileXls, DownloadSimple, Funnel } from '@phosphor-icons/react';

export default function Reports() {
  const reports = [
    { title: "Laporan Dampak Program Batch 3", date: "10 Jan 2026", size: "2.4 MB", type: "pdf" },
    { title: "Database Lengkap UMKM Makassar", date: "08 Jan 2026", size: "1.8 MB", type: "xls" },
    { title: "Rekapitulasi Traffic Website Q4 2025", date: "01 Jan 2026", size: "3.2 MB", type: "pdf" },
    { title: "Laporan Keuangan Program 2025", date: "30 Des 2025", size: "5.1 MB", type: "pdf" },
    { title: "Absensi Peserta Pelatihan", date: "28 Des 2025", size: "800 KB", type: "xls" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div>
          <h3 className="font-bold text-slate-800">Arsip Laporan</h3>
          <p className="text-xs text-slate-500">Unduh dokumen pertanggungjawaban program</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors">
            <Funnel size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Generate Laporan Baru
          </button>
        </div>
      </div>

      {/* List Files */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {reports.map((file, idx) => (
            <div key={idx} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  file.type === 'pdf' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'
                }`}>
                  {file.type === 'pdf' ? <FilePdf size={24} weight="fill" /> : <FileXls size={24} weight="fill" />}
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors">{file.title}</h4>
                  <div className="flex gap-3 text-xs text-slate-400 mt-1">
                    <span>{file.date}</span>
                    <span>•</span>
                    <span>{file.size}</span>
                  </div>
                </div>
              </div>
              
              <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
                <DownloadSimple size={20} weight="bold" />
              </button>
            </div>
          ))}
        </div>
        
        {/* Pagination Dummy */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-center text-xs text-slate-500">
          Menampilkan 5 dari 24 laporan
        </div>
      </div>
    </div>
  );
}