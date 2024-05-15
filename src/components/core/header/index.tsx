import React from 'react';
import Image from 'next/image';
import EmailImage from '@/assets/images/email.svg';
import PhoneImage from '@/assets/images/phone.svg';
import AmericaImage from '@/assets/images/america.svg';
import DownArrowImage from '@/assets/images/down-arrow.svg';
import DownArrowBlackImage from '@/assets/images/down-arrow-black.svg';
import LogoImage from '@/assets/images/logo-nobackground.svg';

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

      <div className='flex-1 flex justify-between items-center max-w-[1480px] w-full mx-auto px-[24px]'>
        <div className='flex gap-[4rem] items-center'>
          <div role='button'>
            <p className='text-[16px]'>Home</p>
          </div>
          <div role='button' className='flex gap-2 items-center'>
            <p className='text-[16px]'>Destinations</p>
            <Image src={DownArrowBlackImage} alt='down-arrow' />
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
            <p className='text-[16px]'>About</p>
          </div>
          <div role='button' className='flex gap-2 items-center'>
            <p className='text-[16px]'>Blog</p>
          </div>
          <div role='button' className='flex gap-2 items-center'>
            <p className='text-[16px]'>Contact Us</p>
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
