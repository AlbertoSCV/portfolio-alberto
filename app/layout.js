import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({ subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
 });

export const metadata = {
  title: "Portafolio Alberto Somoza",
  description: "Bienvenido a mi portafolio digital, soy un desarrollador entusiasta con experiencia en diversos lenguajes y tecnologías, y este espacio es mi lienzo digital donde te puedo mostar los frutos de mi trabajo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
      <Analytics/>
    </html>
  );
}
