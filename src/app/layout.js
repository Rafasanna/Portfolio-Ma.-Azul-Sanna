import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Azul Sanna | Terapeuta Ocupacional",
  description:
    "Portfolio de Azul Sanna, Terapeuta Ocupacional especializada en rehabilitación de mano y miembro superior.",
  openGraph: {
    title: "Azul Sanna | Terapeuta Ocupacional",
    description:
      "Acompaño procesos de rehabilitación para que vuelvas a hacer lo que te hace bien.",
    url: "https://licmazulsanna.com",
    siteName: "Azul Sanna",
    images: [
      {
        url: "/preview.jpg", // 👈 esta imagen la creás vos
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
