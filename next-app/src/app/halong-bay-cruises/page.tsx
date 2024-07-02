import React, { Suspense } from 'react';
import Banner from '@/components/pages/halong-bay-cruises/banner';
import BestTourInHalong from '@/components/pages/halong-bay-cruises/best-tour-in-halong';
import ExtrasHighlight from '@/components/pages/halong-bay-cruises/highlight';
import Top10BestCruises from '@/components/pages/halong-bay-cruises/top-best-cruises';
import YouAreUnique from '@/components/pages/halong-bay-cruises/you-are-unique';
import ViewedArticles from '@/components/pages/blogs/viewed-articles';
import GotQuestion from '@/components/pages/destination/got-question';

const Page = async () => {
  return (
    <main className=''>
      {/* Banner Seciton */}
      <Banner />

      {/* Top 10 Best Cruise Section */}
      <Top10BestCruises />

      {/* Highlight Section */}
      <ExtrasHighlight />

      {/* Best Tour In Halong Bay Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <BestTourInHalong />
      </Suspense>

      {/* You Are Unique Section */}
      <YouAreUnique />

      {/* Extras Blogs Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <ViewedArticles title='Halong Bay Travel Guide & News' />
      </Suspense>

      {/* Got A Question Section */}
      <GotQuestion />
    </main>
  );
};

export default Page;
