import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KESSEF ART — Sculptures & Figurines de Luxe",
  description:
    "Galerie en ligne spécialisée dans la vente de sculptures et figurines de luxe. Des œuvres d'exception pour les collectionneurs exigeants.",
  keywords: ["sculptures", "figurines", "luxe", "art", "Orlinski", "galerie", "collection"],
  openGraph: {
    title: "KESSEF ART",
    description: "L'art prend forme.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${bebasNeue.variable} ${barlowCondensed.variable} ${cormorantGaramond.variable} font-cormorant antialiased bg-ivory text-obsidian`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
