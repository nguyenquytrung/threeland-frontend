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

const filterCategories = [
  {
    id: 0,
    title: 'DURATION',
    options: [
      { id: 'option-01', name: 'Under 7 days' },
      { id: 'option-02', name: '7-10 days' },
      { id: 'option-03', name: '11-15 days' },
      { id: 'option-04', name: 'Over 15 days' },
    ],
  },
  {
    id: 1,
    title: 'DESTINATION',
    options: [
      { id: 'option-11', name: 'Hanoi' },
      { id: 'option-12', name: 'Nha Trang' },
      { id: 'option-13', name: 'Phu Quoc' },
      { id: 'option-14', name: 'Ha Long' },
      { id: 'option-15', name: 'Da Nang' },
      { id: 'option-16', name: 'Hue' },
      { id: 'option-17', name: 'Ha Giang' },
    ],
    defaultShow: 4,
  },
  {
    id: 2,
    title: 'TRAVEL STYLE IN VIETNAM',
    options: [
      { id: 'option-21', name: 'Young Adults', count: 248 },
      { id: 'option-22', name: 'Kids', count: 509 },
      { id: 'option-23', name: 'Couples', count: 237 },
      { id: 'option-24', name: 'Singles & Solo', count: 88 },
      { id: 'option-25', name: 'Luxury travellers', count: 88 },
      { id: 'option-26', name: 'Family with kids', count: 88 },
      { id: 'option-27', name: 'Group travel', count: 88 },
      { id: 'option-28', name: 'Budget Travellers', count: 88 },
      { id: 'option-29', name: 'Honey moon', count: 88 },
    ],
  },
  {
    id: 3,
    title: 'PRICE PER PAX',
    options: [
      { id: 'option-31', name: 'Under $ 500' },
      { id: 'option-32', name: '$ 500 - $ 1000' },
      { id: 'option-33', name: '$ 1000 - $ 1500' },
      { id: 'option-34', name: '$ 1500 - $ 2000' },
      { id: 'option-35', name: 'Over $ 2000' },
    ],
    range: {
      title: 'Your Budget',
      from: 'Min',
      to: 'Max',
    },
  },
  {
    id: 4,
    title: 'STAR CATEGORY',
    options: [
      { id: 'option-41', name: '5 star', count: 18 },
      { id: 'option-42', name: '4 star', count: 115 },
      { id: 'option-43', name: '5 star', count: 374 },
    ],
  },
  {
    id: 5,
    title: 'THEME',
    options: [
      { id: 'option-51', name: 'Nature', count: 530 },
      { id: 'option-52', name: 'Relaxation', count: 114 },
      { id: 'option-53', name: 'Cultural', count: 90 },
      { id: 'option-54', name: 'Foodies delight', count: 31 },
      { id: 'option-55', name: 'Off the beaten track', count: 30 },
      { id: 'option-56', name: 'Interact with local', count: 90 },
      { id: 'option-57', name: 'Soft adventure', count: 31 },
      { id: 'option-58', name: 'History', count: 30 },
    ],
  },
];

const RecommendTour = () => {
  return (
    <section className='flex gap-6 px-[100px] 2xl:max-w-[1584px] mx-auto w-full py-10'>
      <Filter filterCategories={filterCategories} className='w-[30%]' />
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
          className='mt-6 mx-auto border border-[#E6E8E8] transition-all hover:bg-[#f3f3f3] rounded-[8px] w-[235px] h-[48px] flex gap-2 items-center justify-center'
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
