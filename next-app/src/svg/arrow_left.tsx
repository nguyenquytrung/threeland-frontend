import React from "react";
export default function locate({ color }: any) {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33301 10L0.333008 5L5.33301 0L6.49967 1.20833L3.54134 4.16667H13.6663V5.83333H3.54134L6.49967 8.79167L5.33301 10Z"
        fill={color || "#6A7373"}
      />
    </svg>
  );
}
