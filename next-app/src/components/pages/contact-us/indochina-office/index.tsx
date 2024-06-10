'use client';
import React from 'react';
import Image from 'next/image';
import LocationImage from '@/assets/images/contact/contact-us-loc.svg';
import LocationBlackImage from '@/assets/images/contact/contact-us-loc-black.svg';
import EmailImage from '@/assets/images/contact/contact-us-email.svg';
import EmailBlackImage from '@/assets/images/contact/contact-us-email-black.svg';
import CallingImage from '@/assets/images/contact/contact-us-calling.svg';
import CallingBlackImage from '@/assets/images/contact/contact-us-calling-black.svg';

const IndochinaOffice = () => {
  return (
    <section className='block md:flex'>
      <div className='md:w-[50%] p-[24px] md:p-[50px] lg:p-[100px] lg:pr-[24px]'>
        <h3 className='text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-semibold'>
          Indochina Office
        </h3>
        <div className='grid grid-cols-1 sm:max-[767px]:grid-cols-2 xl:grid-cols-2 gap-4 mt-4'>
          <div className='active flex flex-col gap-1 bg-[rgba(0,102,179,1)] px-6 py-7 text-white rounded-[8px]'>
            <h4 className='font-semibold'>VIETNAM HEAD OFFICE</h4>
            <div className='flex items-center gap-2'>
              <Image src={CallingImage} alt='location' className='w-[16px]' />
              <p className='text-[14px] font-medium'>+84 24 3926 2056</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={EmailImage} alt='location' className='w-[16px]' />
              <p className='text-[14px] font-medium'>help@threeland.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={LocationImage} alt='location' className='w-[16px]' />
              <p className='text-[14px] font-medium'>
                125 Hong Ha, Ba Dinh, Hanoi, Vietnam
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className='active flex flex-col gap-1 bg-white px-6 py-7 rounded-[8px] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]'>
            <h4 className='font-semibold'>VIETNAM SOUTHERN OPERATION OFFICE</h4>
            <div className='flex items-center gap-2'>
              <Image
                src={CallingBlackImage}
                alt='location'
                className='w-[16px]'
              />
              <p className='text-[14px] font-medium'>+84 916 780 080</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src={EmailBlackImage}
                alt='location'
                className='w-[16px]'
              />
              <p className='text-[14px] font-medium'>saigon@threeland.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src={LocationBlackImage}
                alt='location'
                className='w-[16px]'
              />
              <p className='text-[14px] font-medium'>
                152 Nguyen Van Thu Str., District 1, HCM City, Vietnam
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className='active flex flex-col gap-1 bg-white px-6 py-7 rounded-[8px] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]'>
            <h4 className='font-semibold'>CAMBODIA OPERATION OFFICE</h4>
            <div className='flex items-center gap-2'>
              <Image
                src={CallingBlackImage}
                alt='location'
                className='w-[16px]'
              />
              <p className='text-[14px] font-medium'>+855 63 766 728</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src={EmailBlackImage}
                alt='location'
                className='w-[16px]'
              />
              <p className='text-[14px] font-medium'>cambodia1@threeland.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src={LocationBlackImage}
                alt='location'
                className='w-[16px]'
              />
              <p className='text-[14px] font-medium'>
                # 203, Sangkat: Svay Dungum, Siem Reap, Cambodia
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className='active flex flex-col gap-1 bg-white px-6 py-7 rounded-[8px] shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]'>
            <h4 className='font-semibold'>LAOS OPERATION OFFICE</h4>
            <div className='flex items-center gap-2'>
              <Image
                src={CallingBlackImage}
                alt='location'
                className='w-[16px]'
              />
              <p className='text-[14px] font-medium'>+856 20 5570880</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src={EmailBlackImage}
                alt='location'
                className='w-[16px]'
              />
              <p className='text-[14px] font-medium'>laos@threeland.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image
                src={LocationBlackImage}
                alt='location'
                className='w-[16px]'
              />
              <p className='text-[14px] font-medium'>
                88/07 Ban Phonpheng, Luang Prabang, Laos PDR
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className='md:w-[50%] w-full h-[400px] md:h-auto md:min-h-[663px]'>
        <iframe
          width='100%'
          height='100%'
          // @ts-ignore
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
          src='https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=125%20Hong%20Ha,%20Ba%20Dinh,%20Hanoi,%20Vietnam+(Threeland)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        >
          <a href='https://www.gps.ie/'>gps systems</a>
        </iframe>
      </div>
    </section>
  );
};

export default IndochinaOffice;
