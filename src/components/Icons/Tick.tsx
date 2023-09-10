import { SVGProps } from 'react';
const SvgTick = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={16} fill="none" {...props}>
    <path
      fill="#1D4ED8"
      fillRule="evenodd"
      d="M17.956 1.902 6.05 15.508.042 9.499l1.459-1.458 4.45 4.45L16.403.544l1.552 1.358Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTick;
