import Image from 'next/image';
import React from 'react';

import FilterCategory from './category';
import FilterByImage from '@/assets/images/filter-by.svg';

const filterCategories = [
  {
    id: 0,
    title: 'DURATION',
    options: [
      { id: 'option-01', name: 'Under 7 days' },
      { id: 'option-02', name: '7-10 days' },
      { id: 'option-03', name: '11-15 days' },
      { id: 'option-04', name: 'Over 15 days' },
    ],
  },
  {
    id: 1,
    title: 'DESTINATION',
    options: [
      { id: 'option-11', name: 'Hanoi' },
      { id: 'option-12', name: 'Nha Trang' },
      { id: 'option-13', name: 'Phu Quoc' },
      { id: 'option-14', name: 'Ha Long' },
      { id: 'option-15', name: 'Da Nang' },
      { id: 'option-16', name: 'Hue' },
      { id: 'option-17', name: 'Ha Giang' },
    ],
    defaultShow: 4,
  },
  {
    id: 2,
    title: 'TRAVEL STYLE IN VIETNAM',
    options: [
      { id: 'option-21', name: 'Young Adults', count: 248 },
      { id: 'option-22', name: 'Kids', count: 509 },
      { id: 'option-23', name: 'Couples', count: 237 },
      { id: 'option-24', name: 'Singles & Solo', count: 88 },
      { id: 'option-25', name: 'Luxury travellers', count: 88 },
      { id: 'option-26', name: 'Family with kids', count: 88 },
      { id: 'option-27', name: 'Group travel', count: 88 },
      { id: 'option-28', name: 'Budget Travellers', count: 88 },
      { id: 'option-29', name: 'Honey moon', count: 88 },
    ],
  },
  {
    id: 3,
    title: 'PRICE PER PAX',
    options: [
      { id: 'option-31', name: 'Under $ 500' },
      { id: 'option-32', name: '$ 500 - $ 1000' },
      { id: 'option-33', name: '$ 1000 - $ 1500' },
      { id: 'option-34', name: '$ 1500 - $ 2000' },
      { id: 'option-35', name: 'Over $ 2000' },
    ],
    range: {
      title: 'Your Budget',
      from: 'Min',
      to: 'Max',
    },
  },
  {
    id: 4,
    title: 'STAR CATEGORY',
    options: [
      { id: 'option-41', name: '5 star', count: 18 },
      { id: 'option-42', name: '4 star', count: 115 },
      { id: 'option-43', name: '5 star', count: 374 },
    ],
  },
  {
    id: 5,
    title: 'THEME',
    options: [
      { id: 'option-51', name: 'Nature', count: 530 },
      { id: 'option-52', name: 'Relaxation', count: 114 },
      { id: 'option-53', name: 'Cultural', count: 90 },
      { id: 'option-54', name: 'Foodies delight', count: 31 },
      { id: 'option-55', name: 'Off the beaten track', count: 30 },
      { id: 'option-56', name: 'Interact with local', count: 90 },
      { id: 'option-57', name: 'Soft adventure', count: 31 },
      { id: 'option-58', name: 'History', count: 30 },
    ],
  },
];

const Filter = () => {
  return (
    <div className='w-[414px]'>
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
