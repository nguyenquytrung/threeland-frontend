import React from 'react';
import Image from 'next/image';
import FestivalVietnamImage from '@/assets/images/festival-vietnam.png';

const FestivalVietnam = () => {
  return (
    <section className='max-w-[1910px] px-[100px] mx-auto py-[4rem]'>
      <h3 className='text-[56px] font-semibold'>Festival Vietnam</h3>
      <div className='flex gap-4'>
        <div className='max-w-[50%] flex flex-col gap-6'>
          <p className='text-[rgba(106,115,115,1)] font-extralight'>
            For those who are deeply interested in cultural and spiritual
            events, choosing tours and taking part in festivals will be one of
            the best ways to enjoy holiday.
          </p>

          <p className='text-[32px] text-[rgba(156,161,162,1)] font-extralight'>
            Mid-Autumn Festival
          </p>

          <div>
            <p className='text-[32px] text-[rgba(0,102,179,1)] font-extralight'>
              Tet Holiday
            </p>
            <hr className='border-[rgba(0,102,179,1)] w-[278px] border-[2px] mt-2' />
            <p className='mt-2 text-[rgba(100,106,105,1)] text-[18px] font-extralight'>
              Solar panels convert sunlight into electricity. Photovoltaic (PV)
              cells on these panels capture the energy from the sun and convert
              it into electrical power.
            </p>
            <div role='button' className='group text-[rgba(0,102,179,1)] w-fit'>
              <span className='group-hover:underline font-extralight mt-1'>
                Explore
              </span>
            </div>
          </div>

          <p className='text-[32px] text-[rgba(156,161,162,1)] font-extralight'>
            International Workers’ Day
          </p>

          <p className='text-[32px] text-[rgba(156,161,162,1)] font-extralight'>
            Dien Bien Phu Victory Day
          </p>
        </div>
        <div className='max-w-[50%] flex-1 rounded-[20px] overflow-hidden'>
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
