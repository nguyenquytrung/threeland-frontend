import React from 'react';

const FillThisForm = () => {
  return (
    <>
      <section className='hidden md:block bg-[rgba(0,102,179,1)] text-white'>
        <div className='flex justify-between gap-[2rem] py-[clamp(2rem,6vw,6rem)] px-[24px] sm:px-[50px] lg:px-[100px] max-w-[1320px] mx-auto'>
          <div className='max-w-[535px] w-[50%]'>
            <p className=''>
              <span className='text-[clamp(40px,5vw,64.08px)]'>
                SIMPLY FILL
              </span>
              <br />
              <span className='font-bold text-[clamp(60px,7vw,90px)]'>
                THIS FORM
              </span>
            </p>
            <p className='font-extralight text-[clamp(24px,2vw,30.08px)]'>
              Thank you for getting in touch! Kindly. Fill the form, have a
              great day!
            </p>
          </div>

          <form className='flex flex-col gap-1 max-w-[485px] flex-1'>
            <label className='text-[20px]'>Name</label>
            <input
              className='h-[56px] rounded-[8px] p-[12px] bg-transparent border border-[rgba(230,232,232,1)]'
              type='text'
              placeholder='Your name'
            />
            <label className='text-[20px] mt-2'>Email</label>
            <input
              className='h-[56px] rounded-[8px] p-[12px] bg-transparent border border-[rgba(230,232,232,1)]'
              type='text'
              placeholder='Your email'
            />
            <label className='text-[20px] mt-2'>Message</label>
            <textarea
              className='h-[147px] rounded-[8px] p-[12px] bg-transparent border border-[rgba(230,232,232,1)]'
              placeholder='Your message'
            />
          </form>
        </div>
      </section>

      <section className='block md:hidden bg-[rgba(0,102,179,1)] text-white'>
        <div className='py-[clamp(2rem,6vw,6rem)] px-[24px] sm:px-[50px] lg:px-[100px] max-w-[1320px] mx-auto'>
          <p className=''>
            <span className='text-[clamp(20px,5vw,64.08px)]'>SIMPLY FILL </span>
            <span className='font-bold text-[clamp(30px,7vw,90px)]'>
              THIS FORM
            </span>
          </p>

          <form className='flex flex-col gap-1 flex-1 mt-4'>
            <label className='text-[20px]'>Name</label>
            <input
              className='h-[56px] rounded-[8px] p-[12px] bg-transparent border border-[rgba(230,232,232,1)]'
              type='text'
              placeholder='Your name'
            />
            <label className='text-[20px] mt-2'>Email</label>
            <input
              className='h-[56px] rounded-[8px] p-[12px] bg-transparent border border-[rgba(230,232,232,1)]'
              type='text'
              placeholder='Your email'
            />
            <label className='text-[20px] mt-2'>Message</label>
            <textarea
              className='h-[147px] rounded-[8px] p-[12px] bg-transparent border border-[rgba(230,232,232,1)]'
              placeholder='Your message'
            />
          </form>
          <p className='font-extralight text-[clamp(24px,2vw,30.08px)] mt-8'>
            Thank you for getting in touch! Kindly. Fill the form, have a great
            day!
          </p>
        </div>
      </section>
    </>
  );
};

export default FillThisForm;
