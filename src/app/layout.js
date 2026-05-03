import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Azul Sanna | Terapeuta Ocupacional",
  description: "Portfolio de Azul Sanna, Terapeuta Ocupacional especializada en rehabilitación de mano y miembro superior.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
