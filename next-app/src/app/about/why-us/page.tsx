import dynamic from 'next/dynamic';
import React from 'react';

// components
const Content = dynamic(() => import('@/components/pages/why-us/content'));

const Page = () => {
  return (
    <main>
      <Content />
    </main>
  );
};

export default Page;
