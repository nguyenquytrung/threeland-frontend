import Image from 'next/image';
import React from 'react';

import FilterCategory from './category';
import FilterByImage from '@/assets/images/filter-by.svg';

type CategoryOptionRange = {
  title: string;
  from: string;
  to: string;
};

type CategoryOption = {
  id: string;
  name: string;
  count?: number;
  range?: CategoryOptionRange;
  defaultShow?: number;
};

type Category = {
  id: number;
  title: string;
  options: CategoryOption[];
};

type Props = {
  filterCategories: Category[];
  className?: string;
};

const Filter = ({ filterCategories, className = '' }: Props) => {
  return (
    <div className={`max-w-[414px] min-w-[256px] ${className}`}>
      <div className='flex items-center gap-2 bg-[#0066B3] p-3 text-white'>
        <Image src={FilterByImage} alt='filter-by' />
        <p className='text-[20px]'>Filter by</p>
      </div>

      <div className='flex flex-col gap-6 p-5 pt-3 border border-[#F3F3F3]'>
        {filterCategories.map((item) => (
          <FilterCategory key={item.id} category={item} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
