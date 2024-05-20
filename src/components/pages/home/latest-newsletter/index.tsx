import React from 'react';

const LatestNewsletter = () => {
  return (
    <section className='max-w-[1608px] px-[100px] mx-auto text-white'>
      <div className='flex jutify-between items-center gap-4 bg-[#0066B3] rounded-[24px] w-full h-[196px] px-[48px] xl:px-[96px]'>
        <h3 className='text-[36px] 2xl:text-[48px] font-normal max-w-[50%] leading-[56px]'>
          Subscribe for Latest Newsletter
        </h3>
        <form className='flex flex-1 gap-2'>
          <input
            type='text'
            placeholder='Your e-mail...'
            className='flex-1 text-[#646A69] max-w-[422px] h-[56px] rounded-[200px] px-[20px]'
          />
          <div
            role='button'
            className='flex items-center justify-center h-[56px] w-[155px] bg-white rounded-[200px] text-[#0066B3]'
          >
            <span className='text-[18px] font-medium'>Get in touch</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LatestNewsletter;
