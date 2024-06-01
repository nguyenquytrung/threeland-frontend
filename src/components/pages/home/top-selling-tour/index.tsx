'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftSliderImage from '@/assets/images/left-slider.svg';
import RightSliderImage from '@/assets/images/right-slider.svg';
import ExploreTourImage from '@/assets/images/explore-tour.svg';
import SaleImage from '@/assets/images/sale.svg';
import LocationImage from '@/assets/images/location-2.svg';
import ClockImage from '@/assets/images/clock.svg';
import StarImage from '@/assets/images/star.svg';
import SellingTour1Image from '@/assets/images/selling-tour-1.png';
import SellingTour2Image from '@/assets/images/selling-tour-2.png';
import SellingTour3Image from '@/assets/images/selling-tour-3.png';

const slideImagesSellingTour = [
  {
    url: SellingTour1Image,
    caption: 'Slide 1',
  },
  {
    url: SellingTour2Image,
    caption: 'Slide 2',
  },
  {
    url: SellingTour3Image,
    caption: 'Slide 3',
  },
];

const settingsSellingTour = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const settingsSellingTourSmall = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TopSellingTour = () => {
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
    <>
      <section className='hidden md:block mt-[8rem] bg-[#F3F5F6]'>
        <div className='pl-[24px] 2xl:pl-[108px] py-[6rem] mx-auto'>
          <p className='text-[#090B19] tracking-[4px] mb-4'>SALE TOUR</p>
          <h3 className='text-[clamp(26px,3vw,40px)] min-[1360px]:text-[56px] font-semibold leading-[54px] mb-[3rem]'>
            Top selling tour
          </h3>
          <div className='flex overflow-hidden'>
            <div className='w-fit text-white'>
              <div className='px-6 pb-6 h-fit min-[1800px]:w-[500px] min-[1800px]:h-[550px] min-w-[400px] max-w-[500px] bg-[#0066B3]'>
                <div className='relative w-[66px] h-[77px] ml-10'>
                  <Image src={SaleImage} alt='sale' className='absolute' />
                  <span className='z-10 absolute bottom-9 w-full text-center text-[20px] font-semibold'>
                    -30%
                  </span>
                </div>
                <h3 className='text-[26px] 2xl:text-[40px] min-[1800px]:text-[48px] font-medium min-[1800px]:leading-[55.2px] mt-4'>
                  Essential Vietnam with Sapa
                </h3>
                <div className='flex gap-2 items-start mt-5'>
                  <Image src={LocationImage} alt='location' />
                  <p className='font-light'>
                    Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong
                    Bay
                  </p>
                </div>
                <div className='flex mt-4'>
                  <div className='flex items-center gap-2 w-fit'>
                    <Image src={ClockImage} alt='location' />
                    <p className='font-light'>8Day 9Night</p>
                  </div>
                  <div className='flex items-center gap-2 flex-1 justify-center'>
                    <Image src={StarImage} alt='location' />
                    <p className='font-light'>4.8 (3454 reviews)</p>
                  </div>
                </div>
                <p className='mt-4 font-light opacity-90 ml-6 leading-[25.6px] 2xl:text-[16px] text-[14px]'>
                  Lorem ipsum dolor sit amet, consecteturadipiscing elit. Mauris
                  accumsan urna eupharetra elementum. Suspendisse potenti.
                </p>
                <hr className='mt-4 2xl:mt-8 ml-6 bg-[#FFFFFF4D]' />
                <div className='flex justify-between mt-6 pl-2 2xl:pl-10 2xl:pr-5'>
                  <p className='flex gap-2 items-center'>
                    <span className='text-[36px] font-medium'>$150</span>
                    <span className='line-through text-[18px] font-extralight mt-1'>
                      $320/d
                    </span>
                  </p>
                  <div
                    role='button'
                    className='flex items-center justify-center gap-3 h-[48px] w-[181px] rounded-[24.85px] border-[0.8px] border-[white]'
                  >
                    <p className='text-[18px] font-extralight'>Explore tour</p>
                    <Image src={ExploreTourImage} alt='explore-tour' />
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-3 mt-10'>
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
            <div className='w-[calc(100%-400px)] min-[1800px]:w-[calc(100%-500px)]'>
              <Slider
                ref={slider}
                {...settingsSellingTour}
                nextArrow={<button>next</button>}
              >
                {slideImagesSellingTour.map((slideImage, index) => (
                  <div key={index} className={`flex justify-center px-2`}>
                    <Image
                      className='w-full'
                      key={index}
                      src={slideImage.url}
                      alt={slideImage.caption}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className='block md:hidden mt-[8rem] bg-[#F3F5F6]'>
        <div className='p-[24px] py-[6rem] mx-auto'>
          <div className='min-[480px]:flex justify-between items-center mb-[1rem]'>
            <div className=''>
              <p className='text-[#090B19] tracking-[4px]'>SALE TOUR</p>
              <h3 className='text-[clamp(26px,3vw,40px)] min-[1360px]:text-[56px] font-semibold leading-[54px]'>
                Top selling tour
              </h3>
            </div>
            <div className='flex items-center gap-3 mt-4 min-[480px]:mt-0'>
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

          <div className='w-full min-[1800px]:w-[calc(100%-500px)]'>
            <Slider
              ref={slider}
              {...settingsSellingTourSmall}
              nextArrow={<button>next</button>}
            >
              {slideImagesSellingTour.map((slideImage, index) => (
                <div key={index} className={`flex justify-center px-2`}>
                  <Image
                    className='w-full'
                    key={index}
                    src={slideImage.url}
                    alt={slideImage.caption}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className='text-white px-3 pb-3 min-[480px]:px-6 min-[480px]:pb-6 h-fit w-full bg-[#0066B3] mt-2'>
            <div className='relative w-[66px] h-[77px] ml-10'>
              <Image src={SaleImage} alt='sale' className='absolute' />
              <span className='z-10 absolute bottom-9 w-full text-center text-[20px] font-semibold'>
                -30%
              </span>
            </div>
            <h3 className='text-[26px] 2xl:text-[40px] min-[1800px]:text-[48px] font-medium min-[1800px]:leading-[55.2px] mt-4'>
              Essential Vietnam with Sapa
            </h3>
            <div className='flex gap-2 items-start mt-5'>
              <Image src={LocationImage} alt='location' />
              <p className='font-light'>
                Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong Bay
              </p>
            </div>
            <div className='flex mt-4'>
              <div className='flex items-center gap-2 w-fit'>
                <Image src={ClockImage} alt='location' />
                <p className='font-light'>8Day 9Night</p>
              </div>
              <div className='flex items-center gap-2 flex-1 justify-center'>
                <Image src={StarImage} alt='location' />
                <p className='font-light'>4.8 (3454 reviews)</p>
              </div>
            </div>
            <p className='mt-4 font-light opacity-90 ml-6 leading-[25.6px] 2xl:text-[16px] text-[14px]'>
              Lorem ipsum dolor sit amet, consecteturadipiscing elit. Mauris
              accumsan urna eupharetra elementum. Suspendisse potenti.
            </p>
            <hr className='mt-4 2xl:mt-8 ml-6 bg-[#FFFFFF4D]' />
            <div className='flex gap-2 justify-between mt-6 pl-2 2xl:pl-10 2xl:pr-5'>
              <p className='flex gap-2 items-center'>
                <span className='text-[clamp(20px,6vw,36px)] font-medium'>
                  $150
                </span>
                <span className='line-through min-[480px]:text-[18px] font-extralight mt-1'>
                  $320/d
                </span>
              </p>
              <div
                role='button'
                className='flex items-center justify-center gap-3 h-[48px] w-[181px] rounded-[24.85px] border-[0.8px] border-[white]'
              >
                <p className='min-[480px]:text-[18px] font-extralight'>
                  Explore tour
                </p>
                <Image src={ExploreTourImage} alt='explore-tour' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSellingTour;
