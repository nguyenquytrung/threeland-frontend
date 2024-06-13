import React from 'react';
import Banner from '@/components/core/banner';

import Tour from '@/components/pages/destination/detail/tour'

const Page = () => {
  return (
    <main>
      <Banner
        title='Talk to our local expert directly'
        titleWidth='974px'
        url='portfolio-banner.jpeg'
        defaultForm={false}
        isMobileFullScreen={false}
      >
        <div
          role='button'
          className='mt-4 bg-[#0066B3] text-[white] w-[201px] h-[48px] grid place-items-center rounded-[8px]'
        >
          <span>Get Free Advice Now</span>
        </div>
      </Banner>

      <Tour />

    </main>
  );
};

export default Page;
