import React from 'react';
import WhoWeAreImage from '@/assets/images/portfolio/who-we-are-portfolio.png';
import Image from 'next/image';

const ThreelandPortfolio = () => {
  return (
    <>
      <section className='hidden min-[900px]:block relative py-[clamp(2rem,6vw,7rem)] px-[24px] sm:px-[50px] lg:px-[100px]'>
        <div className='flex gap-8 bg-white relative z-10 max-w-[1434px] mx-auto px-[2.5rem] py-[3rem]'>
          <div className='max-w-[764px] w-[50%] flex-1'>
            <p className='text-[24px] font-extralight'>Who we are</p>
            <h3 className='text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-semibold'>
              Threeland portfolio
            </h3>
            <p className='text-[18px] font-extralight mt-6'>
              Our primary brand provides customized travel packages that satiate
              the thirst of any travelers. Family retreat or adventure, leisure
              or MICE, beach break or definite cultural discovery, we have a lot
              to offer any taste of travel which makes us one of the most
              trusted and exciting DMCs of many travel agents abroad.
            </p>
          </div>
          <Image
            src={WhoWeAreImage}
            alt='who-we-are'
            className='flex-1 w-[50%] max-w-[640px] min-w-[380px] object-cover'
          />
        </div>
        <div className='absolute h-[50%] bg-[rgba(0,102,179,1)] bottom-0 left-0 right-0'></div>
      </section>

      <section className='block min-[900px]:hidden relative py-[clamp(2rem,6vw,7rem)] px-[24px] sm:px-[50px] lg:px-[100px]'>
        <div className='gap-8 bg-white relative z-10 max-w-[1434px] mx-auto px-[clamp(24px,4vw,2.5rem)] py-[3rem]'>
          <p className='text-[clamp(16px,3vw,24px)] font-extralight'>
            Who we are
          </p>
          <h3 className='text-[clamp(26px,4vw,40px)] min-[1360px]:text-[48px] font-semibold'>
            Threeland portfolio
          </h3>
          <Image
            src={WhoWeAreImage}
            alt='who-we-are'
            className='flex-1 w-full object-cover mt-4'
          />
          <p className='text-[18px] font-extralight mt-4'>
            Our primary brand provides customized travel packages that satiate
            the thirst of any travelers. Family retreat or adventure, leisure or
            MICE, beach break or definite cultural discovery, we have a lot to
            offer any taste of travel which makes us one of the most trusted and
            exciting DMCs of many travel agents abroad.
          </p>
        </div>
        <div className='absolute h-[50%] bg-[rgba(0,102,179,1)] bottom-0 left-0 right-0'></div>
      </section>
    </>
  );
};

export default ThreelandPortfolio;
