import React from 'react';
import Image from 'next/image';
import EmailImage from '@/assets/images/email.svg';
import PhoneImage from '@/assets/images/phone.svg';
import AmericaImage from '@/assets/images/america.svg';
import DownArrowImage from '@/assets/images/down-arrow.svg';
import DownArrowBlackImage from '@/assets/images/down-arrow-black.svg';
import LogoImage from '@/assets/images/logo-nobackground.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex flex-col h-[144px] bg-[white] text-[black]'>
      <div className='border-b border-[#f6f8fe] h-[69px] bg-[#0066B3]'>
        <div className='relative flex items-center h-full justify-between max-w-[1480px] mx-auto w-full px-[24px]'>
          <div className='flex gap-7 items-center'>
            <div className='flex items-center gap-2'>
              <Image src={EmailImage} alt='email-header' />
              <p className='text-[white] text-[14px]'>threeland@gmail.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <Image src={PhoneImage} alt='phone-header' />
              <p className='text-[white] text-[14px]'>(+84)979-016-928</p>
            </div>
          </div>

          <Image
            src={LogoImage}
            alt='logo'
            className='absolute left-0 right-0 mx-auto'
          />

          <div className='flex items-center gap-1'>
            <Image src={AmericaImage} alt='america-header' />
            <div role='button' className='flex items-center gap-1'>
              <p className='text-[white]'>ENG</p>
              <Image src={DownArrowImage} alt='down-arrow-header' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 flex justify-between items-center h-[75px] max-w-[1480px] w-full mx-auto px-[24px]'>
        <div className='flex gap-[4rem] items-center h-full'>
          <div role='button' className='h-full flex items-center'>
            <Link href='/' className='text-[16px] hover:underline'>
              Home
            </Link>
          </div>
          <div className='relative group h-full flex items-center'>
            <div role='button' className='flex gap-2 items-center'>
              <p className='text-[16px]'>Destinations</p>
              <Image src={DownArrowBlackImage} alt='down-arrow' />
            </div>

            {/* popover */}
            <div className='transition-all z-10 absolute w-[680px] top-[60px] hidden group-hover:flex justify-between bg-white p-4 border-t-[4px] border-t-[#0066B3]'>
              <div className='max-w-[200px]'>
                <h5 className='font-semibold'>OUR DESTINATION</h5>
                <p className='mt-4 font-extralight text-[14px]'>
                  Blessed with stunning landscape & seascape, founded as a major
                  religious & cultural center of Southeast Asia for centuries,
                  our countries offer a chain of unique travel products from
                  active tours to responsible travel, from adventure to
                  wellness, luxury holidays.
                </p>
              </div>
              <div className='flex-1 max-w-[423px]'>
                <div
                  role='button'
                  className="group/des bg-[url('https://threeland.com/images/country/destination-vietnam.jpg')] h-[120px]"
                >
                  <Link
                    href='/destination/vietnam'
                    className='transition-all w-full h-full flex items-center justify-center group-hover/des:bg-black group-hover/des:bg-opacity-[0.3]'
                  >
                    <span className='transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                      VIET NAM
                    </span>
                  </Link>
                </div>
                <div className='flex justify-between mt-2'>
                  <div
                    role='button'
                    className="group/des bg-[url('https://threeland.com/images/country/destination-laos.jpg')] h-[110px] w-[136px]"
                  >
                    <div className='transition-all w-full h-full flex items-center justify-center group-hover/des:bg-black group-hover/des:bg-opacity-[0.3]'>
                      <span className='transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                        LAOS
                      </span>
                    </div>
                  </div>

                  <div
                    role='button'
                    className="group/des bg-[url('https://threeland.com/images/country/destination-cambodia.jpg')] h-[110px] w-[136px]"
                  >
                    <div className='transition-all w-full h-full flex items-center justify-center group-hover/des:bg-black group-hover/des:bg-opacity-[0.3]'>
                      <span className='transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                        CAMBODIA
                      </span>
                    </div>
                  </div>

                  <div
                    role='button'
                    className="group/des bg-[url('https://threeland.com/image/country/myanmar3.jpg')] h-[110px] w-[136px] bg-contain"
                  >
                    <div className='transition-all w-full h-full flex items-center justify-center group-hover/des:bg-black group-hover/des:bg-opacity-[0.3]'>
                      <span className='transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                        MYANMAR
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role='button' className='flex gap-2 items-center'>
            <p className='text-[16px]'>Your Style</p>
            <Image src={DownArrowBlackImage} alt='down-arrow' />
          </div>
          <div role='button' className='flex gap-2 items-center'>
            <p className='text-[16px]'>Extras</p>
            <Image src={DownArrowBlackImage} alt='down-arrow' />
          </div>
          <div role='button' className='flex gap-2 items-center'>
            <p className='text-[16px]'>Responsible</p>
            <Image src={DownArrowBlackImage} alt='down-arrow' />
          </div>
          <div role='button' className='flex gap-2 items-center'>
            <p className='text-[16px] hover:underline'>About</p>
          </div>
          <div role='button' className='flex gap-2 items-center'>
            <Link href='/blogs' className='text-[16px] hover:underline'>
              Blog
            </Link>
          </div>
          <div role='button' className='flex gap-2 items-center'>
            <p className='text-[16px] hover:underline'>Contact Us</p>
          </div>
        </div>

        <div className='flex gap-1 items-center'>
          <div role='button' className='px-3'>
            <span>Login</span>
          </div>
          <div
            role='button'
            className='bg-[#0066B3] w-[112px] h-[48px] text-[white] rounded-[8px] flex items-center justify-center'
          >
            <span className='text-[16px]'>Sign up</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
