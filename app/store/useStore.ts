import { create } from 'zustand';
import { AgriculturalData } from '../utils/dataLoader';

interface AppState {
  selectedMunicipio: string;
  selectedCultivo: string; // NUEVO
  data: AgriculturalData[];
  filteredData: AgriculturalData[];
  setMunicipio: (municipio: string) => void;
  setCultivo: (cultivo: string) => void; // NUEVO
  setData: (data: AgriculturalData[]) => void;
}

// Función auxiliar para filtrar
const filterData = (data: AgriculturalData[], municipio: string, cultivo: string) => {
  return data.filter(r => {
    const municipioMatch = municipio === 'Todos' || r.municipio === municipio;
    const cultivoMatch = cultivo === 'Todos' || r.cultivo === cultivo;
    return municipioMatch && cultivoMatch;
  });
};

export const useStore = create<AppState>((set, get) => ({
  selectedMunicipio: 'Todos',
  selectedCultivo: 'Todos', // NUEVO
  data: [],
  filteredData: [],
  
  setMunicipio: (municipio) => {
    const { data, selectedCultivo } = get();
    set({ selectedMunicipio: municipio });
    set({ filteredData: filterData(data, municipio, selectedCultivo) });
  },

  setCultivo: (cultivo) => { // NUEVO
    const { data, selectedMunicipio } = get();
    set({ selectedCultivo: cultivo });
    set({ filteredData: filterData(data, selectedMunicipio, cultivo) });
  },
  
  setData: (data) => set({ data, filteredData: data }),
}));