'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftSliderImage from '@/assets/images/left-slider.svg';
import RightSliderImage from '@/assets/images/right-slider.svg';
import LocationHeImage from '@/assets/images/he-loc.svg';
import ClockHeImage from '@/assets/images/he-clock.svg';
import StarHeImage from '@/assets/images/he-star.svg';
import ExploreColorImage from '@/assets/images/explore-color.svg';
import HE1Image from '@/assets/images/he-1.png';
import HE2Image from '@/assets/images/he-2.png';
import HE3Image from '@/assets/images/he-3.png';
import HE4Image from '@/assets/images/he-4.png';

const slideImagesHighLightedExperiences = [
  {
    url: HE1Image,
    caption: 'Slide 1',
  },
  {
    url: HE2Image,
    caption: 'Slide 2',
  },
  {
    url: HE3Image,
    caption: 'Slide 3',
  },
  {
    url: HE4Image,
    caption: 'Slide 3',
  },
];

const settingsHighLightedExperiences = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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

const HighlightedExperiences = () => {
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
    <section className='pt-[4rem] max-w-[1910px] px-[100px] pb-[8rem]'>
      <div className='flex justify-between mb-[2rem] pr-[1rem]'>
        <h3 className='text-[56px] font-semibold leading-[54px]'>
          Highlighted experiences in 2024
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
      <div className='flex gap-2 mb-8'>
        <div
          role='button'
          className='w-[107px] h-[48px] flex items-center justify-center border border-[#9CA1A2] text-[#9CA1A2] rounded-[8px]'
        >
          <span>Private</span>
        </div>
        <div
          role='button'
          className='w-[107px] h-[48px] text-white flex items-center justify-center bg-[#0066B3] rounded-[8px]'
        >
          Group
        </div>
      </div>

      <Slider
        className='gap-2'
        ref={slider}
        {...settingsHighLightedExperiences}
        nextArrow={<button>next</button>}
      >
        {slideImagesHighLightedExperiences.map((slideImage, index) => (
          <div key={index} className='w-[411px] pr-4'>
            <div className='relative rounded-[24px] bg-[#F7F7F7] h-full p-3 pb-5 overflow-hidden'>
              <div className='p-1'>
                <h5 className='font-medium 2xl:text-[22px] leading-[32px]'>
                  Highlights of Singapore 3 Weeks
                </h5>
                <div className='flex gap-2 items-start mt-4'>
                  <Image src={LocationHeImage} alt='location' />
                  <p className='font-light text-[#6A7373] text-[12px] 2xl:text-[16px]'>
                    Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong
                    Bay
                  </p>
                </div>
                <div className='flex mt-4'>
                  <div className='flex items-center gap-2 w-fit'>
                    <Image src={ClockHeImage} alt='location' />
                    <p className='font-light text-[12px] 2xl:text-[16px]'>
                      8Day 9Night
                    </p>
                  </div>
                  <div className='flex items-center gap-2 flex-1 justify-center'>
                    <Image src={StarHeImage} alt='location' />
                    <p className='font-light text-[12px] 2xl:text-[16px]'>
                      4.8 (3454 reviews)
                    </p>
                  </div>
                </div>
                <p className='flex gap-2 items-center my-4'>
                  <span className='text-[26px] 2xl:text-[36px] font-medium'>
                    $150
                  </span>
                  <span className='line-through 2xl:text-[18px] font-extralight mt-1'>
                    $320/d
                  </span>
                </p>
              </div>
              <Image
                className='w-full'
                key={index}
                src={slideImage.url}
                alt={slideImage.caption}
              />
              <div
                role='button'
                className='absolute mx-auto left-0 right-0 bottom-[-16px] bg-[#F7F7F7] rounded-full p-4 w-fit'
              >
                <Image src={ExploreColorImage} alt='explore-color' />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HighlightedExperiences;
