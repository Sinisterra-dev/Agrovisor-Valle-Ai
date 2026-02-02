import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // <--- Importante para el bot

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Agrícola Valle",
  description: "Impacto de la agricultura en los 42 municipios del Valle del Cauca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 text-slate-900`}
      >
        {children}

        {/* --- BOTPRESS CHATBOT --- */}
        {/* 1. Inyector del motor de chat */}
        <Script 
          src="https://cdn.botpress.cloud/webchat/v3.4/inject.js" 
          strategy="lazyOnload" 
        />
        
        {/* 2. Tu Configuración Personal (La que me pasaste) */}
        <Script 
          src="https://files.bpcontent.cloud/2025/11/20/23/20251120230251-NE3K8OPE.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}