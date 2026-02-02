'use client';
import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { normalizeMunicipio } from '../utils/helpers';
import { motion, AnimatePresence } from 'framer-motion';

export default function MapViewer() {
  const { selectedMunicipio } = useStore();
  // Ahora el estado inicial apunta al archivo .webp
  const [imgSrc, setImgSrc] = useState('/maps/valle_general.webp');

  useEffect(() => {
    // Normalizamos el nombre (ej: "Tuluá" -> "tulua") y agregamos .webp
    const path = `/maps/${normalizeMunicipio(selectedMunicipio)}.webp`;
    setImgSrc(path);
  }, [selectedMunicipio]);

  return (
    <div className="group relative bg-white shadow-lg border border-gray-200 rounded-xl h-96 overflow-hidden">
      {/* Etiqueta flotante con el nombre */}
      <div className="top-4 left-4 z-10 absolute">
        <span className="flex items-center gap-2 bg-white/90 shadow-md backdrop-blur-sm px-4 py-2 rounded-lg font-bold text-green-900 text-sm">
          📍 {selectedMunicipio}
        </span>
      </div>

      {/* Contenedor de la imagen con animación */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={imgSrc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-100 w-full h-full"
        >
          {/* Usamos <img> estándar. 
              object-cover: La imagen llena todo el cuadro (recorta bordes si es necesario).
              object-contain: Muestra la imagen completa (deja bordes vacíos).
              Para mapas reales, 'object-cover' suele verse más profesional. 
          */}
          <img
            src={imgSrc}
            alt={`Mapa real de ${selectedMunicipio}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Evita bucle infinito si la imagen de fallback también falla
              const target = e.target as HTMLImageElement;
              if (!target.src.includes('valle_general.webp')) {
                setImgSrc('/maps/valle_general.webp');
              }
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay sutil para dar profundidad */}
      <div className="absolute inset-0 border-4 border-white/20 rounded-xl pointer-events-none"></div>
    </div>
  );
}