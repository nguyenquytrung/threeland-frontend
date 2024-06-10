import React from "react";
export default function clockSvg({ color }: any) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
        stroke={color || "#6A7373"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0003 12.0002L9.66699 13.5558M12.0003 8.11133V12.0002"
        stroke={color || "#6A7373"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
