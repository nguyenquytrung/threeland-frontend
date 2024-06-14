import React from 'react';
import Image from 'next/image';
import ExtraServiceBanner from '@/assets/images/extra-service/extra-service-banner.png';
import ExtraServiceIcons from '@/components/pages/extra/extra-service-icons';
import ExtraServiceDetails from '@/components/pages/extra/extra-service-details';
import YouAreUnique from '@/components/pages/halong-bay-cruises/you-are-unique';

const Page = () => {
  return (
    <main>
      {/* Banner Section */}
      <Image src={ExtraServiceBanner} alt='ExtraServiceBanner' />

      {/* Icon Section */}
      <ExtraServiceIcons />

      {/* Details Section */}
      <ExtraServiceDetails />

      {/* You Are Unique Section */}
      <YouAreUnique />
    </main>
  );
};

export default Page;
