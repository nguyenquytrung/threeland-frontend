import React from 'react';
import Image from 'next/image';
import TicketImage from '@/assets/images/ticket.svg';
import HotAirBalloonImage from '@/assets/images/hot-air-balloon.svg';
import DiamondImage from '@/assets/images/diamond.svg';
import MedalImage from '@/assets/images/medal.svg';

const WhyThreeland = () => {
  return (
    <section className='max-w-[1910px] px-[50px] lg:px-[100px] mx-auto mt-[9rem]'>
      <h3 className='text-[clamp(26px,3vw,40px)] min-[1360px]:text-[56px] font-semibold leading-[45px] mb-[clamp(1rem,2vw,3rem)]'>
        Why Threeland
      </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[3rem] sm:gap-[clamp(1rem,2vw,5rem)] items-start'>
        <div className='max-w-[344px]'>
          <Image src={TicketImage} alt='ticket' />
          <h5 className='text-[24x] font-semibold my-4 leading-[27px]'>
            Best Price Guaranteed
          </h5>
          <p className='text-justify font-extralight text-[#888888]'>
            Be recognized as the rate winner in many markets. Answering and
            consultations must be given within 24hrs.
          </p>
        </div>

        <div className='max-w-[344px]'>
          <Image src={HotAirBalloonImage} alt='ticket' />
          <h5 className='text-[24x] font-semibold my-4 leading-[27px]'>
            Best Price Guaranteed
          </h5>
          <p className='text-justify font-extralight text-[#888888]'>
            Dedicated teamwork with more than 70 professional, enthusiastic &
            best travel agent for vietnam & regional offices.
          </p>
        </div>

        <div className='max-w-[344px]'>
          <Image src={DiamondImage} alt='ticket' />
          <h5 className='text-[24x] font-semibold my-4 leading-[27px]'>
            Best Price Guaranteed
          </h5>
          <p className='text-justify font-extralight text-[#888888]'>
            A wide selection from 5-star hotels to comfy homestay & customized
            service for flexible group from FIT to MICE group.
          </p>
        </div>

        <div className='max-w-[344px]'>
          <Image src={MedalImage} alt='ticket' />
          <h5 className='text-[24x] font-semibold my-4 leading-[27px]'>
            Best Price Guaranteed
          </h5>
          <p className='text-justify font-extralight text-[#888888]'>
            Longstanding experience in 2 decades, financial stability with High
            Travel Liability Insurance Package of USD 1,000,000.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyThreeland;
