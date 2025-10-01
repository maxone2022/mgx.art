diff --git a/mgx-art/next-env.d.ts b/mgx-art/next-env.d.ts
index 12076b7d25255b6fa1ab7686110586f25547ded4..2430c48c10bd20bb8f1fd02e7a126ae8bf3600ca 100644
--- a/mgx-art/next-env.d.ts
+++ b/mgx-art/next-env.d.ts
@@ -1,3 +1,9 @@
-<reference types="next" />
-<reference types="next/image-types/global" />
+/// <reference types="next" />
+/// <reference types="next/image-types/global" />
+
 // NOTE: This file should not be edited
+declare module "*.svg" {
+  import type { ReactElement, SVGProps } from "react";
+  const content: (props: SVGProps<SVGSVGElement>) => ReactElement;
+  export default content;
+}
