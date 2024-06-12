'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import RightArrowImage from '@/assets/images/right-slider-white.svg';

type CategoryOption = {
  id: string;
  name: string;
  count?: number;
};

type Range = {
  title: string;
  from: string;
  to: string;
};

type Category = {
  id: number | string;
  title: string;
  options: CategoryOption[];
  defaultShow?: number;
  range?: Range;
};

type Props = {
  category: Category;
};

const FilterCategory = (props: Props) => {
  const { category } = props;
  const { id, title, options, defaultShow, range } = category;

  const [isShowFull, setIsShowFull] = useState(false);

  const showedOptions =
    defaultShow && !isShowFull ? options.slice(0, defaultShow) : options;

  const handleToggle = () => {
    setIsShowFull(!isShowFull);
  };

  return (
    <div key={id} className=''>
      <h5 className='text-[20px] font-medium'>{title}</h5>
      <div className='mt-3 flex flex-col gap-3'>
        {showedOptions.map((item) => (
          <div key={item.id} className='flex gap-2 items-center'>
            <input type='checkbox' />
            <p className='text-[#4A4A4A]'>{item.name}</p>
            {item.count && (
              <p className='ml-auto text-[#9CA1A2]'>({item.count})</p>
            )}
          </div>
        ))}
      </div>
      {defaultShow && (
        <div
          role='button'
          onClick={handleToggle}
          className='text-[#01B7F2] text-[13px] hover:underline mt-2'
        >
          {isShowFull
            ? `Hide ${options.length - defaultShow}`
            : `Show ${options.length - defaultShow} more`}
        </div>
      )}
      {range && (
        <div className='mt-2'>
          <p className='text-[14px] text-[#4A4A4A]'>{range.title}</p>
          <div className='flex flex-wrap items-center gap-2 mt-2'>
            <input
              type='text'
              className='text-[14px] border border-[#D2D6D9] rounded-[4px] h-[36px] w-[128px] max-w-[128px] px-2'
              placeholder={range.from}
            />
            <span className='text-[14px]'>to</span>
            <input
              type='text'
              className='text-[14px] border border-[#D2D6D9] rounded-[4px] h-[36px] w-[128px] max-w-[128px] px-2'
              placeholder={range.to}
            />
            <div
              role='button'
              className='bg-[#0066B3] w-[36px] h-[36px] rounded-[4px] flex items-center justify-center'
            >
              <Image src={RightArrowImage} alt='right' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterCategory;
