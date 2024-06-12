import React from 'react';

const Top10BestCruisesText = ({
  title = 'TOP 10 BEST HALONG BAY CRUISE DEALS RECOMMENDED FOR YOU',
  description = 'The highly trusted collection of Best Halong Bay Cruises that is frequently updated by our Halong Cruise Experts depending much on the cruises, conditions: best facilities, unique experiences, best offers, high-end meals on board, professional staff, and especially excellent comments, feedback from our real valuable customers. We hope that you can select a suitable Halong bay cruise for your holiday and have unforgettable experiences beside your beloved ones.',
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <section className='bg-[#0066B3] px-[24px] sm:px-[50px] lg:px-[100px] py-[clamp(1rem,7vw,7rem)]'>
      <div className='max-w-[1410px] w-full mx-auto text-white text-center'>
        <p className='text-[20px] sm:text-[24px] font-extralight tracking-[5px]'>
          EXTRAS
        </p>
        <h3 className='text-[24px] sm:text-[30px] lg:text-[48px] font-medium max-w-[1185px] mx-auto mt-2'>
          {title}
        </h3>
        <p className='text-[20px] font-extralight mt-2'>{description}</p>
      </div>
    </section>
  );
};

export default Top10BestCruisesText;
