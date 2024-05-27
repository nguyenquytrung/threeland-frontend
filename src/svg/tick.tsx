import React from "react";
export default function tickSvg({ color }: any) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2891 5.80078L9.48906 12.6008L6.68906 9.80078L5.28906 11.2008L9.48906 15.4008L17.6891 7.20078L16.2891 5.80078Z"
        fill={color || "#01CA6C"}
      />
    </svg>
  );
}
