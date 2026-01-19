import { ArrowSquareOut } from '@phosphor-icons/react';

export default function Websites() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div 
          key={i} 
          className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group transform hover:-translate-y-2 hover:scale-105"
          data-aos="zoom-in"
          data-aos-delay={i * 50}
        >
          <div className="relative h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-4 flex items-center justify-center text-slate-400 overflow-hidden group-hover:from-slate-200 group-hover:to-slate-300 transition-colors">
            {/* Placeholder Thumbnail Website */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <span className="text-xs font-bold text-slate-500 relative z-10">Preview Website {i}</span>
          </div>
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">umkm-{i}.dekatlokal.com</h4>
              <p className="text-xs text-slate-400 mt-1 font-medium">Updated 2h ago</p>
            </div>
            <button className="text-slate-300 group-hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
              <ArrowSquareOut size={20} weight="bold" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-600 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2 rounded-lg w-fit border border-green-200 font-semibold">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Online
          </div>
        </div>
      ))}
    </div>
  );
}