diff --git a//dev/null b/mgx-art/components/Providers.tsx
index 0000000000000000000000000000000000000000..9fb32c7dc70aaa20d98ae5cf20253efd7ab7373e 100644
--- a//dev/null
+++ b/mgx-art/components/Providers.tsx
@@ -0,0 +1,16 @@
+"use client";
+
+import { ReactNode, useEffect } from "react";
+
+export interface ProvidersProps {
+  children: ReactNode;
+  lang: string;
+}
+
+export function Providers({ children, lang }: ProvidersProps) {
+  useEffect(() => {
+    document.documentElement.setAttribute("lang", lang);
+  }, [lang]);
+
+  return <>{children}</>;
+}
