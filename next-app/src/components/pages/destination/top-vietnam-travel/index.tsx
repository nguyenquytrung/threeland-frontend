import React from 'react';
import Image from 'next/image';
import ExploreTourImage from '@/assets/images/see-more.svg';
import TopTravel1Image from '@/assets/images/top-travel-hanoi.png';
import TopTravel2Image from '@/assets/images/top-travel-danang.png';
import TopTravel3Image from '@/assets/images/top-travel-phuquoc.png';
import TopTravel4Image from '@/assets/images/top-travel-nhatrang.png';

const TopVietnamTravel = () => {
  return (
    <section className=''>
      <div className='bg-[rgba(0,102,179,0.1)]'>
        <div className='flex justify-center flex-wrap gap-[clamp(1rem,5vw,5rem)] py-[3rem] text-[rgba(0,102,179,1)] px-[100px] max-w-[1584px] mx-auto'>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>Ha Noi</h5>
            <p className='text-[20px] font-extralight text-center'>Capital</p>
          </div>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>330.210 km2</h5>
            <p className='text-[20px] font-extralight text-center'>Area</p>
          </div>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>GMT +7</h5>
            <p className='text-[20px] font-extralight text-center'>Timezone</p>
          </div>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>
              Vietnam Dong
            </h5>
            <p className='text-[20px] font-extralight text-center'>Popular</p>
          </div>
          <div className=''>
            <h5 className='text-[36px] font-medium text-center'>Tropical</h5>
            <p className='text-[20px] font-extralight text-center'>Weather</p>
          </div>
        </div>
      </div>

      {/* min-1200px */}
      <div className='hidden min-[1200px]:block relative bg-[rgba(0,102,179,1)] pt-8 pb-[25rem]'>
        <h3 className='text-[56px] text-center text-white'>
          Top vietnam travel cities{' '}
          <span className='font-semibold'>Destination</span>
        </h3>
        <div className='flex flex-col gap-6 items-center text-[rgba(255,255,255,0.3)] mt-20'>
          <div role='button' className='group flex gap-4 items-center'>
            <p className='text-[96px] leading-[90px] font-light tracking-[-0.4rem]'>
              DA NANG
            </p>
            <Image
              className='hidden group-hover:block'
              src={ExploreTourImage}
              width={72}
              alt='explore-tour'
            />
          </div>
          <div role='button' className='group flex gap-4 items-center'>
            <p className='text-[96px] leading-[90px] font-light tracking-[-0.4rem]'>
              NHA TRANG
            </p>
            <Image
              className='hidden group-hover:block'
              src={ExploreTourImage}
              width={72}
              alt='explore-tour'
            />
          </div>
          <div role='button' className='group flex gap-4 items-center'>
            <p className='text-[96px] leading-[90px] font-light tracking-[-0.4rem]'>
              HA NOI
            </p>
            <Image
              className='hidden group-hover:block'
              src={ExploreTourImage}
              width={72}
              alt='explore-tour'
            />
          </div>
          <div role='button' className='group flex gap-4 items-center'>
            <p className='text-[96px] leading-[90px] font-light tracking-[-0.4rem]'>
              PHU QUOC
            </p>
            <Image
              className='hidden group-hover:block'
              src={ExploreTourImage}
              width={72}
              alt='explore-tour'
            />
          </div>
        </div>

        <Image
          src={TopTravel1Image}
          alt='top-travel-hanoi'
          className='absolute left-[6%] top-[12rem] max-[1400px]:scale-[0.8]'
        />
        <Image
          src={TopTravel2Image}
          alt='top-travel-hanoi'
          className='absolute right-[6%] top-[12rem] max-[1400px]:scale-[0.8]'
        />
        <Image
          src={TopTravel3Image}
          alt='top-travel-hanoi'
          className='absolute left-[16%] bottom-0 max-[1400px]:scale-[0.8]'
        />
        <Image
          src={TopTravel4Image}
          alt='top-travel-hanoi'
          className='absolute right-[16%] bottom-0 max-[1400px]:scale-[0.8]'
        />
      </div>

      {/* max-1199px */}
      <div className='block min-[1200px]:hidden relative bg-[rgba(0,102,179,1)] py-8'>
        <h3 className='text-[clamp(20px,4vw,56px)] xl:text-[56px] text-center text-white'>
          Top vietnam travel cities{' '}
          <span className='font-semibold'>Destination</span>
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-[rgba(255,255,255,0.3)] mt-10 px-[24px] sm:px-[50px] lg:px-[100px]'>
          <div role='button'>
            <Image
              src={TopTravel1Image}
              alt='top-travel-hanoi'
              className='mb-2 w-full h-[400px] object-cover rounded-[16px]'
            />
            <p className='text-[24px] text-white'>HANOI</p>
          </div>

          <div role='button'>
            <Image
              src={TopTravel2Image}
              alt='top-travel-hanoi'
              className='mb-2 w-full h-[400px] object-cover rounded-[16px]'
            />
            <p className='text-[24px] text-white'>DA NANG</p>
          </div>

          <div role='button'>
            <Image
              src={TopTravel3Image}
              alt='top-travel-hanoi'
              className='mb-2 w-full h-[400px] object-cover rounded-[16px]'
            />
            <p className='text-[24px] text-white'>PHU QUOC</p>
          </div>

          <div role='button'>
            <Image
              src={TopTravel4Image}
              alt='top-travel-hanoi'
              className='mb-2 w-full h-[400px] object-cover rounded-[16px]'
            />
            <p className='text-[24px] text-white'>NHA TRANg</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopVietnamTravel;
