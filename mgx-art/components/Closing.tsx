diff --git a//dev/null b/mgx-art/components/Closing.tsx
index 0000000000000000000000000000000000000000..7f8b715024881b09e1af0ee134c2e40488ab1bc4 100644
--- a//dev/null
+++ b/mgx-art/components/Closing.tsx
@@ -0,0 +1,25 @@
+"use client";
+
+import { useI18n } from "./Providers";
+
+export function Closing() {
+  const { t } = useI18n();
+
+  return (
+    <section className="relative overflow-hidden">
+      <div className="mx-auto max-w-7xl px-6 py-24">
+        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-brand/20 to-white/[0.02] p-10 text-center">
+          <h3 className="text-xl font-semibold md:text-2xl">{t("closingTitle")}</h3>
+          <div className="mt-6 flex items-center justify-center gap-4" id="contact">
+            <a className="rounded-full border border-white/20 px-5 py-3 text-sm hover:border-white/40" href="#what">
+              {t("about")}
+            </a>
+            <a className="rounded-full bg-white/10 px-5 py-3 text-sm hover:bg-white/15" href="#field">
+              {t("follow")}
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+  );
+}
