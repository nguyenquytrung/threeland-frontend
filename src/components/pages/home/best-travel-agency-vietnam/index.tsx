import React from 'react';
import Image from 'next/image';
import BestTravelImage from '@/assets/images/best-travel.png';
import SeeMoreImage from '@/assets/images/see-more.svg';

const BestTravelAgencyVietnam = () => {
  return (
    <section className='relative px-[100px] 2xl:max-w-[1584px] w-full h-[827px] flex gap-8 items-center mx-auto mt-[6rem]'>
      <div>
        <h3 className='text-[40px] min-[1360px]:text-[56px] font-semibold min-[1360px]:leading-[69.44px] mb-4'>
          Best Travel Agency Vietnam
        </h3>
        <p className='font-light text-justify mb-6'>
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
          className='flex gap-2 items-center justify-center bg-[#0066B3] rounded-full p-[10px 24px 10px 24px] w-[177px] h-[48px] text-white mb-[3rem]'
        >
          <span>See more</span>
          <Image src={SeeMoreImage} alt='see-more' />
        </div>
      </div>
      <Image src={BestTravelImage} alt='best-travel' className='h-full' />
      <div className='absolute flex gap-[8rem] items-center w-[930px] h-[167px] bg-[#0066B3] bottom-[-1.5rem] text-white px-[4rem]'>
        <div>
          <h4 className='text-[48px] font-semibold leading-[57.6px]'>4+</h4>
          <p className='text-[24px]'>Destination</p>
        </div>
        <div>
          <h4 className='text-[48px] font-semibold leading-[57.6px]'>1800+</h4>
          <p className='text-[24px]'> Agencies worldwide</p>
        </div>
        <div>
          <h4 className='text-[48px] font-semibold leading-[57.6px]'>70+</h4>
          <p className='text-[24px]'>Professional</p>
        </div>
      </div>
    </section>
  );
};

export default BestTravelAgencyVietnam;
