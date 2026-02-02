'use client';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useStore } from '../store/useStore';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#FF6B6B'];

export default function ChartPie() {
  const { filteredData } = useStore();

  const dataMap = filteredData.reduce((acc: any, curr) => {
    const cultivo = curr.cultivo;
    if (!acc[cultivo]) acc[cultivo] = { name: cultivo, value: 0 };
    acc[cultivo].value += Number(curr.produccion_ton || 0);
    return acc;
  }, {});

  // LÓGICA DE PROTECCIÓN: Solo Top 6 para la torta
  const chartData = Object.values(dataMap)
    .sort((a: any, b: any) => b.value - a.value)
    .slice(0, 6);

  return (
    <div className="flex flex-col h-[350px] dashboard-card">
      <h3 className="card-title">Participación (Top 6)</h3>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(val: number) => `${val.toLocaleString()} Ton`} />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}