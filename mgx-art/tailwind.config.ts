diff --git a/mgx-art/tailwind.config.ts b/mgx-art/tailwind.config.ts
index 72231542d91e3b269c39a27a2dd15e4d4cfdb36e..ca9087d7e777050c412be3b6b11717f53ab092b9 100644
--- a/mgx-art/tailwind.config.ts
+++ b/mgx-art/tailwind.config.ts
@@ -1,11 +1,19 @@
-
 import type { Config } from "tailwindcss";
-export default {
+
+const config: Config = {
   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
   theme: {
     extend: {
-      colors: { brand: "#5F2BFF", ink: "#0d0d10" }
-    }
+      colors: {
+        brand: "#5F2BFF",
+        ink: "#0d0d10",
+      },
+      boxShadow: {
+        brand: "0 8px 24px rgba(95,43,255,0.6)",
+      },
+    },
   },
-  plugins: []
-} satisfies Config;
+  plugins: [],
+};
+
+export default config;
