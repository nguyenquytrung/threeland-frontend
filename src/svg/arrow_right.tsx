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
        d="M8.66699 0L13.667 5L8.66699 10L7.50033 8.79167L10.4587 5.83333H0.33366V4.16667H10.4587L7.50033 1.20833L8.66699 0Z"
        fill={color || "#6A7373"}
      />
    </svg>
  );
}
