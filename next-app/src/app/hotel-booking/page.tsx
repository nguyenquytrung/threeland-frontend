import React from 'react';
import StaysInHotel from '@/components/pages/booking-hotel';
import Banner from '@/components/pages/halong-bay-cruises/banner';
import Top10BestCruisesText from '@/components/pages/halong-bay-cruises/top-best-cruises-text';

const Page = () => {
  return (
    <main>
      {/* Banner Section */}
      <Banner
        gradient={false}
        url='extras/hotel-booking-banner.png'
        isFullHeight
      />

      {/* Description Section */}
      <Top10BestCruisesText
        title='Booking hotel'
        description='Threeland Travel offers top rated Vietnam river cruise tours in the Mekong Delta as well as other Mekong river cruises tours in the nearby countries: Cambodia & Laos. There are variety of cruise styles and itineraries via the Mekong Delta between Phnom Penh (Cambodia) and Saigon (Vietnam)'
      />

      {/* Stays In Hotel Section */}
      <StaysInHotel />
    </main>
  );
};

export default Page;
