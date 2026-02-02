'use client';
import { useStore } from '../store/useStore';
import { formatCOP, formatNumber } from '../utils/helpers';

export default function KpiGrid() {
  const { filteredData } = useStore();
  
  // Sumatorias
  const totalProd = filteredData.reduce((a, b) => a + Number(b.produccion_ton || 0), 0);
  const totalEmpleo = filteredData.reduce((a, b) => a + Number(b.empleo || 0), 0);
  const totalExp = filteredData.reduce((a, b) => a + Number(b.exportaciones_cop_millones || 0), 0);

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-3 mb-6">
      <div className="bg-emerald-50 shadow-sm p-6 border border-emerald-100 rounded-xl">
        <p className="font-bold text-emerald-800 text-xs uppercase tracking-wide">Producción Total</p>
        <p className="mt-1 font-black text-emerald-900 text-2xl">{formatNumber(totalProd)} Ton</p>
      </div>
      <div className="bg-blue-50 shadow-sm p-6 border border-blue-100 rounded-xl">
        <p className="font-bold text-blue-800 text-xs uppercase tracking-wide">Empleo Generado</p>
        <p className="mt-1 font-black text-blue-900 text-2xl">{formatNumber(totalEmpleo)}</p>
      </div>
      <div className="bg-amber-50 shadow-sm p-6 border border-amber-100 rounded-xl">
        <p className="font-bold text-amber-800 text-xs uppercase tracking-wide">Exportaciones (COP)</p>
        <p className="mt-1 font-black text-amber-900 text-xl md:text-2xl truncate" title={formatCOP(totalExp)}>
            {formatCOP(totalExp)}
        </p>
      </div>
    </div>
  );
}
