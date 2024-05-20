'use client';
import React, { useRef } from 'react';
import Image from 'next/image';

import ExploreTourImage from '@/assets/images/explore-tour.svg';
import LeftSliderWhiteImage from '@/assets/images/left-slider-white.svg';
import RightSliderWhiteImage from '@/assets/images/right-slider-white.svg';
import VietnamFlagImage from '@/assets/images/vietnam-flag.svg';
import VietnamTextImage from '@/assets/images/vietnam-text.png';
import DanangCardImage from '@/assets/images/danang-card.png';
import HanoiCardImage from '@/assets/images/hanoi-card.png';
import HagiangCardImage from '@/assets/images/hagiang-card.png';
import NinhbinhCardImage from '@/assets/images/ninhbinh-card.png';

const Destination = () => {
  const slider = useRef(null);

  const handleClickPrev = () => {
    // @ts-ignore
    slider?.current?.slickPrev();
  };

  const handleClickNext = () => {
    // @ts-ignore
    slider?.current?.slickNext();
  };

  return (
    <section className="text-white bg-[url('/vietnam-3-people.png')] h-[905px] pt-[12rem]">
      <div className='max-w-[1910px] px-[100px] mx-auto w-full h-full flex justify-between'>
        <div className='min-w-[500px] flex-1'>
          <p className='tracking-[5px] text-[32px] font-extralight'>
            Destination
          </p>
          <Image src={VietnamFlagImage} alt='vietnam-flag' className='mt-6' />
          <Image src={VietnamTextImage} alt='vietnam-text' className='mt-8' />
          <div className='flex items-center gap-3 mt-20'>
            <div
              role='button'
              onClick={handleClickPrev}
              className='rounded-[43px] border-[##EEEEEE] border w-[68px] h-[48px] flex items-center justify-center'
            >
              <Image src={LeftSliderWhiteImage} alt='left-slider' />
            </div>
            <div
              role='button'
              onClick={handleClickNext}
              className='rounded-[43px] border-[##EEEEEE] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
            >
              <p className='text-white'>Next</p>
              <Image src={RightSliderWhiteImage} alt='left-slider' />
            </div>
          </div>
        </div>

        <div className='w-[1020px]'>
          <p className='text-[18px] text-justify leading-[28.8px] font-extralight'>
            Vietnam is an exciting country for tourism and investment. Bustling
            street life, delicious cuisine and majestic scenery all await you. A
            country constantly in motion, Vietnam always balances young urban
            culture with traditional values. In the city, ancient temples are
            just a turn away from modern shops. In the countryside, life still
            flows along the rivers and harvests. This contrast between old and
            new makes up a large part of Vietnam&apos;s appeal. Another reason
            to visit Vietnam is its natural beauty. The North has majestic
            mountains and beautiful limestone bays. The Central Coast Road leads
            to historical relics and romantic beaches. In the South, the
            sleepless life of Ho Chi Minh City and the riverside villages in the
            Mekong Delta will make you want to linger forever.
          </p>
          <div
            role='button'
            className='flex items-center justify-center mt-10 gap-3 h-[48px] w-[181px] rounded-[24.85px] border-[0.8px] border-[white]'
          >
            <p className='text-[18px] font-extralight'>Explore tour</p>
            <Image src={ExploreTourImage} alt='explore-tour' />
          </div>
          <div className='flex gap-4 mt-[4rem]'>
            <div className=''>
              <Image src={DanangCardImage} alt='explore-tour' />
              <p className='text-[24px] mt-4'>DA NANG</p>
            </div>
            <div className=''>
              <Image src={HanoiCardImage} alt='explore-tour' />
              <p className='text-[24px] mt-4'>DA NANG</p>
            </div>
            <div className=''>
              <Image src={HagiangCardImage} alt='explore-tour' />
              <p className='text-[24px] mt-4'>DA NANG</p>
            </div>
            <div className=''>
              <Image src={NinhbinhCardImage} alt='explore-tour' />
              <p className='text-[24px] mt-4'>DA NANG</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
