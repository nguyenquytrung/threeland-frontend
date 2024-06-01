import React from 'react';
import Image from 'next/image';
import BestTravelImage from '@/assets/images/best-travel.png';
import SeeMoreImage from '@/assets/images/see-more.svg';

const BestTravelAgencyVietnam = () => {
  return (
    <>
      <section className='hidden md:flex gap-8 items-center relative px-[50px] lg:px-[100px] 2xl:max-w-[1584px] w-full h-[827px] mx-auto lg:mt-[6rem]'>
        <div>
          <h3 className='text-[clamp(26px,3vw,40px)] min-[1360px]:text-[56px] font-semibold leading-[clamp(42px,3vw,52.44px)] min-[1360px]:leading-[69.44px] mb-4'>
            Best Travel Agency Vietnam
          </h3>
          <p className='font-light text-justify mb-6 line-clamp-[8]'>
            With two decades of experience in Indochina, Threeland Travel prides
            ourselves on the profound knowledge of our expert in-country
            consultants. As a dedicated destination management company and
            Vietnam Travel Agency, we are the preferred choice for clients and
            partners looking for an operator with specialist advice for crafting
            a one-of-a-kind experience. Threeland is currently working
            hand-in-hand with more than 1,800 agencies worldwide, welcoming 25%
            of our total traffic being repeated guests every year. We commit to
            transform your travel requests into dream-like adventures that
            brings you the most authentic and exciting travel experiences at
            superior service quality.
          </p>
          <div
            role='button'
            className='flex gap-2 items-center justify-center bg-[#0066B3] rounded-full p-[10px 24px 10px 24px] w-[177px] h-[48px] text-white mb-[3rem]'
          >
            <span>See more</span>
            <Image src={SeeMoreImage} alt='see-more' />
          </div>
        </div>
        <Image
          src={BestTravelImage}
          alt='best-travel'
          className='h-[clamp(60%,56vw,100%)]'
        />
        <div className='absolute flex gap-[clamp(4rem,7vw,8rem)] items-center w-[clamp(600px,65vw,930px)] h-[167px] bg-[#0066B3] bottom-[2rem] lg:bottom-[-1.5rem] text-white px-[4rem]'>
          <div>
            <h4 className='text-[clamp(30px,4vw,48px)] font-semibold leading-[57.6px]'>
              4+
            </h4>
            <p className='text-[clamp(16px,1.5vw,24px)]'>Destination</p>
          </div>
          <div className='w-max'>
            <h4 className='text-[clamp(30px,4vw,48px)] font-semibold leading-[57.6px]'>
              1800+
            </h4>
            <p className='text-[clamp(16px,1.5vw,24px)]'> Agencies worldwide</p>
          </div>
          <div>
            <h4 className='text-[clamp(30px,4vw,48px)] font-semibold leading-[57.6px]'>
              70+
            </h4>
            <p className='text-[clamp(16px,1.5vw,24px)]'>Professional</p>
          </div>
        </div>
      </section>

      <section className='block md:hidden gap-8 items-center relative px-[24px] sm:px-[50px] 2xl:max-w-[1584px] w-full mx-auto mt-[6rem]'>
        <h3 className='text-[clamp(26px,5vw,36px)] font-semibold leading-[clamp(32px,3vw,52.44px)] min-[1360px]:leading-[69.44px] mb-4'>
          Best Travel Agency Vietnam
        </h3>

        <Image src={BestTravelImage} alt='best-travel' className='w-full' />

        <p className='font-light text-justify mb-6 mt-2'>
          With two decades of experience in Indochina, Threeland Travel prides
          ourselves on the profound knowledge of our expert in-country
          consultants. As a dedicated destination management company and Vietnam
          Travel Agency, we are the preferred choice for clients and partners
          looking for an operator with specialist advice for crafting a
          one-of-a-kind experience. Threeland is currently working hand-in-hand
          with more than 1,800 agencies worldwide, welcoming 25% of our total
          traffic being repeated guests every year. We commit to transform your
          travel requests into dream-like adventures that brings you the most
          authentic and exciting travel experiences at superior service quality.
        </p>
        <div
          role='button'
          className='flex gap-2 items-center justify-center bg-[#0066B3] rounded-full p-[10px 24px 10px 24px] w-[177px] h-[48px] text-white mb-6'
        >
          <span>See more</span>
          <Image src={SeeMoreImage} alt='see-more' />
        </div>

        <div className='flex flex-col min-[424px]:flex-row flex-wrap gap-[1rem] min-[424px]:gap-[clamp(0.5rem,7vw,8rem)] items-center justify-center w-full min-h-[167px] bg-[#0066B3] bottom-[2rem] lg:bottom-[-1.5rem] text-white px-[clamp(0.4rem,4vw,4rem)] py-3 min-[424px]:py-0'>
          <div>
            <h4 className='text-[clamp(30px,4vw,48px)] font-semibold leading-[57.6px] text-center min-[424px]:text-left'>
              4+
            </h4>
            <p className='text-[clamp(14px,1.5vw,24px)]'>Destination</p>
          </div>
          <div className='w-max'>
            <h4 className='text-[clamp(30px,4vw,48px)] font-semibold leading-[57.6px] text-center min-[424px]:text-left'>
              1800+
            </h4>
            <p className='text-[clamp(14px,1.5vw,24px)]'> Agencies worldwide</p>
          </div>
          <div>
            <h4 className='text-[clamp(30px,4vw,48px)] font-semibold leading-[57.6px] text-center min-[424px]:text-left'>
              70+
            </h4>
            <p className='text-[clamp(14px,1.5vw,24px)]'>Professional</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestTravelAgencyVietnam;
