import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";

import { clsx } from "clsx";

import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin-ext"],
   variable: "--font-nunito",
   display: "swap"
});

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin-ext"], 
  variable: "--font-nunito-sans", 
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Flowrise prismic",
  description: "A fake website to learn Next.js with Prismic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={clsx(nunito.variable, nunitoSans.variable)}>{children}</body>
    </html>
  );
}
