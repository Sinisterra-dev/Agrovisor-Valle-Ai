'use client';
import { useStore } from '../store/useStore';

const MUNICIPIOS = ['Todos', 'Cali', 'Palmira', 'Buga', 'Tuluá', 'Buenaventura', 'La Unión'];
const CULTIVOS = ['Todos', 'Caña de Azúcar', 'Café', 'Plátano', 'Maíz', 'Aguacate', 'Uva', 'Hortalizas', 'Chontaduro'];

export default function Filters() {
  const { selectedMunicipio, setMunicipio, selectedCultivo, setCultivo } = useStore();

  return (
    <div className="mb-6 dashboard-card">
      <h3 className="card-title">Filtros Globales</h3>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-xs">Municipio</label>
          <select 
            value={selectedMunicipio}
            onChange={(e) => setMunicipio(e.target.value)}
            className="select-compact"
          >
            {MUNICIPIOS.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 text-xs">Cultivo Principal</label>
          <select 
            value={selectedCultivo}
            onChange={(e) => setCultivo(e.target.value)}
            className="select-compact"
          >
            {CULTIVOS.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}