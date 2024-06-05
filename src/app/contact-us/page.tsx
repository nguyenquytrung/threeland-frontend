import React from 'react';
import ContactUsBanner from '@/components/pages/contact-us/banner';
import IndochinaOffice from '@/components/pages/contact-us/indochina-office';
import FillThisForm from '@/components/pages/contact-us/fill-this-form';
import OverseaSalesMarketingOffice from '@/components/pages/contact-us/oversea-sales-marketing-office';

const Page = () => {
  return (
    <main>
      {/* First Section */}
      <ContactUsBanner />

      {/* Indochina Office Section */}
      <IndochinaOffice />

      {/* Fill this form Section */}
      <FillThisForm />

      {/* Oversea Sales And Marketing Office Section */}
      <OverseaSalesMarketingOffice />
    </main>
  );
};

export default Page;
