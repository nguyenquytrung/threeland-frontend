import React from 'react';
import Image from 'next/image';
import Filter from '../destination/recommend-tour/filter';
import HotelThumb from '@/assets/images/hotel-booking/hotel-thumb.png';
import StarImage from '@/assets/images/user-vote.svg';
import LocationHeImage from '@/assets/images/he-loc.svg';
import SeeMore from '@/components/svg/seeMore';
import GardenViewImage from '@/assets/images/hotel-booking/garden-view.svg';
import WifiImage from '@/assets/images/hotel-booking/wifi.svg';
import FreeWasherImage from '@/assets/images/hotel-booking/free-washer.svg';
import CentralAirImage from '@/assets/images/hotel-booking/central-air.svg';
import RefrigeratorImage from '@/assets/images/hotel-booking/refrigerator.svg';

const filterCategories = [
  {
    id: 0,
    title: 'CITY',
    options: [
      { id: 'option-01', name: 'Vietnam' },
      { id: 'option-02', name: 'Laos' },
      { id: 'option-03', name: 'Myanmar' },
      { id: 'option-04', name: 'Campuchia' },
      { id: 'option-05', name: 'Thailand' },
    ],
  },
  {
    id: 1,
    title: 'COUNTRY',
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
    title: 'STAR CATEGORY',
    options: [
      { id: 'option-21', name: '5 star', count: 18 },
      { id: 'option-22', name: '4 star', count: 115 },
      { id: 'option-23', name: '3 star', count: 374 },
      { id: 'option-24', name: '2 star', count: 374 },
      { id: 'option-25', name: '1 star', count: 374 },
    ],
  },
];

const StaysInHotel = () => {
  return (
    <section className='px-[24px] sm:px-[50px] lg:px-[100px] py-[1rem]'>
      <p className='text-[24px] font-medium'>200+ stays in hotel</p>
      <hr className='mt-[1rem]' />
      <div className='flex gap-4 mt-[1rem]'>
        <Filter
          countryId={1}
          className='w-[24%] hidden min-[1380px]:block'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 min-[1080px]:grid-cols-1 gap-4 gap-y-10 min-[1080px]:gap-y-4 flex-1'>
          {[1, 2, 3, 4, 5, 6].map((item: number, index: number) => (
            <React.Fragment key={item}>
              <div className='flex flex-col min-[1080px]:flex-row items-center gap-4'>
                <Image
                  src={HotelThumb}
                  alt='HotelThumb'
                  className='rounded-[12px] w-full flex-1 md:max-w-[416px]'
                />
                <div className='flex-1 flex flex-col gap-3'>
                  <div className='flex flex-col min-[1080px]:flex-row gap-2 justify-between'>
                    <div className=''>
                      {/* Hotel name */}
                      <div className='flex gap-3 items-center'>
                        <h5 className='text-[24px] font-medium'>
                          Bordeaux Getaway
                        </h5>
                        <div className='flex items-center gap-1'>
                          <span className='text-[20px] text-[rgba(106,115,115,1)]'>
                            5.0
                          </span>
                          <Image src={StarImage} alt='StarImage' />
                        </div>
                      </div>

                      {/* Location */}
                      <div className='flex gap-1 items-center'>
                        <Image src={LocationHeImage} alt='LocationHeImage' />
                        <p className='text-[14px] text-[rgba(156,161,162,1)]'>
                          Unit 201, 2nd Floor, Hanoi Towers, 49 Hai Ba Trung
                          Str, Hoan Kiem District, Hanoi, Vietnam
                        </p>
                      </div>
                    </div>

                    {/* Book now button */}
                    <div
                      role='button'
                      className={`flex gap-2 items-center justify-center bg-[#0066B3] border-[#9CA1A2] rounded-full px-2 min-w-[132px] w-max h-[48px] text-[#fff]`}
                    >
                      <span className='text-[18px] font-extralight w-max text-nowrap'>
                        Book now
                      </span>
                      <SeeMore theme={'dark'} />
                    </div>
                  </div>

                  {/* Introduce */}
                  <p className='text-[rgba(106,115,115,1)] font-extralight line-clamp-[2]'>
                    Come and stay in this superb duplex T2, in the heart of the
                    historic center of Bordeaux. Spacious and bright, in a real
                    Bordeaux building in exposed stone, you will enjoy all the
                    charms of the city thanks to its ideal location.{' '}
                  </p>

                  {/* Description */}
                  <p className='text-[rgba(106,115,115,1)] font-extralight'>
                    4-6 guests · Entire Home · 3beds · 3 bath
                  </p>

                  <hr className='w-[40px]' />

                  <div className='flex gap-3 items-center flex-wrap'>
                    <div className='flex gap-1 items-center'>
                      <Image src={GardenViewImage} alt='GardenViewImage' />
                      <span className='font-extralight'>Garden view</span>
                    </div>

                    <div className='flex gap-1 items-center'>
                      <Image src={WifiImage} alt='GardenViewImage' />
                      <span className='font-extralight'>Wifi</span>
                    </div>

                    <div className='flex gap-1 items-center'>
                      <Image src={FreeWasherImage} alt='GardenViewImage' />
                      <span className='font-extralight'>
                        Free washer - in building
                      </span>
                    </div>

                    <div className='flex gap-1 items-center'>
                      <Image src={CentralAirImage} alt='GardenViewImage' />
                      <span className='font-extralight'>
                        Central air conditioning
                      </span>
                    </div>

                    <div className='flex gap-1 items-center'>
                      <Image src={RefrigeratorImage} alt='GardenViewImage' />
                      <span className='font-extralight'>Refrigerator</span>
                    </div>
                  </div>
                </div>
              </div>
              {index !== 5 && <hr className='hidden min-[1080px]:block' />}
            </React.Fragment>
          ))}
          <div
            role='button'
            className='mt-[1rem] rounded-[4px] bg-[rgba(0,102,179,1)] w-full py-[0.7rem] text-white grid place-items-center'
          >
            <span>Show more results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaysInHotel;
