import React from "react";
export default function locate({ color, width, height }: any) {
  return (
    <svg
      width={width || "7"}
      height={height || "13"}
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.26496 6.78097L6.60691 4.60832H4.50049V3.1961C4.50049 2.60202 4.79457 2.02151 5.73494 2.02151H6.70608V0.171365C6.14053 0.0811806 5.56907 0.0323909 4.99632 0.0253906C3.26262 0.0253906 2.13076 1.06758 2.13076 2.95168V4.60832H0.208984V6.78097H2.13076V12.0361H4.50049V6.78097H6.26496Z"
        fill={color || "#3B5998"}
      />
    </svg>
  );
}
