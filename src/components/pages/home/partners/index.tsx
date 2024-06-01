'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Partner1Image from '@/assets/images/partner-1.png';
import Partner2Image from '@/assets/images/partner-2.png';
import Partner3Image from '@/assets/images/partner-3.png';
import Partner4Image from '@/assets/images/partner-4.png';
import Partner5Image from '@/assets/images/partner-5.png';
import Partner6Image from '@/assets/images/partner-6.png';

const slideImagesPartners = [
  {
    url: Partner1Image,
    caption: 'Slide 1',
  },
  {
    url: Partner2Image,
    caption: 'Slide 2',
  },
  {
    url: Partner3Image,
    caption: 'Slide 3',
  },
  {
    url: Partner4Image,
    caption: 'Slide 3',
  },
  {
    url: Partner5Image,
    caption: 'Slide 3',
  },
  {
    url: Partner6Image,
    caption: 'Slide 3',
  },
];

const settingsPartners = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Partners = () => {
  const slider = useRef(null);

  return (
    <section className='mt-10 bg-[#F3F5F6] pb-8'>
      <div className='max-w-[1474px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto'>
        <Slider
          className='mt-[4rem]'
          ref={slider}
          {...settingsPartners}
          nextArrow={<button>next</button>}
        >
          {slideImagesPartners.map((slideImage, index) => (
            <div key={index} className='relative h-[154px] pr-4'>
              <div className='h-full flex items-center justify-center'>
                <Image
                  src={slideImage.url}
                  alt={slideImage.caption}
                  className='rounded-[8px]'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
