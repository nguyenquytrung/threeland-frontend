import React from 'react';

const LatestNewsletter = () => {
  return (
    <section className='max-w-[1608px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto text-white'>
      <div className='flex flex-col min-[880px]:flex-row justify-center min-[880px]:justify-between items-center gap-4 bg-[#0066B3] rounded-[24px] w-full sm:h-[196px] py-10 sm:py-0 px-[24px] sm:px-[48px] xl:px-[96px]'>
        <h3 className='text-[clamp(18px,3vw,36px)] 2xl:text-[48px] font-normal min-[880px]:max-w-[50%] leading-[clamp(42px,3vw,56px)]'>
          Subscribe for Latest Newsletter
        </h3>
        <form className='min-[500px]:flex min-[880px]:flex-1 gap-2 w-full min-[880px]:w-auto'>
          <input
            type='text'
            placeholder='Your e-mail...'
            className='flex-1 text-[#646A69] min-[880px]:max-w-[422px] w-full h-[56px] rounded-[200px] px-[20px]'
          />
          <div
            role='button'
            className='flex items-center justify-center h-[56px] w-[155px] bg-white rounded-[200px] text-[#0066B3] mt-4 min-[500px]:mt-0'
          >
            <span className='text-[18px] font-medium'>Get in touch</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LatestNewsletter;
