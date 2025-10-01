import type { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "../components/Providers";

export const metadata: Metadata = {
  title: "MGX — Modular Genericized Architecture",
  description: "MGX brand site (mgx.art) — modular outdoor system philosophy.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="zh">
      <body className="min-h-screen bg-ink text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
