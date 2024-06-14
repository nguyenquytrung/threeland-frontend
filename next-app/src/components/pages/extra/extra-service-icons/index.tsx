import React from 'react';
import Image from 'next/image';
import Shape from '@/assets/images/extra-service/extra-service-shape.svg';
import VisaAssistance from '@/assets/images/extra-service/visa-assistance.svg';
import Transportation from '@/assets/images/extra-service/transportation.svg';
import Flights from '@/assets/images/extra-service/flights.svg';
import Hotels from '@/assets/images/extra-service/hotels.svg';

const services = [
  { id: 0, name: 'Visa assistance', img: VisaAssistance },
  { id: 1, name: 'Transportation', img: Transportation },
  { id: 2, name: 'Flights', img: Flights },
  { id: 3, name: 'Hotels', img: Hotels },
];

const ExtraServiceIcons = () => {
  return (
    <>
      <section className='hidden min-[940px]:block relative w-fit my-[clamp(1rem,5vw,5rem)] px-[24px] sm:px-[50px] lg:px-[100px] xl:mx-auto max-[939px]:bg-extra-service-icons'>
        <Image src={Shape} alt='Shape' className='hidden min-[940px]:block' />
        <div className='min-[940px]:absolute inset-0 text-white pt-[1rem] px-[1rem]'>
          <h3 className='text-[clamp(24px,2vw,32px)] font-semibold text-center'>
            Threeland Travel Extra Service
          </h3>
          <div className='grid grid-cols-4 gap-1 mt-[1rem] min-[1180px]:mt-[clamp(1rem,4vw,4rem)] px-[24px] sm:px-[50px] lg:px-[100px]'>
            {services.map((item) => (
              <div key={item.id} className='flex flex-col gap-2 items-center'>
                <Image src={item.img} alt='service' />
                <p className='text-[24px] font-medium'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='block min-[940px]:hidden relative w-full py-[clamp(1rem,5vw,5rem)] px-[24px] sm:px-[50px] lg:px-[100px] xl:mx-auto bg-extra-service-icons'>
        <div className='min-[940px]:absolute inset-0 text-white pt-[1rem] px-[1rem]'>
          <h3 className='text-[clamp(24px,2vw,32px)] font-semibold text-center'>
            Threeland Travel Extra Service
          </h3>
          <div className='grid grid-cols-1 min-[410px]:grid-cols-2 md:grid-cols-4 gap-4 md:gap-1 mt-[1rem] min-[1180px]:mt-[clamp(1rem,4vw,4rem)]'>
            {services.map((item) => (
              <div key={item.id} className='flex flex-col gap-2 items-center'>
                <Image src={item.img} alt='service' />
                <p className='text-[20px] font-medium'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExtraServiceIcons;
