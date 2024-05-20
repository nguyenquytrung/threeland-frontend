import React from 'react';
import Image from 'next/image';
import Banner from '@/components/core/banner';
import RecommendTour from '@/components/pages/destination/recommend-tour';
import CustomerReviews from '@/components/pages/destination/customer-reviews';
import ExploreBeautiful from '@/components/pages/destination/explore-beautiful';
import FestivalVietnam from '@/components/pages/destination/festival-vietnam';
import TopVietnamTravel from '@/components/pages/destination/top-vietnam-travel';
import LatestPosts from '@/components/pages/destination/latest-posts';
import VietnamTextImage from '@/assets/images/vietnam-text.svg';
import GotQuestion from '@/components/pages/destination/got-question';

const Page = () => {
  return (
    <main>
      {/* Banner Section */}
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

      {/* Customer reviews Section */}
      <CustomerReviews />

      {/* Explore beautiful Vietnam Section */}
      <ExploreBeautiful />

      {/* Festival Vietnam Section */}
      <FestivalVietnam />

      {/* Top Vietnam Travel Section */}
      <TopVietnamTravel />

      {/* Latest Posts Section */}
      <LatestPosts />

      {/* Got A Question Section */}
      <GotQuestion />
    </main>
  );
};

export default Page;
