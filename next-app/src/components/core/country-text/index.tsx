import localFont from 'next/font/local';
import React from 'react';

const myFont = localFont({
  src: '../../../assets/fonts/Dmitry Rastvortsev - KyivType Sans Medium3.otf',
});

const CountryText = ({
  name = 'Vietnam',
  className = 'text-[clamp(60px,17vw,128px)] md:text-[128px] leading-[120.6px]',
}: {
  name: string;
  className?: string;
}) => {
  return (
    <p className={`${myFont.className} ${className} text-white`}>{name}</p>
  );
};

export default CountryText;
