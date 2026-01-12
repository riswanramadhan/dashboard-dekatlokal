import StatusChart from '../charts/StatusChart';
import GrowthChart from '../charts/GrowthChart';
import { Users, CheckCircle, Laptop, Student } from '@phosphor-icons/react';

const StatCard = ({ title, value, icon: Icon, colorClass, sub }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${colorClass}`}>
        <Icon size={24} weight="fill" />
      </div>
      <span className="text-2xl font-bold text-slate-800">{value}</span>
    </div>
    <h3 className="text-sm font-medium text-slate-500">{title}</h3>
    <p className="text-xs text-slate-400 mt-1">{sub}</p>
  </div>
);

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total UMKM" value="87" icon={Users} colorClass="bg-blue-50 text-blue-600" sub="+12 bulan ini" />
        <StatCard title="Siap Digital" value="50" icon={CheckCircle} colorClass="bg-green-50 text-green-600" sub="57% dari total" />
        <StatCard title="Website Aktif" value="46" icon={Laptop} colorClass="bg-purple-50 text-purple-600" sub="Domain .com" />
        <StatCard title="Pendampingan" value="37" icon={Student} colorClass="bg-orange-50 text-orange-600" sub="Batch 3" />
      </div>

      {/* Grafik */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-4">Distribusi Status Digital</h3>
          <StatusChart />
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-4">Pertumbuhan Website</h3>
          <GrowthChart />
        </div>
      </div>
    </div>
  );
}