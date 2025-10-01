/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
declare module "*.svg" {
  import type { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGSVGElement>) => ReactElement;
  export default content;
}
