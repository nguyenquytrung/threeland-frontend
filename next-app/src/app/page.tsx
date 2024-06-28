import dynamic from 'next/dynamic';
import Banner from '@/components/core/banner';
import Helper from '@/lib/utils/helper';
import routes from '@/configs/apiRoutes';
import Tour from '@/lib/models/tour';
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
  () => import('@/components/pages/home/destination/index'), {
    loading: () => <div>Loading...</div>
  }
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
  () => import('@/components/pages/home/tours-by-theme/index'), {
    loading: () => <div>Loading...</div>
  }
);
const LatestNewsletter = dynamic(
  () => import('@/components/pages/home/latest-newsletter'),
);
const Partners = dynamic(() => import('@/components/pages/home/partners'));

const getData = async () => {
  try {
    const apiUrl = Helper.apiRoutes(routes.tours.home);

    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.error(
        `Error fetching data: ${res.statusText} (status: ${res.status})`,
      );
      throw new Error('Server Error');
    }

    return res.json()

  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const revalidate = 0;

export default async function Home() {
  const tours: Tour[] = await getData();
  
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
      <TopSellingTour tours={tours} />

      {/* Destination Section */}
      <Destination />

      {/* Highlighted experiences in 2024 Section */}
      <HighlightedExperiences tours={tours} />

      {/* Popular multi - country tours Section */}
      <PopularMultiCountryTours tours={tours} />

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
