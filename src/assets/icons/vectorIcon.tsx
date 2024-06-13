import { SVGProps, memo } from "react";

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Edit / Add_Plus">
      <path
        id="Vector"
        d="M6 12H12M12 12H18M12 12V18M12 12V6"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const VectorIcon = memo(Icon);
