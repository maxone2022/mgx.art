diff --git a//dev/null b/mgx-art/components/Values.tsx
index 0000000000000000000000000000000000000000..72d1db0fffc52042049896fc2bc4a2e668d104e3 100644
--- a//dev/null
+++ b/mgx-art/components/Values.tsx
@@ -0,0 +1,21 @@
+"use client";
+
+import { useI18n } from "./Providers";
+
+export function Values() {
+  const { t } = useI18n();
+
+  return (
+    <section className="mx-auto max-w-7xl px-6 py-20" id="values">
+      <div className="grid items-center gap-10 md:grid-cols-2">
+        <div>
+          <h2 className="text-2xl font-semibold md:text-3xl">{t("visionTitle")}</h2>
+          <p className="mt-4 leading-relaxed text-white/80">{t("visionBody")}</p>
+        </div>
+        <div className="grid aspect-video place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
+          <span className="text-sm text-white/40">(Motion: statements / value icons)</span>
+        </div>
+      </div>
+    </section>
+  );
+}
