'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftSliderImage from '@/assets/images/left-slider.svg';
import RightSliderImage from '@/assets/images/right-slider.svg';
import ClockHeImage from '@/assets/images/he-clock.svg';
import LatestPost1Image from '@/assets/images/latest-post-1.png';
import LatestPost2Image from '@/assets/images/latest-post-2.png';
import LatestPost3Image from '@/assets/images/latest-post-3.png';
import LatestPost4Image from '@/assets/images/latest-post-4.png';

const slideImages = [
  {
    url: LatestPost1Image,
    caption: 'Slide 1',
  },
  {
    url: LatestPost2Image,
    caption: 'Slide 2',
  },
  {
    url: LatestPost3Image,
    caption: 'Slide 3',
  },
  {
    url: LatestPost4Image,
    caption: 'Slide 4',
  },
];

const LatestPosts = () => {
  const slider = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
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

  const handleClickPrev = () => {
    // @ts-ignore
    slider?.current?.slickPrev();
  };

  const handleClickNext = () => {
    // @ts-ignore
    slider?.current?.slickNext();
  };

  return (
    <section className='max-w-[1910px] px-[100px] mx-auto py-[4rem]'>
      <div className='flex justify-between mb-3 pr-[1rem]'>
        <h3 className='text-[56px] font-semibold leading-[54px]'>
          Latest Posts
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
      <p className='text-[rgba(106,115,115,1)] font-extralight max-w-[772px] mt-4'>
        For those who are deeply interested in cultural and spiritual events,
        choosing tours and taking part in festivals will be one of the best ways
        to enjoy holiday.
      </p>

      <Slider className='mt-8' ref={slider} {...settings}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className='pr-4'>
            <div>
              <Image src={slideImage.url} alt={slideImage.caption} />
              <div className='flex items-center gap-2 mt-2'>
                <Image
                  src={ClockHeImage}
                  alt='clock'
                  className='opacity-[0.3]'
                />
                <p className='text-[rgba(156,161,162,1)]'>15/04/2024</p>
              </div>
              <h4 className='text-[24px] font-medium mt-2 leading-[32px]'>
                Discover the most majestic cave in Laos
              </h4>
              <p className='text-[18px] font-extralight mt-2 text-[rgba(57,68,69,1)]'>
                Solar panels convert sunlight into electricity. Photovoltaic
                (PV) cells on these panels capture the energy from the sun
                electrical power.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LatestPosts;
