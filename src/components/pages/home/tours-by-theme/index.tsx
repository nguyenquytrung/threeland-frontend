'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftSliderImage from '@/assets/images/left-slider.svg';
import RightSliderImage from '@/assets/images/right-slider.svg';
import TourByTheme1Image from '@/assets/images/tbt-1.png';
import TourByTheme2Image from '@/assets/images/tbt-2.png';
import TourByTheme3Image from '@/assets/images/tbt-3.png';
import TourByTheme4Image from '@/assets/images/tbt-4.png';
import TourByTheme5Image from '@/assets/images/tbt-5.png';
import FamilyTourImage from '@/assets/images/family-tour.svg';
import FoodTourImage from '@/assets/images/food-tour.svg';
import BeachVacationsImage from '@/assets/images/beach-vacations.svg';
import HoneymoonImage from '@/assets/images/honeymoon.svg';
import LuxuryToursImage from '@/assets/images/luxury-tours.svg';

const slideImagesTourByTheme = [
  {
    url: TourByTheme1Image,
    caption: 'Slide 1',
    icon: FamilyTourImage,
  },
  {
    url: TourByTheme2Image,
    caption: 'Slide 2',
    icon: FoodTourImage,
  },
  {
    url: TourByTheme3Image,
    caption: 'Slide 3',
    icon: BeachVacationsImage,
  },
  {
    url: TourByTheme4Image,
    caption: 'Slide 3',
    icon: LuxuryToursImage,
  },
  {
    url: TourByTheme5Image,
    caption: 'Slide 3',
    icon: HoneymoonImage,
  },
];

const settingsTourByTheme = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  centerPadding: '10px',
  // responsive: [
  //   {
  //     breakpoint: 1441,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};

const ToursByTheme = () => {
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
    <section className='pt-[4rem] max-w-[1910px] px-[100px] pb-[10rem]'>
      <p className='text-[24px] tracking-[6px]'>TRAVEL</p>
      <div className='flex justify-between items-center mt-4 pr-[1rem]'>
        <h3 className='text-[56px] font-semibold leading-[54px]'>
          Tours by theme
        </h3>
        <div className='flex items-center gap-3'>
          <div
            role='button'
            onClick={handleClickPrev}
            className='rounded-[43px] border-[#9CA1A2] border w-[68px] h-[48px] flex items-center justify-center'
          >
            <Image src={LeftSliderImage} alt='left-slider' />
          </div>
          <div
            role='button'
            onClick={handleClickNext}
            className='rounded-[43px] border-[#9CA1A2] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
          >
            <p className='text-[#071516]'>Next</p>
            <Image src={RightSliderImage} alt='left-slider' />
          </div>
        </div>
      </div>
      <Slider
        className='gap-2 mt-[4rem]'
        ref={slider}
        {...settingsTourByTheme}
        nextArrow={<button>next</button>}
      >
        {slideImagesTourByTheme.map((slideImage, index) => (
          <div key={index} className='relative pr-4'>
            <Image
              src={slideImage.url}
              alt={slideImage.caption}
              className='rounded-[8px]'
            />
            <div className='absolute bottom-0 left-0 w-[60%] min-w-[158px] p-[1rem] backdrop-blur-sm bg-white/70 rounded-bl-[8px] rounded-tr-[8px]'>
              <Image src={slideImage.icon} alt='tour-theme-icon' />
              <h5 className='text-[20px] font-medium leading-[27px] text-[#071516] mt-4'>
                Family tours
              </h5>
              <p className='text-[#394445] text-[14.18px] leading-[19.5px] font-extralight'>
                32 Tours
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ToursByTheme;
