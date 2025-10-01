diff --git a/mgx-art/postcss.config.js b/mgx-art/postcss.config.js
index b7d2d839617c08f0cfa15deea9c13350c8d73145..12a703d900da8159c30e75acbd2c4d87ae177f62 100644
--- a/mgx-art/postcss.config.js
+++ b/mgx-art/postcss.config.js
@@ -1 +1,6 @@
-module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };
+module.exports = {
+  plugins: {
+    tailwindcss: {},
+    autoprefixer: {},
+  },
+};
