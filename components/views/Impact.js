'use client';
import MaturityChart from '../charts/MaturityChart';
import { TrendUp, UsersThree, GlobeHemisphereWest, Smiley } from '@phosphor-icons/react';

const ImpactCard = ({ label, value, sub, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
    <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-${color.split('-')[1]}-600`}>
      <Icon size={24} weight="fill" className={color.replace('bg-', 'text-')} />
    </div>
    <div>
      <p className="text-slate-500 text-sm font-medium mb-1">{label}</p>
      <h4 className="text-2xl font-bold text-slate-800">{value}</h4>
      <p className="text-xs text-green-600 font-medium flex items-center gap-1 mt-1">
        <TrendUp weight="bold" /> {sub}
      </p>
    </div>
  </div>
);

export default function Impact() {
  return (
    <div className="space-y-6">
      
      {/* 1. Header Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ImpactCard 
          label="Kenaikan Omset Rata-rata" 
          value="45%" 
          sub="Dibanding tahun lalu"
          icon={TrendUp}
          color="bg-green-100 text-green-600"
        />
        <ImpactCard 
          label="Jangkauan Luar Pulau" 
          value="28 UMKM" 
          sub="Ekspansi pasar baru"
          icon={GlobeHemisphereWest}
          color="bg-blue-100 text-blue-600"
        />
        <ImpactCard 
          label="Kepuasan Peserta" 
          value="4.8/5.0" 
          sub="Berdasarkan survei akhir"
          icon={Smiley}
          color="bg-yellow-100 text-yellow-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 2. Chart Kematangan Digital */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="mb-6">
            <h3 className="font-bold text-lg text-slate-800">Evolusi Kompetensi Digital</h3>
            <p className="text-sm text-slate-500">Perbandingan skor rata-rata pre-test vs post-test</p>
          </div>
          <MaturityChart />
        </div>

        {/* 3. Qualitative Stories / Testimoni */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <div className="mb-4">
            <h3 className="font-bold text-lg text-slate-800">Suara UMKM</h3>
            <p className="text-sm text-slate-500">Dampak nyata yang dirasakan peserta</p>
          </div>
          
          <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {[
              { name: "Ibu Rahma", brand: "Sambal Raja", text: "Sejak website aktif, pesanan dari Jawa mulai masuk. Sebelumnya hanya jual ke tetangga." },
              { name: "Pak Budi", brand: "Kopi Daeng", text: "Sistem pencatatan keuangan digital sangat membantu saya merapikan cashflow usaha." },
              { name: "Kak Tika", brand: "Craft Rotan", text: "Desain logo baru membuat produk saya terlihat lebih premium dan layak ekspor." },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-slate-600 italic text-sm mb-3">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold text-blue-700">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{item.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wide">{item.brand}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}