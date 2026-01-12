import { ArrowSquareOut } from '@phosphor-icons/react';

export default function Websites() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
          <div className="h-32 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-slate-300">
            {/* Placeholder Thumbnail Website */}
            <span className="text-xs font-medium">Preview Website {i}</span>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-slate-800">umkm-{i}.dekatlokal.com</h4>
              <p className="text-xs text-slate-500 mt-1">Updated 2h ago</p>
            </div>
            <button className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowSquareOut size={20} />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-lg w-fit">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            Online
          </div>
        </div>
      ))}
    </div>
  );
}