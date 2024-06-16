'use client';
import React from 'react';
import type { GetStaticProps } from 'next';

import Banner from '@/components/core/banner';
import RecommendTour from '@/components/pages/destination/recommend-tour';
import GotQuestion from '@/components/pages/destination/got-question';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  return (
    <main className=''>
      <Banner
        title='Talk to our local expert directly'
        url='tour-style-banner.png'
        titleWidth='760px'
      />

      {/* Recommend Tour Section */}
      <RecommendTour title={title as string} />

      {/* Got Question Section */}
      <GotQuestion />
    </main>
  );
};

export default Page;
