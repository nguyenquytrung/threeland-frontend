'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import XMarkImage from '@/assets/images/xmark.svg';
import PlusImage from '@/assets/images/_plus.svg';
import { QuestionType } from '..';

type Props = {
  item: QuestionType;
  onClick: (id: number) => void;
  isDestination?: boolean
};

const Question = (props: Props) => {
  const { onClick, item, isDestination = false } = props;
  const { index, question, answer, id, open } = item;

  return (
    <div className='flex gap-8 bg-white p-4'>
      {!isDestination && <p className='text-[rgba(106,115,115,1)] text-[32px] tracking-[0.25px] font-semibold'>
        {index}
      </p>}
      <div className='flex-1'>
        <div className='flex justify-between items-center'>
          {isDestination &&
            <div role='button' onClick={() => onClick(id)} className=''>
              <Image src={open ? XMarkImage : PlusImage} alt='x-mark' />
            </div>}
          <h4 className={` ${isDestination ? 'flex-1 text-[18px] text-[#394445] leading-[40px] text-justify pl-10' : 'text-[20px] text-[rgba(7,21,22,1)] font-medium'}`}>
            {question}
          </h4>
          {!isDestination && <div role='button' onClick={() => onClick(id)} className='min-w-fit'>
            <Image src={open ? XMarkImage : PlusImage} alt='x-mark' />
          </div>}
        </div>
        <p
          className={`${open ? 'h-fit mt-6' : 'h-0'
            } text-[rgba(60,60,67,0.85)] text-[20px] leading-[36px] font-extralight overflow-hidden transition-all duration-500`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Question;
