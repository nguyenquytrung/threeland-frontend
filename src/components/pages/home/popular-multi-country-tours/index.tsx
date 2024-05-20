'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LocationImage from '@/assets/images/location-2.svg';
import ClockImage from '@/assets/images/clock.svg';
import StarImage from '@/assets/images/star.svg';
import LeftSliderWhiteImage from '@/assets/images/left-slider-white.svg';
import RightSliderWhiteImage from '@/assets/images/right-slider-white.svg';
import Popular1Image from '@/assets/images/popular-1.png';
import Popular2Image from '@/assets/images/popular-2.png';
import Popular3Image from '@/assets/images/popular-3.png';
import Popular4Image from '@/assets/images/popular-4.png';
import SeparateImage from '@/assets/images/separate-white.svg';
import PopularSaleImage from '@/assets/images/popular-sale.svg';

const slideImagesPopular = [
  {
    url: Popular1Image,
    caption: 'Slide 1',
  },
  {
    url: Popular2Image,
    caption: 'Slide 2',
  },
  {
    url: Popular3Image,
    caption: 'Slide 3',
  },
  {
    url: Popular4Image,
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

const PopularMultiCountryTours = () => {
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
    <section className='relative text-white h-[720px] min-[1700px]:h-[880px] 2xl:h-[800px]'>
      <div className='bg-[#0066B3] h-[397px] top-0 right-0 left-0'></div>
      <div className='absolute top-0 bottom-0 left-0 right-0 pt-[4rem] max-w-[1910px] px-[100px] pb-[8rem]'>
        <div className='flex justify-between pr-[1rem]'>
          <h3 className='text-[56px] font-semibold leading-[54px]'>
            Popular multi - country tours
          </h3>
          <div className='flex items-center gap-3'>
            <div
              role='button'
              onClick={handleClickPrev}
              className='rounded-[43px] border-[white] border w-[68px] h-[48px] flex items-center justify-center'
            >
              <Image src={LeftSliderWhiteImage} alt='left-slider' />
            </div>
            <div
              role='button'
              onClick={handleClickNext}
              className='rounded-[43px] border-[white] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
            >
              <p className='text-[white]'>Next</p>
              <Image src={RightSliderWhiteImage} alt='left-slider' />
            </div>
          </div>
        </div>
        <p className='text-[18px] font-extralight my-4 mb-[5rem]'>
          What people says about Golobe facilities
        </p>
        <Slider
          className='gap-2'
          ref={slider}
          {...settingsHighLightedExperiences}
          nextArrow={<button>next</button>}
        >
          {slideImagesPopular.map((slideImage, index) => (
            <div key={index} className='w-[411px] pr-4'>
              <div className='relative h-full overflow-hidden'>
                <div className='absolute h-[50%] left-0 right-0 bottom-0 bg-card-title p-4 flex flex-col justify-end'>
                  <div className='h-fit mt-auto'>
                    <h5 className='text-[22px]'>Azure Paradise Estate</h5>
                    <div className='flex flex-wrap'>
                      <div className='flex gap-2'>
                        <Image src={LocationImage} alt='location' />
                        <p className='font-extralight text-[12px] 2xl:text-[16px] mt-[1px]'>
                          Los Angeles
                        </p>
                      </div>
                      <Image
                        src={SeparateImage}
                        alt='location'
                        className='mx-2'
                      />
                      <div className='flex gap-2'>
                        <Image src={ClockImage} alt='location' />
                        <p className='font-extralight text-[12px] 2xl:text-[16px] mt-[1px]'>
                          8Day 9Night
                        </p>
                      </div>
                      <Image
                        src={SeparateImage}
                        alt='location'
                        className='mx-2'
                      />
                      <div className='flex gap-2'>
                        <Image src={StarImage} alt='location' />
                        <p className='font-extralight text-[12px] 2xl:text-[16px] mt-[1px]'>
                          4.8
                        </p>
                      </div>
                    </div>

                    <div className='flex gap-4 my-4'>
                      <p className='flex gap-2 items-center'>
                        <span className='text-[26px] 2xl:text-[36px] font-medium'>
                          $240
                        </span>
                        <span className='line-through 2xl:text-[18px] font-extralight mt-1'>
                          $320/d
                        </span>
                      </p>
                      <div className='relative flex items-center justify-center align-middle'>
                        <Image src={PopularSaleImage} alt='popular-sale' />
                        <p className='absolute mx-auto right-0 left-0 text-center'>
                          -30%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  className='w-full'
                  key={index}
                  src={slideImage.url}
                  alt={slideImage.caption}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularMultiCountryTours;
