export default function DataUMKM() {
  const dummyUMKM = [
    { name: "Kopi Daeng", cat: "F&B", status: "Siap Digital", web: "Aktif" },
    { name: "Rotan Bu Siti", cat: "Craft", status: "Pendampingan", web: "Draft" },
    { name: "Sambal Raja", cat: "F&B", status: "Siap Digital", web: "Aktif" },
    { name: "Batik Lontara", cat: "Fashion", status: "Pendampingan", web: "-" },
    { name: "Coto Express", cat: "F&B", status: "Siap Digital", web: "Aktif" },
  ];

  return (
    <div 
      className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow"
      data-aos="fade-up"
    >
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-slate-50 to-white">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Database UMKM Binaan</h3>
          <p className="text-xs text-slate-500 mt-1">Total 87 UMKM Makassar</p>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform active:scale-95 w-full sm:w-auto">
          Download CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-100">
            <tr>
              <th className="px-6 py-4">Nama UMKM</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Status Kesiapan</th>
              <th className="px-6 py-4">Status Website</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {dummyUMKM.map((item, idx) => (
              <tr 
                key={idx} 
                className="hover:bg-blue-50 transition-colors duration-200 group"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <td className="px-6 py-4 font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</td>
                <td className="px-6 py-4 text-slate-500 font-medium">{item.cat}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${
                    item.status === 'Siap Digital' 
                      ? 'bg-green-100 text-green-700 border border-green-300' 
                      : 'bg-orange-100 text-orange-700 border border-orange-300'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${item.status === 'Siap Digital' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {item.web === 'Aktif' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-semibold border border-green-200">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      {item.web}
                    </span>
                  ) : (
                    <span className="text-slate-400 font-medium">{item.web}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
        Menampilkan 5 dari 87 data UMKM
      </div>
    </div>
  );
}