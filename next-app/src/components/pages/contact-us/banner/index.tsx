import React from 'react';
import Image from 'next/image';
import LocationImage from '@/assets/images/contact/contact-us-loc.svg';
import EmailImage from '@/assets/images/contact/contact-us-email.svg';
import CallingImage from '@/assets/images/contact/contact-us-calling.svg';
import ContactUsBannerImage from '@/assets/images/contact/contact-us-banner.png';
import ContactUsImage from '@/assets/images/contact/contact-us.png';

const ContactUsBanner = () => {
  return (
    <>
      <section className='hidden min-[920px]:flex py-[clamp(2rem,6vw,7rem)] sm:px-[50px] lg:px-[100px] max-w-[1634px] mx-auto'>
        <div className='relative flex flex-1 flex-col gap-8 max-w-[50%] min-w-[438px] mr-10'>
          <h3 className='text-[rgba(0,102,179,1)] text-[48px] font-semibold leading-[51px]'>
            Contact Us
          </h3>

          <div className='absolute w-[100%] top-[5rem] flex flex-col gap-10 bg-[rgba(0,102,179,1)] rounded-[16px] p-10 text-white'>
            <div className=''>
              <div className='flex items-center gap-2'>
                <Image src={LocationImage} alt='location' />
                <p className='text-[32px] font-medium'>Visit Us</p>
              </div>
              <p className='text-[22px] font-extralight mt-1'>
                125 Hong Ha, Ba Dinh, Hanoi, Vietnam
              </p>
            </div>

            <div className=''>
              <div className='flex items-center gap-2'>
                <Image src={EmailImage} alt='location' />
                <p className='text-[32px] font-medium'>Email Us</p>
              </div>
              <p className='text-[22px] font-extralight mt-1'>
                help@threeland.com
              </p>
            </div>

            <div className=''>
              <div className='flex items-center gap-2'>
                <Image src={CallingImage} alt='location' />
                <p className='text-[32px] font-medium'>Call Us</p>
              </div>
              <p className='text-[22px] font-extralight mt-1'>
                 +84 24 3926 2056
              </p>
            </div>
          </div>
        </div>

        <p className='font-extralight tracking-[2.5px] text-justify leading-[27px] max-w-[815px]'>
          Threeland Travel is premier Destination Management Company in Vietnam,
          Laos, Cambodia with over 15 years’ experience. We have network of
          operation office across the countries ensuring in-depth knowledge of
          services and instant support to clients. Our sales and marketing
          specialists in your region will efficiently assist you with
          information on leisure travel, theme tours, corporate, meetings &
          incentive and adventure. Contact us for details
        </p>
      </section>

      <section className='block min-[920px]:hidden py-[clamp(2rem,6vw,7rem)] px-[24px] sm:px-[50px] lg:px-[100px] max-w-[1634px] mx-auto'>
        <h3 className='text-[rgba(0,102,179,1)] text-[48px] font-semibold leading-[51px]'>
          Contact Us
        </h3>
        <p className='font-extralight tracking-[2.5px] text-justify leading-[27px] max-w-[815px] mt-4'>
          Threeland Travel is premier Destination Management Company in Vietnam,
          Laos, Cambodia with over 15 years’ experience. We have network of
          operation office across the countries ensuring in-depth knowledge of
          services and instant support to clients. Our sales and marketing
          specialists in your region will efficiently assist you with
          information on leisure travel, theme tours, corporate, meetings &
          incentive and adventure. Contact us for details
        </p>

        <div className='w-[100%] top-[5rem] flex flex-col gap-10 bg-[rgba(0,102,179,1)] rounded-[16px] p-10 text-white mt-4'>
          <div className=''>
            <div className='flex items-center gap-2'>
              <Image src={LocationImage} alt='location' />
              <p className='text-[32px] font-medium'>Visit Us</p>
            </div>
            <p className='text-[22px] font-extralight mt-1'>
              125 Hong Ha, Ba Dinh, Hanoi, Vietnam
            </p>
          </div>

          <div className=''>
            <div className='flex items-center gap-2'>
              <Image src={EmailImage} alt='location' />
              <p className='text-[32px] font-medium'>Email Us</p>
            </div>
            <p className='text-[22px] font-extralight mt-1'>
              help@threeland.com
            </p>
          </div>

          <div className=''>
            <div className='flex items-center gap-2'>
              <Image src={CallingImage} alt='location' />
              <p className='text-[32px] font-medium'>Call Us</p>
            </div>
            <p className='text-[22px] font-extralight mt-1'>
               +84 24 3926 2056
            </p>
          </div>
        </div>
      </section>
      <Image src={ContactUsImage} alt='contact-us' className='w-full' />
    </>
  );
};

export default ContactUsBanner;
