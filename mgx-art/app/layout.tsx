diff --git a/mgx-art/app/layout.tsx b/mgx-art/app/layout.tsx
index c1acb3036e469857d67e66794152be4e59008ac7..e5951203dc57cc5413a2a8b67078c0863e432f32 100644
--- a/mgx-art/app/layout.tsx
+++ b/mgx-art/app/layout.tsx
@@ -1,10 +1,23 @@
-
+import type { ReactNode } from "react";
 import "./globals.css";
-export const metadata = { title: "MGX — Modular Genericized Architecture" };
-export default function RootLayout({ children }) {
+import type { Metadata } from "next";
+import { Providers } from "../components/Providers";
+
+export const metadata: Metadata = {
+  title: "MGX — Modular Genericized Architecture",
+  description: "MGX brand site (mgx.art) — modular outdoor system philosophy.",
+};
+
+interface RootLayoutProps {
+  children: ReactNode;
+}
+
+export default function RootLayout({ children }: RootLayoutProps) {
   return (
     <html lang="zh">
-      <body>{children}</body>
+      <body className="min-h-screen bg-ink text-white">
+        <Providers>{children}</Providers>
+      </body>
     </html>
   );
 }
