export default function DataUMKM() {
  const dummyUMKM = [
    { name: "Kopi Daeng", cat: "F&B", status: "Siap Digital", web: "Aktif" },
    { name: "Rotan Bu Siti", cat: "Craft", status: "Pendampingan", web: "Draft" },
    { name: "Sambal Raja", cat: "F&B", status: "Siap Digital", web: "Aktif" },
    { name: "Batik Lontara", cat: "Fashion", status: "Pendampingan", web: "-" },
    { name: "Coto Express", cat: "F&B", status: "Siap Digital", web: "Aktif" },
  ];


  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-bold text-lg">Database UMKM Binaan</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Download CSV</button>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-500 font-medium">
          <tr>
            <th className="px-6 py-4">Nama UMKM</th>
            <th className="px-6 py-4">Kategori</th>
            <th className="px-6 py-4">Status Kesiapan</th>
            <th className="px-6 py-4">Status Website</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {dummyUMKM.map((item, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
              <td className="px-6 py-4 text-slate-500">{item.cat}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'Siap Digital' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 text-slate-600">{item.web}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}