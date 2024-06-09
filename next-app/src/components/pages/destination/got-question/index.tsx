import React from 'react';
import Questions from './questions';

const GotQuestion = () => {
  return (
    <section className='bg-[rgba(243,245,246,1)] py-[4rem]'>
      <div className='flex items-center gap-[6rem] px-[100px] max-w-[1584px] mx-auto'>
        <div>
          <p className='text-[rgba(0,102,179,1)] font-extralight text-[18px]'>
            FAQ
          </p>
          <h3 className='text-[44px] leading-[57.29px] font-semibold max-w-[466px] mt-2'>
            Got a question For company
          </h3>
          <input
            type='text'
            className='rounded-[34px] max-w-[430px] w-full h-[56px] px-[16px] text-[14px] mt-4'
            placeholder='Your email'
          />
          <div
            role='button'
            className='bg-[rgba(0,102,179,1)] rounded-[28px] w-[110px] h-[44px] grid place-items-center text-white text-[14px] mt-2'
          >
            <span>Submit</span>
          </div>
        </div>

        <Questions />
      </div>
    </section>
  );
};

export default GotQuestion;
