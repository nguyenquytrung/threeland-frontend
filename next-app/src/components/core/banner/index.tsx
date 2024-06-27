import Image from 'next/image';
import React from 'react';
import DurationImage from '@/assets/images/duration.svg';
import TravelImage from '@/assets/images/travel-style.svg';
import SearchImage from '@/assets/images/search.svg';
import RightArrowImage from '@/assets/images/right-arrow.svg';
import LogoNoColorImage from '@/assets/images/logo-nocolor.svg';
import LogoColorImage from '@/assets/images/logo-color-new.svg';

type Props = {
  title?: string;
  titleWidth?: string;
  subTitle?: string;
  defaultForm?: boolean;
  url?: string;
  isMobileFullScreen?: boolean;
  children?: React.ReactNode;
};

const Banner = (props: Props) => {
  const {
    title,
    titleWidth = '1044px',
    subTitle,
    defaultForm = true,
    url = 'banner1.jpeg',
    isMobileFullScreen = true,
    children,
  } = props;
  // const bgImg = `bg-[url('/${url}')]`;
  return (
    <section
      style={{ backgroundImage: `url('/${url}')` }}
      className={`relative bg-banner-1 ${
        isMobileFullScreen
          ? 'h-[calc(100vh-144px)] max-[1300px]:h-[calc(100vh-69px)]'
          : 'h-[clamp(200px,10vw,400px)] lg:max-[1300px]:h-[calc(100vh-69px)] min-[1301px]:h-[calc(100vh-144px)]'
      } overflow-hidden bg-cover bg-center`}
    >
      <div className='absolute inset-0 bg-black bg-opacity-[0.3] flex flex-col items-center justify-center'>
        {title && (
          <h1
            style={{ width: titleWidth }}
            className={`text-white leading-[clamp(36px,6vw,82.8px)] text-[clamp(24px,5vw,69px)] font-medium text-center mb-3 max-w-full max-[423px]:px-5 max-[1300px]:px-10`}
          >
            {title}
          </h1>
        )}
        {subTitle && (
          <p className='text-white w-[952px] text-[clamp(14px,2vw,20px)] text-center font-extralight max-w-full max-[423px]:px-5 max-[1300px]:px-10'>
            {subTitle}
          </p>
        )}
        {children}
      </div>
      <Image
        src={LogoNoColorImage}
        alt='LogoNoColorImage'
        className='absolute min-[1160px]:top-1/3 top-[10%] max-[640px]:w-[3rem]'
      />
      {defaultForm && (
        <div className='w-full px-[clamp(24px,4vw,100px)] py-[1rem] absolute bottom-0 left-0 right-0 bg-black bg-opacity-[0.3]'>
          <div className='flex flex-wrap min-[930px]:flex-row flex-col items-center gap-2 rounded-[8px] p-2 max-w-full min-[930px]:w-max w-full mx-auto'>
            <div className='relative xl:max-w-[312px] xl:w-[312px] min-[930px]:max-w-[200px] min-[930px]:w-[200px] w-full'>
              <Image
                src={DurationImage}
                alt='duration'
                className='absolute top-[1.1rem] left-[0.5rem]'
              />
              <select className='w-full flex-1 h-[62px] rounded-[4px] px-2 pl-9'>
                <option value='volvo'>Duration</option>
                <option value='saab'>Saab</option>
                <option value='opel'>Opel</option>
                <option value='audi'>Audi</option>
              </select>
            </div>

            <div className='relative xl:max-w-[312px] xl:w-[312px] min-[930px]:max-w-[200px] min-[930px]:w-[200px] w-full'>
              <Image
                src={TravelImage}
                alt='duration'
                className='absolute top-[1.1rem] left-[0.5rem]'
              />
              <select className='w-full h-[62px] rounded-[4px] px-2 pl-9'>
                <option value='volvo'>Travel Style</option>
                <option value='saab'>Saab</option>
                <option value='opel'>Opel</option>
                <option value='audi'>Audi</option>
              </select>
            </div>

            <div className='relative xl:max-w-[312px] xl:w-[312px] min-[930px]:max-w-[200px] min-[930px]:w-[200px] w-full'>
              <Image
                src={SearchImage}
                alt='duration'
                className='absolute top-[1.2rem] left-[0.5rem]'
              />
              <input
                type='text'
                placeholder='Search'
                className='w-full h-[62px] rounded-[4px] px-2 pl-9'
              />
            </div>

            <div
              role='button'
              className='min-[930px]:w-[123px] w-full h-[62px] flex gap-2 items-center justify-center text-white bg-[#0066B3] rounded-[4px]'
            >
              <span>Search</span>
              <Image src={RightArrowImage} alt='duration' className='' />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
