import React from 'react';
import Image from 'next/image';
import Banner from '@/components/core/banner';
import RecommendTour from '@/components/pages/destination/recommend-tour';
import VietnamTextImage from '@/assets/images/vietnam-text.svg';

const Page = () => {
  return (
    <main>
      <Banner url='vietnam-3-people.png'>
        <>
          <p className='text-white w-[952px] font-extralight text-[32px] text-center mb-[1rem]'>
            Your best trip with special travel
          </p>
          <Image
            src={VietnamTextImage}
            alt='vietnam-text'
            className='mb-[5rem]'
          />
        </>
      </Banner>

      {/* Top Recommended Vietnam Tour Packages Section */}
      <RecommendTour />
    </main>
  );
};

export default Page;
