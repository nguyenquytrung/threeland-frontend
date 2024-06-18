import dynamic from 'next/dynamic';
import React from 'react';
const OurJourney = dynamic(
  () => import('@/components/pages/who-we-are/our-journey'),
);
const OurBeyond = dynamic(
  () => import('@/components/pages/who-we-are/our-beyond'),
);
const OurRegional = dynamic(
  () => import('@/components/pages/who-we-are/our-regional'),
);
const OurCoporate = dynamic(
  () => import('@/components/pages/who-we-are/our-coporate'),
);

const Page = () => {
  return (
    <main>
      {/* Our Journey Section */}
      <OurJourney />

      {/* Our Beyond Section */}
      <OurBeyond />

      {/* Our Regional Section  */}
      <OurRegional />

      {/* Our Coporate Section */}
      <OurCoporate />
    </main>
  );
};

export default Page;
