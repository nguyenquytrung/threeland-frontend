import React from 'react';
import Banner from '@/components/core/banner';
import ThreelandPortfolio from '@/components/pages/portfolio/threeland-portfolio';
import OurPortfolio from '@/components/pages/portfolio/our-portfolio';

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
      />

      {/* Threeland Portfolio Section */}
      <ThreelandPortfolio />

      {/* Our Portfolio Section */}
      <OurPortfolio />
    </main>
  );
};

export default Page;
