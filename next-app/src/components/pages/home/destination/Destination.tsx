'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import ExploreTourImage from '@/assets/images/explore-tour.svg';
import LeftSliderWhiteImage from '@/assets/images/left-slider-white.svg';
import RightSliderWhiteImage from '@/assets/images/right-slider-white.svg';
import VietnamFlagImage from '@/assets/images/vietnam-flag.svg';
// import VietnamTextImage from '@/assets/images/vietnam-text.png';
import DanangCardImage from '@/assets/images/danang-card.png';
import HanoiCardImage from '@/assets/images/hanoi-card.png';
import HagiangCardImage from '@/assets/images/hagiang-card.png';
import NinhbinhCardImage from '@/assets/images/ninhbinh-card.png';
import CountryText from '@/components/core/country-text';
import Country from '@/lib/models/country';

type Props = {
  countries: Country[]
}

const Destination = ({ countries }: Props) => {
  const [activeKey, setActiveKey] = useState(0);
  const maxIndex = countries.length - 1;

  const handleClickPrev = () => {
    setActiveKey(prev => {
      if (prev === 0) return 0;
      if (prev > 0) return prev - 1;
      return maxIndex;
    });
  };

  const handleClickNext = () => {
    setActiveKey(prev => {
      if (prev === maxIndex) return maxIndex;
      if (prev < maxIndex) return prev + 1;
      return 0;
    });
  };

  const country = countries[activeKey];

  return (
    <>
      <section
        style={{ backgroundImage: `url(${country?.banner})` }}
        className={`hidden md:block text-white h-[905px] bg-black bg-opacity-[0.3] bg-cover pt-[clamp(4rem,12vw,12rem)]`}
      >
        <div className='max-w-[1910px] px-[50px] lg:px-[100px] mx-auto w-full h-full flex justify-between'>
          <div className='min-w-[clamp(300px,35vw,500px)] flex-1'>
            <p className='tracking-[5px] text-[32px] font-extralight'>
              Destination
            </p>
            <Image src={country?.flag ?? ''} alt='vietnam-flag' className='mt-6' width={68} height={42} />
            {/* <Image
              src={VietnamTextImage}
              alt='vietnam-text'
              className='mt-8 w-[clamp(100px,30vw,400px)]'
            /> */}
            <CountryText
              name={country?.name ?? ''}
              className='text-[clamp(60px,8vw,100px)] min-[1800px]:text-[128px] leading-[clamp(60px,12vw,120.6px)] mt-4'
            />
            <div className='flex items-center gap-3 mt-20'>
              <div
                role='button'
                style={{ opacity: activeKey === 0 ? 0.6 : 1 }}
                onClick={handleClickPrev}
                className='rounded-[43px] border-[##EEEEEE] border w-[68px] h-[48px] flex items-center justify-center'
              >
                <Image src={LeftSliderWhiteImage} alt='left-slider' />
              </div>
              <div
                role='button'
                style={{ opacity: activeKey === maxIndex ? 0.6 : 1 }}
                onClick={handleClickNext}
                className='rounded-[43px] border-[##EEEEEE] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
              >
                <p className='text-white'>Next</p>
                <Image src={RightSliderWhiteImage} alt='left-slider'/>
              </div>
            </div>
          </div>

          <div className='w-[1020px]'>
            <p className='text-[18px] text-justify leading-[28.8px] font-extralight'>
              {country?.destination_description}
            </p>
            <div
              role='button'
              className='flex items-center justify-center mt-10 hover:opacity-[0.6] gap-3 h-[48px] w-[181px] rounded-[24.85px] border-[0.8px] border-[white]'
            >
              <p className='text-[18px] font-extralight'>Explore tour</p>
              <Image src={ExploreTourImage} alt='explore-tour'/>
            </div>
            <div className='flex gap-4 mt-[4rem]'>
              {country?.destinations?.map(destination => (
                <div className='' key={destination.id}>
                  <Image src={destination.overview_image ?? ''} alt='explore-tour' width={242} height={153} />
                  <p className='text-[clamp(18px,1.5vw,24px)] mt-4'>{destination.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="block md:hidden text-white bg-center bg-no-repeat bg-cover bg-[url('/vietnam-3-people.png')] py-[clamp(1rem,8vw,12rem)]">
        <div className='max-w-[1910px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto w-full h-full'>
          <div className='flex flex-col min-[600px]:flex-row-reverse justify-between min-w-[clamp(300px,35vw,500px)] flex-1'>
            <div className='flex items-center gap-3'>
              <div
                role='button'
                onClick={handleClickPrev}
                className='rounded-[43px] border-[##EEEEEE] border w-[68px] h-[48px] flex items-center justify-center'
              >
                <Image src={LeftSliderWhiteImage} alt='left-slider' />
              </div>
              <div
                role='button'
                onClick={handleClickNext}
                className='rounded-[43px] border-[##EEEEEE] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
              >
                <p className='text-white'>Next</p>
                <Image src={RightSliderWhiteImage} alt='left-slider' />
              </div>
            </div>
            <div className='mt-6 min-[600px]:mt-0'>
              <div className='flex gap-2'>
                <p className='tracking-[5px] text-[32px] font-extralight'>
                  Destination
                </p>
                <Image src={VietnamFlagImage} alt='vietnam-flag' className='' width={200} height={200} />
              </div>
              {/* <Image
                src={VietnamTextImage}
                alt='vietnam-text'
                className='mt-4 w-[clamp(100px,30vw,400px)]'
              /> */}
              <CountryText
                name='Vietnam'
                className='text-[clamp(60px,8vw,100px)] min-[1800px]:text-[128px] leading-[clamp(60px,8vw,100px)] mt-4'
              />
            </div>
          </div>

          <p className='text-[18px] text-justify leading-[28.8px] font-extralight mt-10'>
            {country?.destination_description}
          </p>
          <div
            role='button'
            className='flex items-center justify-center mt-10 gap-3 h-[48px] w-[181px] rounded-[24.85px] border-[0.8px] border-[white]'
          >
            <p className='text-[18px] font-extralight'>Explore tour</p>
            <Image src={ExploreTourImage} alt='explore-tour' />
          </div>
          <div className='grid grid-cols-2 min-[600px]:grid-cols-4 gap-4 mt-[4rem]'>
            {country?.destinations?.map(destination => (
              <div className='' key={destination.id}>
                <Image src={destination.overview_image ?? ''} alt='explore-tour' width={300} height={300} />
                <p className='text-[clamp(18px,1.5vw,24px)] mt-4'>{destination.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
