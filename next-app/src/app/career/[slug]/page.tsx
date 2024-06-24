import React from 'react';

const Page = () => {
  return (
    <main className='py-[clamp(1rem,3vw,3rem)]'>
      <div className='max-w-[1680px] mx-auto px-[24px] sm:px-[50px] lg:px-[100px]'>
        <h1 className='text-center font-bold text-[clamp(0.5em,4vw,3em)] mb-4'>
          SENIOR TOUR OPERATOR
        </h1>
        <div className='flex flex-col gap-4 font-extralight'>
          <p>
            Threeland Travel is a South East Asia DMC, founded in Jan-2003 and
            specialised in Tours / Travel Services in Vietnam, Laos, Cambodia,
            Thailand and Myanmar.
          </p>
          <p>
            We are looking for your joining if you are as Dynamic, Young,
            Proactive as our present colleagues.
          </p>
          <p>
            <span className='font-medium'>Job title</span>: Senior Tour Operator
          </p>
          <p>
            <span className='font-medium'>Department</span>: Operation
            Department
          </p>
          <p>
            <span className='font-medium'>Location</span>: Hanoi – Viet Nam
          </p>
          <p>
            <span className='font-medium'>Schedule</span>: Full-time
          </p>

          <h5 className='font-medium mt-8'>BENEFITS</h5>
          <p className='pl-4'>
            <li>Quarterly trading bonus</li>
            <li>Special bonus for success over expectations</li>
            <li>Special bonus for own-advertised business</li>
            <li>New Year benefits</li>
            <li>13th month salary</li>
            <li>Yearly summer vacation</li>
            <li>
              Potential to be promoted within Threeland and associated companies
            </li>
          </p>

          <h5 className='font-medium mt-8'>JOB DESCRIPTION</h5>
          <p className='pl-4'>
            <li>Leading a group of 4-5 operators</li>
            <li>...</li>
          </p>

          <h5 className='font-medium mt-8'>REQUIREMENTS</h5>
          <p className='pl-4'>
            <li>Knowledge equal to Universities’ or Colleges’ alumni</li>
            <li>...</li>
          </p>

          <h5 className='font-medium mt-8'>OTHER REQUIREMENTS</h5>
          <p className='pl-4'>
            <li>Having love to traveling</li>
            <li>...</li>
          </p>

          <h5 className='font-medium mt-8'>APPLICATION PROGRESS</h5>
          <p className='pl-4'>
            <li>CV and Application in English only</li>
            <li>...</li>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
