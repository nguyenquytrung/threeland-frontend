import React from 'react';
import Banner from '@/components/core/banner';
import ThreelandPortfolio from '@/components/pages/portfolio/threeland-portfolio';
import OurPortfolio from '@/components/pages/portfolio/our-portfolio';
import OurMilestones from '@/components/pages/portfolio/our-milestones';
import FAQ from '@/components/pages/portfolio/faq';
import OurJourney from '@/components/pages/who-we-are/our-journey';
import OurBeyond from '@/components/pages/who-we-are/our-beyond';

const Page = () => {
  return (
    <main>
      {/* Portfolio Banner Section */}
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

      {/* Our Journey Section */}
      <OurJourney />

      {/* Our Beyond Section */}
      <OurBeyond />
    </main>
  );
};

export default Page;
