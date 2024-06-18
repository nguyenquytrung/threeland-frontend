import React from "react";
export default function locate({ theme }: any) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill={theme === 'dark' ? "#fff" : '#E6E8E8'} />
      <path
        d="M11.183 20.8177L20.4733 11.5273M20.4733 11.5273H14.2798M20.4733 11.5273V17.7209"
        stroke={theme === 'dark' ? "#0066B3" : "#071516"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
