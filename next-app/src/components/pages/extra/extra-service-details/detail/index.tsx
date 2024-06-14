'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import XMarkImage from '@/assets/images/xmark.svg';
import PlusImage from '@/assets/images/_plus.svg';
import { QuestionType } from '..';

const DetailDummyData = () => {
  return (
    <div className='flex flex-col gap-8'>
      <h4 className='text-[24px] font-semibold'>VISA ASSISTANCE</h4>
      <div className='text-[24px]'>
        <p>
          Most of visitors need visa to enter Vietnam, Laos, Cambodia and
          Myanmar. Visas are waived for the citizens of the countries who signed
          a bilateral or unilateral visa exemption agreement. 4 countries exempt
          visa for each other and for citizens of South East Asian countries:
          Thailand, Malaysia, Singapore, Indonesia, Philippines. Furthermore
          Vietnam waives visa for 11 countries, fewer with Laos (6) and Cambodia
          (2). Most are from North Asia, Europe, America with few name of
          countries: UK, Germany, France, Italy, Spain, Denmark, Sweden, Norway,
          Japan and South Korea. Check with us for last update.
        </p>
        <p>
          There are 2 ways to get Visa: on arrival or at diplomatic offices. No
          matter what the way is, you must have visa approval by I.O in advance
          to get visa stamps.
        </p>
        <p>
          Instead of involving in a complicated visa procedure at the embassies,
          Threeland Travel can assist you with our efficient visa service.
          Copies us your passport and Threeland Travel will take care the rest
          within 3 working days for arrival at all international airports in
          Vietnam, Laos, Cambodia and Myanmar. We ensure the peace of mind and
          hassle free for our partners and clients, with service fees as low as
          few US dollars.
        </p>
        <p>
          We are also quite capable to arrange visa for difficult and sensitive
          nationalities or in case of urgency with visa approval within 1
          working day which help our partners and clients can manage to have
          last minute confirmation at time of travelling.
        </p>
        <p>
          In emergency, whether clients are at airport without visa, we can
          provide guarantee for them to check in countries then complete
          procedures later. Contact us at help@threeland.com and get the visa
          services.
        </p>
      </div>
      <h4 className='text-[24px] font-semibold'>
        FAST-TRACK SERVICE BY THREELAND
      </h4>
      <div>
        <p>
          Threeland completely understand that after a long haul flight, our
          clients are totally tired to consume any more time at border gate or
          to those MICE groups of hundred guests who want to save time, we
          provides fast tracks service such as:
        </p>
        <p>Welcoming at the aircraft gate</p>
        <div className='list-disc'>
          <li>
            Get visa stamp at landing visa counter without waiting in line
          </li>{' '}
          <li>Be assisted and escorted through “fast track” immigration.</li>
          <li>Baggage porters available on request.</li>
        </div>
      </div>
    </div>
  );
};

type Props = {
  item: QuestionType;
  onClick: (id: number) => void;
};

const Detail = (props: Props) => {
  const { onClick, item } = props;
  const { index, question, answer, id, open } = item;

  return (
    <div className='flex gap-8 p-6 py-[2rem] bg-[rgba(248,248,248,1)] rounded-[20px]'>
      <p
        className={`${
          open ? 'text-[rgba(0,102,179,1)]' : 'text-[rgba(106,115,115,1)]'
        } text-[32px] tracking-[0.25px] font-semibold`}
      >
        {index}
      </p>
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          <h4
            className={`text-[32px] ${
              open ? 'text-[rgba(0,102,179,1)]' : 'text-[rgba(7,21,22,1)]'
            } font-medium uppercase font-semibold`}
          >
            {question}
          </h4>
          <div role='button' onClick={() => onClick(id)} className='min-w-fit'>
            <Image src={open ? XMarkImage : PlusImage} alt='x-mark' />
          </div>
        </div>
        <div
          className={`${
            open ? 'h-fit mt-6' : 'h-0'
          } text-[rgba(60,60,67,0.85)] text-[20px] leading-[36px] font-extralight overflow-hidden transition-all duration-500`}
        >
          {/* Dummy Data */}
          <DetailDummyData />
        </div>
      </div>
    </div>
  );
};

export default Detail;
