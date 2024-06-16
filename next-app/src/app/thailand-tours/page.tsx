import React from 'react';
import RecommendTour from '@/components/pages/destination/recommend-tour';
import CustomerReviews from '@/components/pages/destination/customer-reviews';
import ExploreBeautiful from '@/components/pages/destination/explore-beautiful';
import FestivalVietnam from '@/components/pages/destination/festival-vietnam';
import TopVietnamTravel from '@/components/pages/destination/top-vietnam-travel';
import LatestPosts from '@/components/pages/destination/latest-posts';
import GotQuestion from '@/components/pages/destination/got-question';
import DestinationBanner from '@/components/pages/destination/banner';

const Page = () => {
  return (
    <main>
      {/* Banner Section */}
      <DestinationBanner country='Thailand' url='thailand-tours-banner.jpeg' />

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
