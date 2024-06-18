import dynamic from 'next/dynamic';
import React from 'react';
const RecommendTour = dynamic(
  () => import('@/components/pages/destination/recommend-tour'),
);
const CustomerReviews = dynamic(
  () => import('@/components/pages/destination/customer-reviews'),
);
const ExploreBeautiful = dynamic(
  () => import('@/components/pages/destination/explore-beautiful'),
);
const FestivalVietnam = dynamic(
  () => import('@/components/pages/destination/festival-vietnam'),
);
const TopVietnamTravel = dynamic(
  () => import('@/components/pages/destination/top-vietnam-travel'),
);
const LatestPosts = dynamic(
  () => import('@/components/pages/destination/latest-posts'),
);
const GotQuestion = dynamic(
  () => import('@/components/pages/destination/got-question'),
);
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
