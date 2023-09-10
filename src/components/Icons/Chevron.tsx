import { SVGProps } from 'react';
const SvgChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={8} fill="none" {...props}>
    <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 1 7 7 1 1" />
  </svg>
);
export default SvgChevron;
