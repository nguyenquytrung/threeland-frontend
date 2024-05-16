import Image from 'next/image';
import React from 'react';
import BannerImage from '@/assets/images/banner1.jpeg';
import DurationImage from '@/assets/images/duration.svg';
import TravelImage from '@/assets/images/travel-style.svg';
import SearchImage from '@/assets/images/search.svg';
import RightArrowImage from '@/assets/images/right-arrow.svg';

const Banner = () => {
  return (
    <section className="relative bg-banner-1 h-[calc(100vh-144px)] 2xl:h-[927px] overflow-hidden bg-cover bg-[url('/banner1.jpeg')]">
      <div className='absolute inset-0 bg-black bg-opacity-[0.3] flex flex-col items-center justify-center'>
        <h1 className='text-white leading-[82.8px] text-[69px] font-medium w-[974px] text-center mb-3'>
          Make Your Travel Whishlist, We’ll Do The Rest
        </h1>
        <p className='text-white w-[952px] text-[20px] text-center mb-[4rem]'>
          Instantly find the best deals on flights, hotels, and vacation
          packages. Start planning your dream getaway today!
        </p>
        <div className='flex items-center gap-2 bg-black bg-opacity-[0.3] rounded-[8px] p-2'>
          <div className='relative'>
            <Image
              src={DurationImage}
              alt='duration'
              className='absolute top-[1.1rem] left-[0.5rem]'
            />
            <select className='w-[312px] h-[62px] rounded-[4px] px-2 pl-9'>
              <option value='volvo'>Duration</option>
              <option value='saab'>Saab</option>
              <option value='opel'>Opel</option>
              <option value='audi'>Audi</option>
            </select>
          </div>

          <div className='relative'>
            <Image
              src={TravelImage}
              alt='duration'
              className='absolute top-[1.1rem] left-[0.5rem]'
            />
            <select className='w-[312px] h-[62px] rounded-[4px] px-2 pl-9'>
              <option value='volvo'>Travel Style</option>
              <option value='saab'>Saab</option>
              <option value='opel'>Opel</option>
              <option value='audi'>Audi</option>
            </select>
          </div>

          <div className='relative'>
            <Image
              src={SearchImage}
              alt='duration'
              className='absolute top-[1.2rem] left-[0.5rem]'
            />
            <input
              type='text'
              placeholder='Search'
              className='w-[312px] h-[62px] rounded-[4px] px-2 pl-9'
            />
          </div>

          <div
            role='button'
            className='w-[123px] h-[62px] flex gap-2 items-center justify-center text-white bg-[#0066B3] rounded-[4px]'
          >
            <span>Search</span>
            <Image src={RightArrowImage} alt='duration' className='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
