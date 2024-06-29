'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ExploreTourImage from '@/assets/images/see-more.svg';
import TopTravel1Image from '@/assets/images/top-travel-hanoi.png';
import TopTravel2Image from '@/assets/images/top-travel-danang.png';
import TopTravel3Image from '@/assets/images/top-travel-phuquoc.png';
import TopTravel4Image from '@/assets/images/top-travel-nhatrang.png';
import Link from 'next/link';

const initCities = [
  {
    id: 0,
    name: 'DA NANG',
    image: TopTravel2Image,
    activeIndex: 0,
    url: '/da-nang',
  },
  {
    id: 1,
    name: 'NHA TRANG',
    image: TopTravel4Image,
    activeIndex: 1,
    url: '/nha-trang',
  },
  {
    id: 2,
    name: 'HA NOI',
    image: TopTravel1Image,
    activeIndex: 2,
    url: '/hanoi',
  },
  {
    id: 3,
    name: 'PHU QUOC',
    image: TopTravel3Image,
    activeIndex: 3,
    url: '/phu-quoc',
  },
];

const cityImageAnimationOrder = [
  'translate-x-[35vw] -translate-y-[50%]',
  'translate-x-[20vw] translate-y-[65%]',
  '-translate-x-[20vw] translate-y-[65%]',
  '-translate-x-[35vw] -translate-y-[50%]',
  // 'right-[-1rem] min-[1480px]:right-[3%] top-[12rem]',
  // 'left-[16%] bottom-0',
  // 'right-[16%] bottom-0',
  // 'left-[-1rem] min-[1480px]:left-[3%] top-[12rem]',
];

const TopVietnamTravel = () => {
  const [cities, setCities] = useState(initCities);

  const handleHoverCityNameToFocusImage = (id: number) => {
    setCities((prevState) => {
      const thisOldCityActiveIndex =
        [...prevState].find((city) => city.id === id)?.activeIndex ?? 0;

      const newState = [...prevState].map((city) => {
        let newActiveIndex = city.activeIndex - thisOldCityActiveIndex;
        newActiveIndex =
          newActiveIndex < 0 ? newActiveIndex + 4 : newActiveIndex;
        return {
          ...city,
          activeIndex: newActiveIndex,
        };
      });

      return newState;
    });
  };
  return (
    <section className=''>
      <div className='bg-[rgba(0,102,179,0.1)]'>
        <div className='flex justify-center flex-wrap gap-[clamp(1rem,5vw,5rem)] py-[3rem] text-[rgba(0,102,179,1)] px-[100px] max-w-[1584px] mx-auto'>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>Ha Noi</h5>
            <p className='text-[20px] font-extralight text-center'>Capital</p>
          </div>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>330.210 km2</h5>
            <p className='text-[20px] font-extralight text-center'>Area</p>
          </div>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>GMT +7</h5>
            <p className='text-[20px] font-extralight text-center'>Timezone</p>
          </div>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>
              Vietnam Dong
            </h5>
            <p className='text-[20px] font-extralight text-center'>Popular</p>
          </div>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>Tropical</h5>
            <p className='text-[20px] font-extralight text-center'>Weather</p>
          </div>
        </div>
      </div>

      {/* min-1200px */}
      <div className='hidden min-[1200px]:block relative bg-[rgba(0,102,179,1)] pt-8 pb-[25rem]'>
        <h3 className='text-[56px] text-center text-white'>
          Top vietnam travel cities{' '}
          <span className='font-semibold'>Destination</span>
        </h3>
        <div className='relative z-[99] flex flex-col gap-6 items-center text-[rgba(255,255,255,0.3)] mt-20'>
          {cities.map((city) => (
            <Link
              href={`/destination/vietnam/${city.url}`}
              key={city.id}
              role='button'
              className='group flex gap-4 items-center'
              onMouseEnter={() => handleHoverCityNameToFocusImage(city.id)}
            >
              <p className='text-[96px] leading-[90px] font-light tracking-[-0.4rem]'>
                {city.name}
              </p>
              <Image
                className='hidden group-hover:block'
                src={ExploreTourImage}
                width={72}
                alt='explore-tour'
              />
            </Link>
          ))}
        </div>

        {cities.map((city) => (
          <Image
            key={city.id}
            src={city.image}
            alt='top-travel-hanoi'
            className={`${cityImageAnimationOrder[city.activeIndex]} ${
              city.activeIndex !== 0 ? 'opacity-50' : 'shadow-2xl'
            } absolute inset-0 m-auto transition-all duration-1500 max-[1680px]:scale-[0.8]`}
          />
        ))}

        {/* <Image
          src={TopTravel2Image}
          alt='top-travel-hanoi'
          className='absolute transition-all right-[6%] top-[12rem] max-[1400px]:scale-[0.8]'
        />
        <Image
          src={TopTravel3Image}
          alt='top-travel-hanoi'
          className='absolute transition-all left-[16%] bottom-0 max-[1400px]:scale-[0.8]'
        />
        <Image
          src={TopTravel4Image}
          alt='top-travel-hanoi'
          className='absolute transition-all right-[16%] bottom-0 max-[1400px]:scale-[0.8]'
        />
        <Image
          src={TopTravel1Image}
          alt='top-travel-hanoi'
          className='absolute transition-all left-[6%] top-[12rem] max-[1400px]:scale-[0.8]'
        /> */}
      </div>

      {/* max-1199px */}
      <div className='block min-[1200px]:hidden relative bg-[rgba(0,102,179,1)] py-8'>
        <h3 className='text-[clamp(20px,4vw,56px)] xl:text-[56px] text-center text-white'>
          Top vietnam travel cities{' '}
          <span className='font-semibold'>Destination</span>
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(255,255,255,0.3)] mt-10 px-[24px] sm:px-[50px] lg:px-[100px]'>
          {cities.map((city) => (
            <div key={city.id} role='button'>
              <Image
                src={city.image}
                alt='top-travel-hanoi'
                className='mb-2 w-full h-[400px] object-cover rounded-[16px]'
              />
              <p className='text-[24px] text-white'>{city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopVietnamTravel;
