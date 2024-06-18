import dynamic from 'next/dynamic';
import Banner from '@/components/core/banner';
const BestTravelAgencyVietnam = dynamic(
  () => import('@/components/pages/home/best-travel-agency-vietnam'),
);
const TopSellingTour = dynamic(
  () => import('@/components/pages/home/top-selling-tour'),
);
const WhyThreeland = dynamic(
  () => import('@/components/pages/home/why-threeland'),
);
const Destination = dynamic(
  () => import('@/components/pages/home/destination'),
);
const HighlightedExperiences = dynamic(
  () => import('@/components/pages/home/highlighted-experiences'),
);
const PopularMultiCountryTours = dynamic(
  () => import('@/components/pages/home/popular-multi-country-tours'),
);
const TravelStories = dynamic(
  () => import('@/components/pages/home/travel-stories'),
);
const ToursByTheme = dynamic(
  () => import('@/components/pages/home/tours-by-theme'),
);
const LatestNewsletter = dynamic(
  () => import('@/components/pages/home/latest-newsletter'),
);
const Partners = dynamic(() => import('@/components/pages/home/partners'));

export default function Home() {
  return (
    <main className=''>
      {/* Banner Section */}
      <Banner
        title='Make Your Travel Whishlist, We’ll Do The Rest'
        subTitle='Instantly find the best deals on flights, hotels, and vacation
          packages. Start planning your dream getaway today!'
      />

      {/* Best Travel Agency Vietnam Section */}
      <BestTravelAgencyVietnam />

      {/* Why Threeland Section */}
      <WhyThreeland />

      {/* Top selling tour Section */}
      <TopSellingTour />

      {/* Destination Section */}
      <Destination />

      {/* Highlighted experiences in 2024 Section */}
      <HighlightedExperiences />

      {/* Popular multi - country tours Section */}
      <PopularMultiCountryTours />

      {/* Threeland Travel Stories Section */}
      <TravelStories />

      {/* Tours By Theme Section */}
      <ToursByTheme />

      {/* Subscribe for Latest Newsletter Section */}
      <LatestNewsletter />

      {/* Partners Section */}
      <Partners />
    </main>
  );
}
