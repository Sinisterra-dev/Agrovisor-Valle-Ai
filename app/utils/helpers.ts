export const normalizeMunicipio = (nombre: string): string => {
  if (!nombre || nombre === 'Todos') return 'valle_general';
  return nombre
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quitar tildes
    .toLowerCase().trim()
    .replace(/\s+/g, "_").replace(/ñ/g, "n");
};

export const formatCOP = (valor: number) => {
  // Multiplicamos por 1 millón porque el CSV viene en "millones"
  return new Intl.NumberFormat('es-CO', {
    style: 'currency', currency: 'COP',
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(valor * 1000000);
};

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('es-CO').format(num);
};