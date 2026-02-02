Agrovisor-Valle-Ai
Dashboard interactivo de inteligencia agrícola para el Valle del Cauca. Desarrollado con Next.js, Tailwind CSS, Recharts y un Asistente IA integrado (Botpress).

🌱 AgroVisor Valle - Dashboard de Inteligencia Agrícola
Project Status Tech Stack

AgroVisor Valle es una plataforma interactiva diseñada para visualizar, analizar y democratizar el acceso a los datos agrícolas de los 42 municipios del Valle del Cauca.

Este proyecto combina visualización de datos en tiempo real con un Asistente de Inteligencia Artificial capaz de interpretar las cifras y responder preguntas en lenguaje natural.

🚀 Características Principales
📊 Visualización de Datos: Gráficos dinámicos (Barras, Líneas, Torta) impulsados por Recharts.
🤖 Asistente IA Integrado: Chatbot potenciado por Botpress que consume los datos en pantalla y el contexto económico del Valle para responder dudas.
⚡ Filtrado en Tiempo Real: Gestión de estado global con Zustand para filtrar por municipio y cultivo instantáneamente.
🗺️ Mapas Dinámicos: Visualización geográfica que se adapta según el municipio seleccionado.
📂 Procesamiento de CSV: Carga y parseo de datasets masivos en el cliente usando PapaParse.
🎨 UI/UX Moderna: Diseño responsivo y limpio construido con Tailwind CSS.
🛠️ Stack Tecnológico
Frontend: Next.js 14 (App Router)
Estilos: Tailwind CSS
Estado: Zustand
Gráficos: Recharts
Datos: PapaParse
IA / Chatbot: Botpress
📂 Estructura del Proyecto
El proyecto sigue la arquitectura moderna de Next.js App Router:

├── app/
│   ├── components/    # Componentes UI (Gráficos, Mapas, Filtros)
│   ├── store/         # Estado global (Zustand)
│   ├── utils/         # Helpers y Data Loaders
│   ├── layout.tsx     # Inyección de Scripts (Botpress)
│   └── page.tsx       # Vista principal
├── public/
│   ├── data/          # Datasets (CSV)
│   └── maps/          # Activos gráficos (Mapas .webp)
└── ...

---

## 🧪 Estado actual del repositorio

Actualmente el repositorio se encuentra en una **fase inicial de planificación y diseño**.

El enfoque en esta etapa es:
- Definir claramente el alcance del proyecto
- Documentar la arquitectura y tecnologías
- Preparar la base para la implementación progresiva

El código y las funcionalidades se irán incorporando de manera incremental en los próximos commits.

