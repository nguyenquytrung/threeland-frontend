import dynamic from 'next/dynamic';
import React from 'react';

// components
const OurTeam = dynamic(
  () => import('@/components/pages/our-team/our-team-threeland'),
);
const OurTeamLogo = dynamic(
  () => import('@/components/pages/our-team/our-team-logo'),
);
const OurActivity = dynamic(
  () => import('@/components/pages/our-team/our-activities'),
);

const Page = () => {
  return (
    <main>
      <OurTeam />

      <OurTeamLogo />

      <OurActivity />
    </main>
  );
};

export default Page;
