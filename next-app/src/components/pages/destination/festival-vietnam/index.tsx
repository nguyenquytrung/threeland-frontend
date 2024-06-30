'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import FestivalVietnamImage from '@/assets/images/festival-vietnam.png';

const initVietnamFestivals = [
  {
    id: 0,
    isActive: true,
    title: 'Mid-Autumn Festival',
    desc: 'Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.',
  },
  {
    id: 1,
    isActive: false,
    title: 'Tet Holiday',
    desc: 'Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.',
  },
  {
    id: 2,
    isActive: false,
    title: 'International Workers&apos; Day',
    desc: 'Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.',
  },
  {
    id: 3,
    isActive: false,
    title: 'Dien Bien Phu Victory Day',
    desc: 'Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.',
  },
];
const FestivalVietnam = () => {
  const [vietnamFestivals, setVietnamFestivals] =
    useState(initVietnamFestivals);

  const toggleFestival = (id: number) => {
    setVietnamFestivals((prevState) => {
      const newState = [...prevState].map((item) => ({
        ...item,
        isActive: item.id === id ? true : false,
      }));
      return newState;
    });
  };

  return (
    <section className='max-w-[1910px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto py-[4rem]'>
      <h3 className='text-[56px] font-semibold'>Festival Vietnam</h3>
      <div className='flex gap-4'>
        <div className='min-[960px]:max-w-[50%] flex flex-col gap-6'>
          <p className='text-[rgba(106,115,115,1)] font-extralight'>
            For those who are deeply interested in cultural and spiritual
            events, choosing tours and taking part in festivals will be one of
            the best ways to enjoy holiday.
          </p>

          {vietnamFestivals.map(({ id, title, desc, isActive }) => (
            <div key={id}>
              <div
                role='button'
                className='hover:opacity-50'
                onClick={() => toggleFestival(id)}
              >
                <p
                  className={`${
                    isActive
                      ? 'text-[rgba(0,102,179,1)]'
                      : 'text-[rgba(156,161,162,1)]'
                  } text-[32px] font-extralight`}
                >
                  {title}
                </p>
              </div>
              {isActive && (
                <hr className='border-[rgba(0,102,179,1)] w-[278px] border-[2px] mt-2' />
              )}
              <div
                className={`${
                  isActive ? 'h-[83px]' : 'h-0'
                } overflow-hidden transition-all`}
              >
                <p className='mt-2 text-[rgba(100,106,105,1)] text-[18px] font-extralight line-clamp-[2]'>
                  {desc}
                </p>
                <div
                  role='button'
                  className='group text-[rgba(0,102,179,1)] w-fit'
                >
                  <span className='group-hover:underline font-extralight mt-1'>
                    Explore
                  </span>
                </div>
              </div>
              {/* <Image
              src={FestivalVietnamImage}
              alt='festival-vietnam'
              className='object-cover w-full mt-4'
            /> */}
            </div>
          ))}
        </div>
        <div className='max-w-[50%] flex-1 rounded-[20px] overflow-hidden hidden min-[960px]:block'>
          <Image
            src={FestivalVietnamImage}
            alt='festival-vietnam'
            className='object-cover w-full h-full'
          />
        </div>
      </div>
    </section>
  );
};

export default FestivalVietnam;
