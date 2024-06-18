import localFont from 'next/font/local';
import React from 'react';
import Banner from '@/components/core/banner';

const myFont = localFont({
  src: '../../../../assets/fonts/Dmitry Rastvortsev - KyivType Sans Medium3.otf',
});

const DestinationBanner = ({
  country = 'Vietnam',
  url = 'vietnam-3-people.png',
}: {
  country: string;
  url?: string;
}) => {
  return (
    <div>
      <Banner url={url}>
        <>
          <p className='text-white w-[952px] font-extralight text-[32px] text-center mb-[1rem]'>
            Your best trip with special travel
          </p>
          <p
            className={`${myFont.className} text-white text-[clamp(60px,17vw,128px)] md:text-[128px] leading-[120.6px]`}
          >
            {country}
          </p>
        </>
      </Banner>
    </div>
  );
};

export default DestinationBanner;
