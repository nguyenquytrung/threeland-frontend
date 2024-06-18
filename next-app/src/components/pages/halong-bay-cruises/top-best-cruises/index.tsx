'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowLeft from '@/svg/arrow_left';
import ArrowRight from '@/svg/arrow_right';
import LocationHeImage from '@/assets/images/he-loc.svg';
import DynastyCruiseImage from '@/assets/images/extras/dynasty-cruise.png';
import Top10BestCruisesText from '../top-best-cruises-text';

const slideImagesCustomerReview = [
  {
    caption: 'Slide 1',
    url: DynastyCruiseImage,
  },
  {
    caption: 'Slide 2',
    url: DynastyCruiseImage,
  },
  {
    caption: 'Slide 3',
    url: DynastyCruiseImage,
  },
];

const Top10BestCruises = () => {
  const slider = useRef(null);
  const settingsCustomerReview = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClickPrev = () => {
    // @ts-ignore
    slider?.current?.slickPrev();
  };

  const handleClickNext = () => {
    // @ts-ignore
    slider?.current?.slickNext();
  };

  return (
    <>
      <Top10BestCruisesText />

      <section className='top-best-cruises flex bg-[#f3f3f3] gap-6 pt-[3rem] pb-[6rem]'>
        <div className='relative max-w-[1640px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto w-full'>
          <div className='absolute left-[16px] sm:left-[30px] lg:left-[70px] h-full flex justify-center flex-col mb-20'>
            <div
              onClick={handleClickPrev}
              className='px-4 py-4 border-[2px] border-[#F3F3F3] bg-[#fff] z-50 rounded-[30px] cursor-pointer'
            >
              <ArrowLeft />
            </div>
          </div>
          <div
            onClick={handleClickNext}
            className='absolute right-[16px] sm:right-[30px] lg:right-[70px] h-full flex justify-center flex-col mb-20'
          >
            <div className='px-4 py-4 border-[2px] border-[#F3F3F3] bg-[#fff] z-50 rounded-[30px] cursor-pointer'>
              <ArrowRight />
            </div>
          </div>
          <Slider
            className='mt-[4rem]'
            ref={slider}
            {...settingsCustomerReview}
          >
            {slideImagesCustomerReview.map((slideImage, index) => {
              return (
                <div key={index} role='button' className='group px-2'>
                  <div className=''>
                    <Image src={slideImage.url} alt='url' />
                  </div>
                  <h5 className='group-hover:underline text-[clamp(24px,3vw,32px)] font-medium mt-2'>
                    Dynasty Cruise
                  </h5>
                  <div className='flex items-center gap-1'>
                    <Image src={LocationHeImage} alt='location' />
                    <p className='text-[rgba(156,161,162,1)] xl:text-[20px]'>
                      Ha Long, Quang ninh, Viet Nam
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Top10BestCruises;
