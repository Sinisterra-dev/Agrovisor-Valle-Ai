'use client';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStore } from '../store/useStore';

export default function ChartLine() {
  const { filteredData } = useStore();

  const dataMap = filteredData.reduce((acc: any, curr) => {
    const cultivo = curr.cultivo;
    if (!acc[cultivo]) acc[cultivo] = { name: cultivo, empleo: 0, exportaciones: 0 };
    acc[cultivo].empleo += Number(curr.empleo || 0);
    acc[cultivo].exportaciones += Number(curr.exportaciones_cop_millones || 0);
    return acc;
  }, {});

  // LÓGICA DE PROTECCIÓN: Top 10 por valor de exportación
  const chartData = Object.values(dataMap)
    .sort((a: any, b: any) => b.exportaciones - a.exportaciones)
    .slice(0, 10);

  if (chartData.length === 0) return <div className="flex justify-center items-center h-64 text-slate-400">Sin datos</div>;

  return (
    <div className="h-[350px] dashboard-card">
      <h3 className="card-title">Relación: Empleo vs Exportaciones (Top 10)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" tick={{fontSize: 10}} interval={0} />
          <YAxis yAxisId="left" orientation="left" stroke="#413ea0" fontSize={10} />
          <YAxis yAxisId="right" orientation="right" stroke="#ff7300" fontSize={10} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="empleo" name="Empleos" barSize={20} fill="#413ea0" />
          <Line yAxisId="right" type="monotone" dataKey="exportaciones" name="Exp. (Millones)" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}