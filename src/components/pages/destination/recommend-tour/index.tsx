import Image from 'next/image';
import React from 'react';

import Filter from './filter';
import RecommendVietnam1 from '@/assets/images/recommend-vietnam-1.png';
import RecommendVietnam2 from '@/assets/images/recommend-vietnam-2.png';
import RecommendVietnam3 from '@/assets/images/recommend-vietnam-3.png';
import RecommendVietnam4 from '@/assets/images/recommend-vietnam-4.png';

import LocationHeImage from '@/assets/images/he-loc.svg';
import ClockHeImage from '@/assets/images/he-clock.svg';
import StarHeImage from '@/assets/images/he-star.svg';
import PopularSaleImage from '@/assets/images/popular-sale.svg';
import SeeMoreImage from '@/assets/images/see-more.svg';
import RightSliderImage from '@/assets/images/right-slider.svg';

const recommendTours = [
  { id: 0, img: RecommendVietnam1 },
  { id: 1, img: RecommendVietnam2 },
  { id: 2, img: RecommendVietnam3 },
  { id: 3, img: RecommendVietnam4 },
  { id: 4, img: RecommendVietnam1 },
];

const RecommendTour = () => {
  return (
    <section className='flex gap-6 px-[100px] 2xl:max-w-[1584px] mx-auto w-full py-10'>
      <Filter />
      <div className='flex-1'>
        <h3 className='text-[#394445] text-center text-[32px] leading-[54px] font-semibold'>
          Top Recommended Vietnam Tour Packages
        </h3>
        <p className='text-[#9CA1A2] text-[18px] leading-[28px] font-extralight text-center mt-2 w-[80%] mx-auto'>
          Seeking an unforgettable holiday in Vietnam? Check out our 10 best
          Vietnam tour packages and get exclusive offers from Threeland travel
        </p>

        <div className='flex flex-col gap-6 mt-8'>
          {recommendTours.map((item) => (
            <div
              key={item.id}
              className='bg-[#F7F7F7] flex gap-4 p-3 pr-4 rounded-[24px]'
            >
              <Image
                src={item.img}
                alt='recommend-vietnam-1'
                className='max-w-[50%]'
              />
              <div className='max-w-[50%]'>
                <h5 className='text-[#1E1E1E] text-[22px] leading-[32px] font-medium'>
                  Essential Vietnam with Sapa
                </h5>
                <div className='flex gap-2 items-start mt-2'>
                  <Image src={LocationHeImage} alt='location' />
                  <p className='font-light text-[#6A7373] text-[12px] 2xl:text-[16px]'>
                    Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong
                    Bay
                  </p>
                </div>
                <div className='flex justify-between mt-2'>
                  <div className='flex items-center gap-2 w-fit'>
                    <Image src={ClockHeImage} alt='location' />
                    <p className='font-light text-[12px] 2xl:text-[16px]'>
                      8Day 9Night
                    </p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Image src={StarHeImage} alt='location' />
                    <p className='font-light text-[12px] 2xl:text-[16px]'>
                      4.8 (3454 reviews)
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 my-3'>
                  <p className='flex gap-2 items-center'>
                    <span className='text-[26px] 2xl:text-[36px] font-medium'>
                      $150
                    </span>
                    <span className='line-through 2xl:text-[18px] font-extralight mt-1'>
                      $320/d
                    </span>
                  </p>
                  <div className='relative flex items-center justify-center align-middle'>
                    <Image src={PopularSaleImage} alt='popular-sale' />
                    <p className='text-white absolute mx-auto right-0 left-0 text-center'>
                      -30%
                    </p>
                  </div>
                </div>

                <p className='text-[#6A7373] font-light text-justify'>
                  Explore the real Vietnam by trekking in the remote areas,
                  staying at villages and living with the hill tribal people to
                  share their real life, experience their
                </p>

                <div
                  role='button'
                  className='flex gap-2 items-center justify-center bg-[#0066B3] rounded-full p-[10px 24px 10px 24px] w-[177px] h-[48px] text-white mt-4'
                >
                  <span>Explore tour</span>
                  <Image src={SeeMoreImage} alt='see-more' />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          role='button'
          className='mt-6 mx-auto border border-[#E6E8E8] hover:bg-[#f3f3f3] rounded-[8px] w-[235px] h-[48px] flex gap-2 items-center justify-center'
        >
          <span className='text-[#071516] text-[18px]'>
            View more tour{' '}
            <span className='text-[#9B9B9B] text-[12px]'>(34)</span>
          </span>
          <Image src={RightSliderImage} alt='view-more-tour' />
        </div>
      </div>
    </section>
  );
};

export default RecommendTour;
