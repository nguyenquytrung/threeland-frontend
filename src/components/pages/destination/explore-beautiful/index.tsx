import React from 'react';
import Image from 'next/image';
import VietnamMapImage from '@/assets/images/vietnam-map.svg';
import SeeMoreImage from '@/assets/images/see-more.svg';
import BehindPersonWithNonla from '@/assets/images/behind-person-with-nonla.png';

const ExploreBeautiful = () => {
  return (
    <>
      <section className='flex gap-6 max-w-[1910px] px-[100px] mx-auto py-[4rem]'>
        <div className='relative flex-1 max-w-[561px] w-[40%]'>
          <p className='text-[40px] font-light'>Explore beautiful</p>
          <h2 className='text-[96px] font-semibold leading-[131px]'>Vietnam</h2>

          <Image
            src={VietnamMapImage}
            alt='vietnam-map'
            className='absolute left-0 top-[10rem]'
          />
        </div>

        <div className='w-[60%] text-justify 2xl:text-[18px] leading-[28.8px] font-light'>
          <div className='flex flex-col gap-8 text-ellipsis overflow-hidden'>
            <p className=''>
              Vietnam Being located in South-East Asia, on the eastern margin of
              the Indochina Peninsula is our beautiful country – Vietnam, with
              its unique and worldwide well-known appearance – an S-shaped
              territory.
            </p>
            <p className=''>
              Vietnam is fortunately biased by nature, and gifted with various
              kinds of wonderful natural scenery. While travelling through
              Vietnam, you definitely cannot stop keeping your wide eyes on the
              treacherous chains of mountains along the country, the 3260
              km-long coastlines with clear blue water and white sand, endless
              lands with golden paddy fields, spectacular rivers all over the
              country and spacious maroon deltas in the south-western area of
              Vietnam.
            </p>

            <p className=''>
              Vietnam is an exciting country for tourism and investment.
              Bustling street life, delicious cuisine and majestic scenery all
              await you. A country constantly in motion, Vietnam always balances
              young urban culture with traditional values. In the city, ancient
              temples are just a turn away from modern shops. In the
              countryside, life still flows along the rivers and harvests. This
              contrast between old and new makes up a large part of Vietnam's
              appeal. Another reason to visit Vietnam is its natural beauty. The
              North has majestic mountains and beautiful limestone bays. The
              Central Coast Road leads to historical relics and romantic
              beaches. In the South, the sleepless life of Ho Chi Minh City and
              the riverside villages in the Mekong Delta will make you want to
              linger forever.
            </p>

            <p className=''>
              Vietnam is an exciting country for tourism and investment.
              Bustling street life, delicious cuisine and majestic scenery all
              await you. A country constantly in motion, Vietnam always balances
              young urban culture with traditional values. In the city, ancient
              temples are just a turn away from modern shops. In the
              countryside, life still flows along the rivers and harvests. This
              contrast between old and new makes up a large part of Vietnam's
              appeal. Another reason to visit Vietnam is its natural beauty. The
              North has majestic mountains and beautiful limestone bays. The
              Central Coast Road leads to historical relics and romantic
              beaches. In the South, the sleepless life of Ho Chi Minh City and
              the riverside villages in the Mekong Delta will make you want to
              linger forever.
            </p>
          </div>

          <div
            role='button'
            className='flex gap-2 items-center justify-center bg-[#0066B3] rounded-full p-[10px 24px 10px 24px] w-[177px] h-[48px] text-white mt-8'
          >
            <span>See more</span>
            <Image src={SeeMoreImage} alt='see-more' />
          </div>
        </div>
      </section>

      <Image src={BehindPersonWithNonla} alt='nonla-person' />
    </>
  );
};

export default ExploreBeautiful;
