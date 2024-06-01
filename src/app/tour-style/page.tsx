import React from 'react';
import Banner from '@/components/core/banner';
import RecommendTour from '@/components/pages/destination/recommend-tour';
import GotQuestion from '@/components/pages/destination/got-question';

const Page = () => {
  return (
    <main className=''>
      <Banner
        title='Talk to our local expert directly'
        url='tour-style-banner.png'
        titleWidth='760px'
      />

      {/* Recommend Tour Section */}
      <RecommendTour />

      {/* Got Question Section */}
      <GotQuestion />
    </main>
  );
};

export default Page;
