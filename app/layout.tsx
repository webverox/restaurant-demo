import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Archivo } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ember — Fire, Field, Feeling",
  description:
    "A neighborhood restaurant shaped by open flame, generous plates, and the people who make a table feel like home.",
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#1e211d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${archivo.variable}`}>
      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
      >
        <body>{children}</body>
      </ReactLenis>
    </html>
  );
}
