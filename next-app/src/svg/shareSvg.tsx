import React from 'react';
export default function shareSvg({ color }: any) {
  return (
    <svg
      width='17'
      height='18'
      viewBox='0 0 17 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.04545 11C4.17513 11 5.09091 10.1046 5.09091 9C5.09091 7.89543 4.17513 7 3.04545 7C1.91578 7 1 7.89543 1 9C1 10.1046 1.91578 11 3.04545 11Z'
        stroke={color || '#6A7373'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.9546 5C15.0843 5 16.0001 4.10457 16.0001 3C16.0001 1.89543 15.0843 1 13.9546 1C12.825 1 11.9092 1.89543 11.9092 3C11.9092 4.10457 12.825 5 13.9546 5Z'
        stroke={color || '#6A7373'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.9546 17C15.0843 17 16.0001 16.1046 16.0001 15C16.0001 13.8954 15.0843 13 13.9546 13C12.825 13 11.9092 13.8954 11.9092 15C11.9092 16.1046 12.825 17 13.9546 17Z'
        stroke={color || '#6A7373'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.82812 9.98047L12.1722 14.0196M12.1722 3.98047L4.82812 8.01964'
        stroke={color || '#6A7373'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
