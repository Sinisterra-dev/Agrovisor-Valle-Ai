'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useStore } from '../store/useStore';

export default function ChartBar() {
  const { filteredData } = useStore();

  const dataMap = filteredData.reduce((acc: any, curr) => {
    const cultivo = curr.cultivo;
    const produccion = Number(curr.produccion_ton || 0);
    if (!acc[cultivo]) acc[cultivo] = { name: cultivo, produccion: 0 };
    acc[cultivo].produccion += produccion;
    return acc;
  }, {});

  // LÓGICA DE PROTECCIÓN: Ordenar por mayor producción y tomar solo el Top 10
  const chartData = Object.values(dataMap)
    .sort((a: any, b: any) => b.produccion - a.produccion) // Ordenar descendente
    .slice(0, 10); // <--- AQUÍ ESTÁ EL LÍMITE MÁGICO

  if (chartData.length === 0) return <div className="flex justify-center items-center h-64 text-slate-400">Sin datos</div>;

  return (
    <div className="h-[350px] dashboard-card">
      <h3 className="card-title">Top 10 Cultivos (Producción)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          {/* interval={0} fuerza a mostrar todas las etiquetas, angle rota el texto si es largo */}
          <XAxis dataKey="name" tick={{fontSize: 10}} interval={0} angle={-20} textAnchor="end" height={60} />
          <YAxis tick={{fontSize: 10}} />
          <Tooltip formatter={(value: number) => [`${value.toLocaleString()} Ton`, 'Producción']} />
          <Legend wrapperStyle={{paddingTop: '20px'}} />
          <Bar dataKey="produccion" fill="#10b981" radius={[4, 4, 0, 0]} name="Producción" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}