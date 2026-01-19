'use client';
import MaturityChart from '../charts/MaturityChart';
import { TrendUp, UsersThree, GlobeHemisphereWest, Smiley } from '@phosphor-icons/react';

const ImpactCard = ({ label, value, sub, icon: Icon, color, delay }) => (
  <div 
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex items-start gap-4 group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className={`p-3 rounded-xl ${color} group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
      <Icon size={24} weight="fill" className={color.replace('bg-', 'text-')} />
    </div>
    <div className="flex-1">
      <p className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wide">{label}</p>
      <h4 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{value}</h4>
      <p className="text-xs text-green-600 font-semibold flex items-center gap-1 mt-2">
        <TrendUp weight="bold" size={14} /> {sub}
      </p>
    </div>
  </div>
);

export default function Impact() {
  return (
    <div className="space-y-8">
      
      {/* 1. Header Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ImpactCard 
          label="Kenaikan Omset Rata-rata" 
          value="45%" 
          sub="Dibanding tahun lalu"
          icon={TrendUp}
          color="bg-gradient-to-br from-green-100 to-emerald-100 text-green-600"
          delay="0"
        />
        <ImpactCard 
          label="Jangkauan Luar Pulau" 
          value="28" 
          sub="Ekspansi pasar baru"
          icon={GlobeHemisphereWest}
          color="bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600"
          delay="100"
        />
        <ImpactCard 
          label="Kepuasan Peserta" 
          value="4.8/5" 
          sub="Berdasarkan survei akhir"
          icon={Smiley}
          color="bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-600"
          delay="200"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 2. Chart Kematangan Digital */}
        <div 
          className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="mb-6">
            <h3 className="font-bold text-lg text-slate-800">Evolusi Kompetensi Digital</h3>
            <p className="text-sm text-slate-500 mt-1">Perbandingan skor rata-rata pre-test vs post-test</p>
          </div>
          <MaturityChart />
        </div>

        {/* 3. Qualitative Stories / Testimoni */}
        <div 
          className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="mb-4">
            <h3 className="font-bold text-lg text-slate-800">Suara UMKM</h3>
            <p className="text-sm text-slate-500 mt-1">Dampak nyata yang dirasakan peserta</p>
          </div>
          
          <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
            {[
              { name: "Ibu Rahma", brand: "Sambal Raja", text: "Sejak website aktif, pesanan dari Jawa mulai masuk. Sebelumnya hanya jual ke tetangga." },
              { name: "Pak Budi", brand: "Kopi Daeng", text: "Sistem pencatatan keuangan digital sangat membantu saya merapikan cashflow usaha." },
              { name: "Kak Tika", brand: "Craft Rotan", text: "Desain logo baru membuat produk saya terlihat lebih premium dan layak ekspor." },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:border-blue-300 transition-colors group hover:shadow-sm"
                data-aos="fade-up"
                data-aos-delay={300 + idx * 50}
              >
                <p className="text-slate-700 italic text-sm mb-3 font-medium">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-xs font-bold text-white group-hover:scale-110 transition-transform">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{item.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">{item.brand}</p>
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