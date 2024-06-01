import React from 'react';
import Image from 'next/image';
import LocationImage from '@/assets/images/contact-us-loc.svg';
import EmailImage from '@/assets/images/contact-us-email.svg';
import CallingImage from '@/assets/images/contact-us-calling.svg';
import ContactUsBannerImage from '@/assets/images/contact-us-banner.png';

const ContactUsBanner = () => {
  return (
    <section className='bg-[rgba(0,102,179,1)] py-[3rem] text-white'>
      <div className='flex items-center px-[100px] max-w-[1584px] mx-auto'>
        <div className='flex flex-col gap-8 max-w-[50%] mr-6'>
          <h3 className='text-[48px] font-semibold leading-[20px]'>
            Contact Us
          </h3>
          <p className='font-extralight text-justify leading-[27px]'>
            Threeland Travel is premier Destination Management Company in
            Vietnam, Laos, Cambodia with over 15 years’ experience. We have
            network of operation office across the countries ensuring in-depth
            knowledge of services and instant support to clients. Our sales and
            marketing specialists in your region will efficiently assist you
            with information on leisure travel, theme tours, corporate, meetings
            & incentive and adventure. Contact us for details
          </p>
          <div className=''>
            <div className='flex items-center gap-2'>
              <Image src={LocationImage} alt='location' />
              <p className='text-[24px] font-medium'>Visit Us</p>
            </div>
            <p className='text-[22px] font-extralight mt-2'>
              125 Hong Ha, Ba Dinh, Hanoi, Vietnam
            </p>
          </div>

          <div className=''>
            <div className='flex items-center gap-2'>
              <Image src={EmailImage} alt='location' />
              <p className='text-[24px] font-medium'>Email Us</p>
            </div>
            <p className='text-[22px] font-extralight mt-2'>
              help@threeland.com
            </p>
          </div>

          <div className=''>
            <div className='flex items-center gap-2'>
              <Image src={CallingImage} alt='location' />
              <p className='text-[24px] font-medium'>Call Us</p>
            </div>
            <p className='text-[22px] font-extralight mt-2'>
               +84 24 3926 2056
            </p>
          </div>
        </div>

        <Image src={ContactUsBannerImage} alt='banner-contact-us' />
      </div>
    </section>
  );
};

export default ContactUsBanner;
