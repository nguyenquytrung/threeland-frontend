import dynamic from 'next/dynamic';
import React from 'react';
const ThreelandPortfolio = dynamic(
  () => import('@/components/pages/portfolio/threeland-portfolio'),
);
const OurPortfolio = dynamic(
  () => import('@/components/pages/portfolio/our-portfolio'),
);
const OurMilestones = dynamic(
  () => import('@/components/pages/portfolio/our-milestones'),
);

const Page = () => {
  return (
    <main>
      {/* Threeland Portfolio Section */}
      <ThreelandPortfolio />

      {/* Our Portfolio Section */}
      <OurPortfolio />

      {/* Out Milestones */}
      <OurMilestones />
    </main>
  );
};

export default Page;
