import React from 'react';
import Image from 'next/image';
import ProfileImage from '@/assets/images/contact/profile.svg';
import EmailImage from '@/assets/images/contact/email.svg';
import IndiaMumbaiImage from '@/assets/images/contact/india-mumbai.svg';
import ItaliaRomaImage from '@/assets/images/contact/italia-roma.svg';
import PortugalLisbonImage from '@/assets/images/contact/portugal-lisbon.svg';
import SpainMadridImage from '@/assets/images/contact/spain-madrid.svg';
import WarsawPolandImage from '@/assets/images/contact/warsaw-poland.svg';
import LondonUkImage from '@/assets/images/contact/london-uk.svg';

const OverseaSalesMarketingOffice = () => {
  return (
    <section className='px-[24px] sm:px-[50px] lg:px-[100px] py-[clamp(2rem,6vw,6rem)]'>
      <h3 className='text-[clamp(26px,3vw,40px)] min-[1360px]:text-[48px] font-semibold'>
        OVERSEA SALES AND MARKETING OFFICE
      </h3>
      <div className='grid min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-[4rem] gap-x-4 mt-[4rem]'>
        <div className='relative shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] p-5 pt-[3rem]'>
          <div className='absolute bg-white top-[-36px] border border-[rgba(205,208,208,1)] rounded-full size-[72px] grid place-items-center'>
            <Image src={IndiaMumbaiImage} alt='india-mumbai' />
          </div>
          <h5 className='font-semibold text-[rgba(0,102,179,1)]'>
            INDIA - MUMBAI
          </h5>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={ProfileImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              Mr. Pranav Kapadia
            </p>
          </div>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={EmailImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              india@threeland.com
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className='relative shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] p-5 pt-[3rem]'>
          <div className='absolute bg-white top-[-36px] border border-[rgba(205,208,208,1)] rounded-full size-[72px] grid place-items-center'>
            <Image src={ItaliaRomaImage} alt='india-mumbai' />
          </div>
          <h5 className='font-semibold text-[rgba(0,102,179,1)]'>
            ITALIA - ROMA
          </h5>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={ProfileImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              Mr. Pranav Kapadia
            </p>
          </div>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={EmailImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              india@threeland.com
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className='relative shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] p-5 pt-[3rem]'>
          <div className='absolute bg-white top-[-36px] border border-[rgba(205,208,208,1)] rounded-full size-[72px] grid place-items-center'>
            <Image src={PortugalLisbonImage} alt='india-mumbai' />
          </div>
          <h5 className='font-semibold text-[rgba(0,102,179,1)]'>
            PORTUGAL - LISBON
          </h5>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={ProfileImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              Mr. Pranav Kapadia
            </p>
          </div>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={EmailImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              india@threeland.com
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className='relative shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] p-5 pt-[3rem]'>
          <div className='absolute bg-white top-[-36px] border border-[rgba(205,208,208,1)] rounded-full size-[72px] grid place-items-center'>
            <Image src={SpainMadridImage} alt='india-mumbai' />
          </div>
          <h5 className='font-semibold text-[rgba(0,102,179,1)]'>
            SPAIN - MADRID
          </h5>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={ProfileImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              Mr. Pranav Kapadia
            </p>
          </div>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={EmailImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              india@threeland.com
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className='relative shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] p-5 pt-[3rem]'>
          <div className='absolute bg-white top-[-36px] border border-[rgba(205,208,208,1)] rounded-full size-[72px] grid place-items-center'>
            <Image src={WarsawPolandImage} alt='india-mumbai' />
          </div>
          <h5 className='font-semibold text-[rgba(0,102,179,1)]'>
            WARSAW - POLAND
          </h5>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={ProfileImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              Mr. Pranav Kapadia
            </p>
          </div>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={EmailImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              india@threeland.com
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className='relative shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] p-5 pt-[3rem]'>
          <div className='absolute bg-white top-[-36px] border border-[rgba(205,208,208,1)] rounded-full size-[72px] grid place-items-center'>
            <Image src={LondonUkImage} alt='india-mumbai' />
          </div>
          <h5 className='font-semibold text-[rgba(0,102,179,1)]'>
            INDIA - MUMBAI
          </h5>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={ProfileImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              Mr. Pranav Kapadia
            </p>
          </div>
          <div className='flex gap-2 items-center mt-1'>
            <Image src={EmailImage} alt='profile' />
            <p className='text-[14px] text-[rgba(106,115,115,1)]'>
              india@threeland.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverseaSalesMarketingOffice;
