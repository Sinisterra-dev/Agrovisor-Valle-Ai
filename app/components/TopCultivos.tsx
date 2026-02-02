'use client';
import { useStore } from '../store/useStore';
import { formatNumber } from '../utils/helpers';

export default function TopCultivos() {
  const { filteredData } = useStore();

  // Agrupar y ordenar
  const dataMap = filteredData.reduce((acc: any, curr) => {
    const cultivo = curr.cultivo;
    const produccion = Number(curr.produccion_ton || 0);
    if (!acc[cultivo]) acc[cultivo] = { name: cultivo, produccion: 0 };
    acc[cultivo].produccion += produccion;
    return acc;
  }, {});

  const top5 = Object.values(dataMap)
    .sort((a: any, b: any) => b.produccion - a.produccion)
    .slice(0, 5);

  if (top5.length === 0) return null;

  return (
    <div className="dashboard-card">
      <h3 className="card-title">Top 5 Cultivos (Producción)</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 font-medium text-slate-500 text-left">#</th>
              <th className="px-4 py-2 font-medium text-slate-500 text-left">Cultivo</th>
              <th className="px-4 py-2 font-medium text-slate-500 text-right">Producción (Ton)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {top5.map((item: any, index) => (
              <tr key={item.name} className="hover:bg-slate-50/50">
                <td className="px-4 py-2 font-medium text-slate-900">{index + 1}</td>
                <td className="px-4 py-2 text-slate-700">{item.name}</td>
                <td className="px-4 py-2 font-bold text-emerald-600 text-right">
                  {formatNumber(item.produccion)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
