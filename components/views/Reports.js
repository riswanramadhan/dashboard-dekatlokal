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
      <div 
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-white to-blue-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
        data-aos="fade-down"
      >
        <div>
          <h3 className="font-bold text-lg text-slate-800">Arsip Laporan</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Unduh dokumen pertanggungjawaban program</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border-2 border-slate-200 rounded-xl text-sm text-slate-600 font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 active:scale-95 order-2 sm:order-1">
            <Funnel size={18} weight="bold" /> Filter
          </button>
          <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-sm font-bold hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform active:scale-95 order-1 sm:order-2">
            + Generate Laporan
          </button>
        </div>
      </div>

      {/* List Files */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="divide-y divide-slate-100">
          {reports.map((file, idx) => (
            <div 
              key={idx} 
              className="p-5 flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group cursor-pointer border-l-4 border-transparent hover:border-blue-500"
              data-aos="fade-right"
              data-aos-delay={idx * 50}
            >
              <div className="flex items-center gap-4 flex-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${
                  file.type === 'pdf' 
                    ? 'bg-gradient-to-br from-red-100 to-red-50 text-red-600' 
                    : 'bg-gradient-to-br from-green-100 to-green-50 text-green-600'
                }`}>
                  {file.type === 'pdf' ? <FilePdf size={24} weight="fill" /> : <FileXls size={24} weight="fill" />}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">{file.title}</h4>
                  <div className="flex gap-3 text-xs text-slate-400 mt-1 font-medium">
                    <span>{file.date}</span>
                    <span>•</span>
                    <span>{file.size}</span>
                  </div>
                </div>
              </div>
              
              <button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-all duration-300 group-hover:scale-110 ml-2">
                <DownloadSimple size={22} weight="bold" />
              </button>
            </div>
          ))}
        </div>
        
        {/* Pagination Dummy */}
        <div className="p-4 border-t border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50 flex justify-center text-xs text-slate-500 font-semibold">
          Menampilkan 5 dari 24 laporan
        </div>
      </div>
    </div>
  );
}