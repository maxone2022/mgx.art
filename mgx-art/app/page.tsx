diff --git a/mgx-art/app/page.tsx b/mgx-art/app/page.tsx
index 56bcaeda943c99d07beb35b1f014ba2cdad57c0e..d2d218e77d93de2e62b5f8ef7c8564f3137fe09e 100644
--- a/mgx-art/app/page.tsx
+++ b/mgx-art/app/page.tsx
@@ -1,11 +1,27 @@
+import { Closing } from "../components/Closing";
+import { Field } from "../components/Field";
+import { Hero } from "../components/Hero";
+import { System } from "../components/System";
+import { TopNav } from "../components/TopNav";
+import { Values } from "../components/Values";
+import { What } from "../components/What";
 
 export default function Page() {
   return (
-    <main className="p-10">
-      <h1 className="text-4xl font-bold text-brand">MGX — Modular Genericized Architecture</h1>
-      <p className="mt-4 text-lg text-white/80">
-        Born from battlefield modularity, empowering explorers with adaptive systems of gear.
-      </p>
+    <main>
+      <TopNav />
+      <Hero />
+      <What />
+      <System />
+      <Values />
+      <Field />
+      <Closing />
+      <footer className="border-t border-white/10">
+        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 text-xs text-white/50">
+          <p>© {new Date().getFullYear()} MGX / mgx.art</p>
+          <p>Brand site. No commerce. Built with Next.js + Tailwind + Framer Motion.</p>
+        </div>
+      </footer>
     </main>
   );
 }
