import Banner from '@/components/core/banner';
import BestTravelAgencyVietnam from '@/components/pages/home/best-travel-agency-vietnam';
import TopSellingTour from '@/components/pages/home/top-selling-tour';
import WhyThreeland from '@/components/pages/home/why-threeland';
import Destination from '@/components/pages/home/destination';
import HighlightedExperiences from '@/components/pages/home/highlighted-experiences';
import PopularMultiCountryTours from '@/components/pages/home/popular-multi-country-tours';
import TravelStories from '@/components/pages/home/travel-stories';
import ToursByTheme from '@/components/pages/home/tours-by-theme';
import LatestNewsletter from '@/components/pages/home/latest-newsletter';
import Partners from '@/components/pages/home/partners';

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
