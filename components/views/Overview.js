import StatusChart from '../charts/StatusChart';
import GrowthChart from '../charts/GrowthChart';
import { Users, CheckCircle, Laptop, Student } from '@phosphor-icons/react';

const StatCard = ({ title, value, icon: Icon, colorClass, sub, delay }) => (
  <div 
    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 transform hover:-translate-y-1 group"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={24} weight="fill" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">{value}</span>
    </div>
    <h3 className="text-sm font-medium text-slate-600">{title}</h3>
    <p className="text-xs text-slate-400 mt-2 font-medium">{sub}</p>
  </div>
);

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard title="Total UMKM" value="87" icon={Users} colorClass="bg-blue-100 text-blue-600" sub="+12 bulan ini" delay="0" />
        <StatCard title="Siap Digital" value="50" icon={CheckCircle} colorClass="bg-green-100 text-green-600" sub="57% dari total" delay="100" />
        <StatCard title="Website Aktif" value="46" icon={Laptop} colorClass="bg-purple-100 text-purple-600" sub="Domain .com" delay="200" />
        <StatCard title="Pendampingan" value="37" icon={Student} colorClass="bg-orange-100 text-orange-600" sub="Batch 3" delay="300" />
      </div>

      {/* Grafik */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div 
          className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h3 className="font-semibold text-slate-800 mb-4">Distribusi Status Digital</h3>
          <StatusChart />
        </div>
        <div 
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h3 className="font-semibold text-slate-800 mb-4">Pertumbuhan Website</h3>
          <GrowthChart />
        </div>
      </div>
    </div>
  );
}