'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/core/ui/dialog';
import ArrowLeft from '@/components/svg/arrow_left';
import WifiImage from '@/assets/images/hotel-booking/wifi.svg';
import ArrowRight from '@/components/svg/arrow_right';
import LocationHeImage from '@/assets/images/he-loc.svg';
import DynastyCruiseImage from '@/assets/images/extras/dynasty-cruise.png';
import OrchidCruise from '@/assets/images/extras/orchid_cruise.jpg';
import Top10BestCruisesText from '../top-best-cruises-text';
import { DialogTitle } from '@radix-ui/react-dialog';

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
  const [open, setOpen] = useState(false);
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
                <Dialog
                  key={slideImage.caption}
                  open={open}
                  onOpenChange={setOpen}
                >
                  <DialogTrigger asChild>
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
                  </DialogTrigger>
                  <DialogContent className='bg-white overflow-hidden border-0 max-w-[1000px]'>
                    <DialogHeader>
                      <DialogTitle>Orchid Cruise</DialogTitle>
                    </DialogHeader>
                    <div className='grid md:grid-cols-2 gap-8 font-extralight'>
                      <div className='flex flex-col gap-2'>
                        <p>
                          Pelican Halong Cruise provides taichi, fishing
                          services, cooking classes. All rooms and suites have
                          private bathrooms, minibar, and air conditioning. The
                          suites are spacious and equipped with a bathtub.
                        </p>
                        <Image src={OrchidCruise} alt='OrchidCruise' />
                      </div>
                      <div className=''>
                        <div className='flex gap-1 mb-2'>
                          <Image src={LocationHeImage} alt='LocationHeImage' />
                          <span>Location</span>
                        </div>
                        <hr />
                        <p className='mt-2'>
                          Address:# 5/33B, Pham Ngu Lao str. Hoan Kiem Dist,
                          Hanoi
                        </p>

                        <div className='flex items-center gap-1 mb-2 mt-8'>
                          <Image src={WifiImage} alt='WifiImage' />
                          <span>Hotel Facilities & Service</span>
                        </div>
                        <hr />
                        <div className='grid grid-cols-2 gap-6 mt-2'>
                          <div className=''>
                            <h5>Hotel Facilities</h5>
                            <p>
                              <li>Laundry and valet service</li>
                              <li>Bar- Sauna and steam bath</li>
                              <li>Non-smoking rooms</li>
                              <li>Restaurant</li>
                              <li>Laundry and valet service</li>
                            </p>
                          </div>

                          <div className=''>
                            <h5>Guest Service</h5>
                            <p>
                              <li>Wifi</li>
                              <li>Fitness</li>
                              <li>Room service (24-hour)</li>
                              <li>Massages</li>
                              <li>Catering services</li>
                              <li>Concierge services</li>
                              <li>Doctor on call</li>
                              <li>Ironing service</li>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Top10BestCruises;
