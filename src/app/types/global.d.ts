declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames;
  export = classNames
}
declare module '*.png';
declare module '*.svg'{
  import type React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare const IS__DEV: boolean;