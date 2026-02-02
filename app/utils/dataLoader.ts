import Papa from 'papaparse';

export interface AgriculturalData {
  municipio: string;
  cultivo: string;
  produccion_ton: string;
  empleo: string;
  exportaciones_cop_millones: string;
  anio: string;
}

export const loadCSVData = async (url: string): Promise<AgriculturalData[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(url, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data as AgriculturalData[]),
      error: (error) => reject(error),
    });
  });
};
