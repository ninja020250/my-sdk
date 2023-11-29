import type { SVGProps } from "react";
const SvgLetScroll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={68}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.12 56.158a1.554 1.554 0 0 1-1.097-.467L6.48 50.024a1.039 1.039 0 0 1 1.484-1.453l5.078 5.19a.148.148 0 0 0 .16.034.148.148 0 0 0 .048-.03l5.191-5.079a1.039 1.039 0 0 1 1.453 1.485l-5.667 5.544a1.553 1.553 0 0 1-1.107.443"
    />
    <path
      fill="currentColor"
      d="M13.054 62.13a1.55 1.55 0 0 1-1.096-.467l-5.544-5.667a1.039 1.039 0 0 1 1.485-1.453l5.078 5.191a.147.147 0 0 0 .208.003l5.19-5.078a1.038 1.038 0 0 1 1.453 1.485l-5.667 5.544a1.553 1.553 0 0 1-1.107.443"
    />
    <rect
      width={24}
      height={41}
      x={1}
      y={1}
      stroke="currentColor"
      strokeWidth={2}
      rx={12}
    />
    <path fill="currentColor" d="M12 18a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0z" />
  </svg>
);
export default SvgLetScroll;
