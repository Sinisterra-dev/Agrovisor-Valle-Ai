'use client';
import { useEffect } from 'react';
import { useStore } from './store/useStore';
import { loadCSVData } from './utils/dataLoader';
import Filters from './components/Filters';
import MapViewer from './components/MapViewer';
import KpiGrid from './components/KpiGrid';
import ChartBar from './components/ChartBar';
import ChartPie from './components/ChartPie';
import ChartLine from './components/ChartLine'; // El nuevo gráfico
import TopCultivos from './components/TopCultivos';
import { BotMessageSquare } from 'lucide-react';

export default function Home() {
  const { setData } = useStore();

  useEffect(() => {
    loadCSVData('/data/datos_agricolas.csv')
      .then(setData)
      .catch(err => console.error("Error:", err));
  }, [setData]);

  return (
    <main className="bg-slate-100 mx-auto p-4 md:p-6 max-w-[1600px] min-h-screen">
      
      {/* --- HEADER --- */}
      <header className="flex md:flex-row flex-col justify-between items-center bg-white shadow-sm mb-6 p-4 border border-slate-200 rounded-xl">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🌱</span>
          <div>
            <h1 className="font-bold text-slate-800 text-xl">AGROVISOR VALLE</h1>
            <p className="text-slate-500 text-xs">Hackatón 2025 • Inteligencia de Datos</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 shadow-sm mt-4 md:mt-0 px-4 py-2 rounded-lg font-medium text-white text-sm transition-all">
           <BotMessageSquare size={18} /> Asistente IA
        </button>
      </header>

      {/* --- SECCIÓN DE CONTROL (FILTROS + KPIS) --- */}
      <section className="flex flex-col gap-6 mb-6">
        {/* 1. Filtros */}
        <Filters />
        
        {/* 2. KPIs (Ahora ocupan todo el ancho, debajo de filtros) */}
        <KpiGrid />
      </section>

      {/* --- GRILLA DE CONTENIDO PRINCIPAL --- */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-12">
        
        {/* COLUMNA IZQUIERDA (35%): Mapa y Listas */}
        <div className="flex flex-col gap-6 lg:col-span-4">
           {/* Mapa */}
          <div className="p-2 h-[400px] dashboard-card">
             <MapViewer />
          </div>
          
          {/* Top 5 */}
          <TopCultivos />
        </div>

        {/* COLUMNA DERECHA (65%): Visualizaciones Gráficas */}
        <div className="flex flex-col gap-6 lg:col-span-8">
          
          {/* Fila Superior de Gráficos */}
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
             {/* Gráfico de Barras (Producción) */}
             <div className="h-[350px]">
                <ChartBar />
             </div>
             {/* Gráfico de Torta (Distribución) */}
             <div className="h-[350px]">
                <ChartPie />
             </div>
          </div>

          {/* Gráfico de Líneas (Ancho completo abajo) */}
          <div className="w-full">
             <ChartLine />
          </div>
          
        </div>
      </div>

      <footer className="mt-12 pb-4 text-slate-400 text-xs text-center">
        &copy; 2025 AgroVisor Valle - Gobernación del Valle del Cauca
      </footer>
    </main>
  );
}