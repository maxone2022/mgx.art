diff --git a/mgx-art/package.json b/mgx-art/package.json
index 5040edcdddca3053ee3e76bf2e7d35522c8eb077..8b5f9a7def0b3756d1a3d3717d490d212dd354d3 100644
--- a/mgx-art/package.json
+++ b/mgx-art/package.json
@@ -1,23 +1,28 @@
-
 {
   "name": "mgx-art",
   "private": true,
   "version": "0.1.0",
   "scripts": {
     "dev": "next dev",
     "build": "next build",
-    "start": "next start"
+    "start": "next start",
+    "lint": "next lint"
   },
   "dependencies": {
+    "framer-motion": "^10.18.0",
     "next": "14.2.4",
     "react": "18.2.0",
-    "react-dom": "18.2.0",
-    "framer-motion": "^10.18.0"
+    "react-dom": "18.2.0"
   },
   "devDependencies": {
-    "tailwindcss": "^3.4.3",
+    "@types/node": "^20.12.7",
+    "@types/react": "^18.2.66",
+    "@types/react-dom": "^18.2.22",
     "autoprefixer": "^10.4.18",
+    "eslint": "^8.57.0",
+    "eslint-config-next": "14.2.4",
     "postcss": "^8.4.38",
+    "tailwindcss": "^3.4.3",
     "typescript": "^5.4.5"
   }
 }
