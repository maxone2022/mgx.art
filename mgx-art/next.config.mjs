diff --git a/mgx-art/next.config.mjs b/mgx-art/next.config.mjs
index 6f8976770495f09cbc5dc29ec45c3f94867556dd..46e10b6ada75d7f8b4e697cb9b1e352a08660503 100644
--- a/mgx-art/next.config.mjs
+++ b/mgx-art/next.config.mjs
@@ -1 +1,7 @@
-export default { reactStrictMode: true };
+/** @type {import('next').NextConfig} */
+const nextConfig = {
+  images: { unoptimized: true },
+  reactStrictMode: true,
+};
+
+export default nextConfig;
